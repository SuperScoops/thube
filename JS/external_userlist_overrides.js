/*!
 **|  CyTube User Enhancements:
 **|    Add class to user consecutive chat messages
 **|    Variable max message in buffer
 **|    User-classed Userlist
 **|    Userlist Helper Function
 **|    Welcome avatar by Login
 **|    Room Evacuation Function
 **|    Shift-click bypass confirm on shuffle
 **|    Userlist Autohider Control Module
 **|
 **|  Version 2015.04.09.2051
 **|
 **@preserve
 */
var MAXMESSAGES = 100;

function formatChatMessage(data, last) {
  if(!data.meta || data.msgclass) {
    data.meta = {
      addClass: data.msgclass,
      addClassToNameAndTimestamp: data.msgclass
    }
  }
  var skip = data.username === last.name;
  var consecutive = skip;
  if(data.meta.addClass === "server-whisper") skip = true;
  if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/)) skip = false;
  if(data.meta.forceShowName) skip = false;
  data.msg = stripImages(data.msg);
  data.msg = execEmotes(data.msg);
  last.name = data.username;
  var div = $("<div/>");
  if(data.meta.addClass === "drink") {
    div.addClass("drink");
    data.meta.addClass = ""
  }
  if(USEROPTS.show_timestamps) {
    var time = $("<span/>").addClass("timestamp").appendTo(div);
    var timestamp = new Date(data.time).toTimeString().split(" ")[0];
    time.text("[" + timestamp + "] ");
    if(data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
      time.addClass(data.meta.addClass)
    }
  }
  var name = $("<span/>");
  if(!skip) {
    name.appendTo(div)
  }
  if(consecutive && data.meta.addClass !== "server-whisper") {
    div.addClass("consecutive")
  }
  $("<strong/>").addClass("username").text(data.username + ": ").appendTo(name);
  if(data.meta.modflair) {
    name.addClass(getNameColor(data.meta.modflair))
  }
  if(data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
    name.addClass(data.meta.addClass)
  }
  if(data.meta.superadminflair) {
    name.addClass("label").addClass(data.meta.superadminflair.labelclass);
    $("<span/>").addClass(data.meta.superadminflair.icon).addClass("glyphicon").css("margin-right", "3px").prependTo(name)
  }
  var message = $("<span/>").appendTo(div);
  message[0].innerHTML = data.msg;
  if(data.meta.action) {
    name.remove();
    message[0].innerHTML = data.username + " " + data.msg
  }
  if(data.meta.addClass) {
    message.addClass(data.meta.addClass)
  }
  if(data.meta.shadow) {
    div.addClass("chat-shadow")
  }
  div.find("img").load(function() {
    if(SCROLLCHAT) {
      scrollChat()
    }
  });
  return div
}

function addChatMessage(data) {
  if(IGNORED.indexOf(data.username) !== -1) {
    return
  }
  if(data.meta.shadow && !USEROPTS.show_shadowchat) {
    return
  }
  if(USEROPTS.no_emotes && !data.msg.match(/<img/) && !data.msg.match(/class="sound-embed"/) && !data.msg.replace(/<\/?\w+ [^>]+?>|<\/?\w+>/g, "").replace(/:[\w.]+:/g, "").replace(/spam filtered/gi, "").replace(/\s/g, "").replace(/[:.!,]/g, "").length) {
    return
  }
  var div = formatChatMessage(data, LASTCHAT);
  var safeUsername = data.username.replace(/[^\w-]/g, "\\$");
  div.addClass("chat-msg-" + safeUsername);
  div.appendTo($("#messagebuffer"));
  div.mouseover(function() {
    $(".chat-msg-" + safeUsername).addClass("nick-hover")
  });
  div.mouseleave(function() {
    $(".nick-hover").removeClass("nick-hover")
  });
  if($("#messagebuffer").children().length > MAXMESSAGES) {
    $($("#messagebuffer").children()[0]).remove()
  }
  if(SCROLLCHAT) scrollChat();
  var isHighlight = false;
  if(CLIENT.name && data.username != CLIENT.name) {
    if(data.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase()) != -1) {
      div.addClass("nick-highlight");
      isHighlight = true
    }
  }
  pingMessage(isHighlight)
}(function(window) {
  var additionalHosts;
  try {
    additionalHosts = window[CHANNEL.name].modulesOptions.userlist.trustedHosts
  } catch(e) {
    additionalHosts = []
  }
  var scrutinize;
  try {
    scrutinize = window[CHANNEL.name].modulesOptions.userlist.scrutinize
  } catch(e) {
    scrutinize = false
  }
  var trustedHosts = new RegExp(["imgur.com", "pink.horse", ...additionalHosts].join("|"), "i");
  window.trustAvatar = function(link) {
    if(!scrutinize) {
      return true
    }
    try {
      var url = new URL(link)["host"].split("."),
        tld = url.pop(),
        host = url.pop()
    } catch(e) {
      return false
    }
    return trustedHosts.test(host + "." + tld)
  }
})(window);

function formatUserlistItem(div) {
  var data = {
    name: div.data("name") || "",
    rank: div.data("rank"),
    profile: div.data("profile") || {
      image: "",
      text: ""
    },
    leader: div.data("leader") || false,
    icon: div.data("icon") || false,
    afk: div.data("afk") || false
  };
  var name = $(div.children()[1]);
  name.removeClass();
  name.css("font-style", "");
  name.addClass(getNameColor(data.rank));
  if(data.rank === 3) {
    name.addClass("userlist_admin")
  }
  var user = data.name.replace(/[^\w-]/g, "\\$");
  name.addClass("userlist-" + user);
  div.find(".profile-box").remove();
  if(data.afk) {
    div.addClass("userlist_afk")
  } else {
    div.removeClass("userlist_afk")
  }
  if(data.leader) {
    div.addClass("userlist_leader")
  } else {
    div.removeClass("userlist_leader")
  }
  if(div.data("meta") && div.data("meta").muted) {
    div.addClass("userlist_muted")
  } else {
    div.removeClass("userlist_muted")
  }
  if(div.data("meta") && div.data("meta").smuted) {
    div.addClass("userlist_smuted")
  } else {
    div.removeClass("userlist_smuted")
  }
  var profile = null,
    avatar = null;
  try {
    avatar = trustAvatar(data.profile.image)
  } catch(e) {
    avatar = false
  }
  avatar = data.rank > 1 ? true : avatar;
  name.unbind("mouseenter");
  name.unbind("mousemove");
  name.unbind("mouseleave");
  name.mouseenter(function(ev) {
    if(profile) profile.remove();
    var top = ev.clientY + 5;
    var horiz = ev.clientX;
    profile = $("<div/>").addClass("profile-box linewrap").css("top", top + "px").appendTo(div);
    if(data.profile.image && avatar) {
	data.profile.image=data.profile.image.replace("http:","https:")
      $("<img/>").addClass("profile-image").attr("src", data.profile.image).appendTo(profile)
    }
    $("<strong/>").text(data.name).appendTo(profile);
    var meta = div.data("meta") || {};
    if(meta.ip) {
      $("<br/>").appendTo(profile);
      $("<em/>").text(meta.ip).appendTo(profile)
    }
    if(meta.aliases) {
      $("<br/>").appendTo(profile);
      $("<em/>").text("aliases: " + meta.aliases.join(", ")).appendTo(profile)
    }
    $("<hr/>").css("margin-top", "5px").css("margin-bottom", "5px").appendTo(profile);
    $("<p/>").text(data.profile.text).appendTo(profile);
    if($("body").hasClass("synchtube")) horiz -= profile.outerWidth();
    profile.css("left", horiz + "px")
  });
  name.mousemove(function(ev) {
    var top = ev.clientY + 5;
    var horiz = ev.clientX;
    if($("body").hasClass("synchtube")) horiz -= profile.outerWidth();
    profile.css("left", horiz + "px").css("top", top + "px")
  });
  name.mouseleave(function() {
    profile.remove()
  });
  var icon = div.children()[0];
  icon.innerHTML = "";
  if(data.leader) {
    $("<span/>").addClass("glyphicon glyphicon-star-empty").appendTo(icon)
  }
  if(data.afk) {
    name.css("font-style", "italic");
    $("<span/>").addClass("glyphicon glyphicon-time").appendTo(icon)
  }
  if(data.icon) {
    $("<span/>").addClass("glyphicon " + data.icon).prependTo(icon)
  }
}

function userlist(array) {
  var users = Array.prototype.slice.call($("#userlist").children()).filter(function(cv) {
    return $(cv).hasClass("userlist_item")
  }).map(function(elem) {
    return elem.children[1].innerHTML
  });
  if(array) return users;
  var userlist = {};
  for(var i = users.length - 1; i >= 0; i--) {
    userlist[users[i]] = findUserlistItem(users[i]).data()
  }
  return userlist
}(function() {
  var users = userlist(true);
  for(var i = users.length - 1; i >= 0; i--) {
    findUserlistItem(users[i]).find("span:contains(" + users[i] + ")").addClass("userlist-" + users[i]);
    findUserlistItem(users[i]).data()["profile"]["image"] = trustAvatar(findUserlistItem(users[i]).data()["profile"]["image"]) ? findUserlistItem(users[i]).data()["profile"]["image"] : null
  }
})();

function evacuateRoom(options) {
  options = options || {};
  var reason = options.reason && ": " + options.reason || ".";
  var doRefresh = !!options.doRefresh;
  var userlist_a = userlist(true);
  var userlist_o = userlist(false);
  socket.emit("chatMsg", {
    msg: "/kickanons Automated kick. Room clear invoked" + reason
  });
  for(var i = 0; i < userlist_a.length; i++) {
    if(CLIENT.rank > userlist_o[userlist_a[i]].rank) socket.emit("chatMsg", {
      msg: "/kick " + userlist_a[i] + " Automated kick. Room clear invoked" + reason
    })
  }
  socket.emit("clearPlaylist");
  socket.emit("chatMsg", {
    msg: "/clear"
  });
  if(doRefresh) location.refresh()
}
$("#shuffleplaylist").unbind("click");
$("#shuffleplaylist").click(function(event) {
  if(event.shiftKey) {
    return socket.emit("shufflePlaylist")
  }
  var shuffle = confirm("Are you sure you want to shuffle the playlist?");
  if(shuffle) {
    socket.emit("shufflePlaylist")
  }
});
if(!$("#customSettingsStaging").length) {
  $("<div/>").prop("id", "customSettingsStaging").hide().insertAfter("#useroptions")
}
$("#UserlistAutohide").remove();
(function() {
  if(!window[CHANNEL.name].autohider) window[CHANNEL.name].autohider = {};
  if(!window[CHANNEL.name].autohider.initialized) {
    window[CHANNEL.name].autohider.initialized = true;
    window[CHANNEL.name].autohider.defaultTime = 3e4;
    window[CHANNEL.name].autohider.toggleState = false;
    if(typeof Storage !== "undefined") {
      if(!(localStorage[CHANNEL.name + "_autohiderToggle"] === undefined)) {
        window[CHANNEL.name].autohider.toggleState = parseInt(localStorage[CHANNEL.name + "_autohiderToggle"])
      }
      if(!(localStorage[CHANNEL.name + "_autohiderTimeout"] === undefined)) {
        window[CHANNEL.name].autohider.timeout = parseInt(localStorage[CHANNEL.name + "_autohiderTimeout"])
      } else {
        window[CHANNEL.name].autohider.timeout = window[CHANNEL.name].autohider.defaultTime
      }
    } else {
      console.log("ERROR: Local storage not supported by this browser.")
    }
    window[CHANNEL.name].autohider.toggle = function() {
      if(window[CHANNEL.name].autohider.toggleState) {
        window[CHANNEL.name].autohider.toggleState = false;
        $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close");
        localStorage[CHANNEL.name + "_autohiderToggle"] = 0
      } else {
        window[CHANNEL.name].autohider.toggleState = true;
        if(!$("#userlist").is(":hidden")) {
          $("#userlisttoggle").click()
        }
        $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close");
        localStorage[CHANNEL.name + "_autohiderToggle"] = 1
      }
    }
  }
  $("<div>").prop("id", "UserlistAutohide").addClass("customSettings").attr("data-title", "Userlist Autohider").appendTo("#customSettingsStaging");
  $("<div>").addClass("form-group").append($("<button/>").prop("id", "ccs-userlisthide_toggle").addClass("btn btn-sm btn-default col-sm-2").attr("title", "Toggle Autohide").html("&nbsp;Toggle").prepend($("<span>").addClass("glyphicon glyphicon-eye-open")).click(function() {
    window[CHANNEL.name].autohider.toggle()
  })).append($("<label>").addClass("control-label col-sm-2").attr("for", "ccs-userlisthide_timeout").prepend($("<span>").addClass("label label-info pull-right").text("Timeout:"))).append($("<div>").addClass("col-sm-8").append($("<input>").prop("id", "ccs-userlisthide_timeout").addClass("form-control cs-textbox").attr("type", "text").attr("placeholder", "Delay before hide in ms. Default is " + window[CHANNEL.name].autohider.defaultTime).keyup(function() {
    var box = $(this);
    var value = box.val();
    var lastkey = Date.now();
    box.data("lastkey", lastkey);
    setTimeout(function() {
      if(box.data("lastkey") !== lastkey || box.val() !== value) {
        return
      }
      if(parseInt(value) > -1) {
        if(parseInt(value) < 1e4) {
          box.val(1e4);
          localStorage[CHANNEL.name + "_autohiderTimeout"] = 1e4;
          console.log("Userlist autohiding timeout set to minimum value")
        } else {
          localStorage[CHANNEL.name + "_autohiderTimeout"] = parseInt(value);
          console.log("Userlist autohiding timeout set to " + value)
        }
      } else {
        box.val("")
      }
    }, 1e3)
  }))).appendTo($("#UserlistAutohide"));
  if(window[CHANNEL.name].autohider.timeout !== window[CHANNEL.name].autohider.defaultTime) {
    $("#ccs-userlisthide_timeout").val(window[CHANNEL.name].autohider.timeout)
  }
  if(window[CHANNEL.name].autohider.toggleState) {
    $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close")
  }
  if(window[CHANNEL.name].autohider.toggleState) {
    var time = window[CHANNEL.name].autohider.timeout;
    if(!!parseInt(time)) {
      setTimeout(function() {
        if(!$("#userlist").is(":hidden")) {
          $("#userlisttoggle").click()
        }
      }, time)
    }
  }
})();
$("#messagebuffer").data("spoilertype", "hover");
$("#messagebuffer").off("mouseenter.spoiler mouseleave.spoiler");
$("#messagebuffer").on("mouseenter.spoiler mouseleave.spoiler", ".image-spoiler", function(ev) {
  if($("#messagebuffer").data("spoilertype") === "click") {
    return
  }
  if(ev.type === "mouseenter") {
    $(this).attr("src", $(this).data()["src"]).attr("data-spoiled", "true")
  } else {
    $(this).attr("src", $(this).data()["spoiler"]).attr("data-spoiled", "false")
  }
});
$("#messagebuffer").off("click.spoiler");
$("#messagebuffer").on("click.spoiler", ".image-spoiler", function(ev) {
  if(!ev.shiftKey && !ev.ctrlKey && ev.altKey) {
    ev.preventDefault();
    if($(this).hasClass("image-embed-large")) {
      $(this).removeClass("image-embed-large").addClass("image-embed-small");
      return
    }
    if($(this).hasClass("image-embed-medium")) {
      $(this).removeClass("image-embed-medium").addClass("image-embed-large");
      return
    }
    if($(this).hasClass("image-embed-small")) {
      $(this).removeClass("image-embed-small").addClass("image-embed-medium");
      return
    }
    return
  }
  if($("#messagebuffer").data("spoilertype") === "hover") {
    return
  }
  ev.preventDefault();
  if($(this).attr("data-spoiled") === "false") {
    $(this).attr("src", $(this).data()["src"]).attr("data-spoiled", "true")
  } else {
    $(this).attr("src", $(this).data()["spoiler"]).attr("data-spoiled", "false")
  }
});
$("#cs-emotes-export").unbind("click");
$("#cs-emotes-export").click(function() {
  var em = CHANNEL.emotes.map(function(f) {
    return {
      name: f.name,
      image: f.image
    }
  });
  $("#cs-emotes-exporttext").val(JSON.stringify(em).replace(/\},\{/g, "},\n{"))
});
$("#cs-chatfilters-export").unbind("click");
$("#cs-chatfilters-export").click(function() {
  var callback = function(data) {
    socket.listeners("chatFilters").splice(socket.listeners("chatFilters").indexOf(callback));
    $("#cs-chatfilters-exporttext").val(JSON.stringify(data).replace(/\},\{/g, "},\n{"))
  };
  socket.on("chatFilters", callback);
  socket.emit("requestChatFilters")
});
