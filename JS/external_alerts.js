/*!
 **|  CyTube Audio Notifications System
 **|  Copyright 2013-2015 Xaekai
 **|
 **@preserve
 */
if (!window[CHANNEL.name]) window[CHANNEL.name] = {};
if (!$("#customSettingsStaging").length) {
    $("<div/>").prop("id", "customSettingsStaging").hide().insertAfter("#useroptions")
}
if (!window[CHANNEL.name].audioNotice) {
    window[CHANNEL.name].audioNotice = {};
    window[CHANNEL.name].audioNotice.Squee = {
        timeSinceLast: 0
    };
    window[CHANNEL.name].audioNotice.Poll = {
        timeSinceLast: 0
    };
    window[CHANNEL.name].audioNotice.Priv = {
        timeSinceLast: 0
    };
    window[CHANNEL.name].audioNotice.Video = {
        timeSinceLast: 0
    }
}
window[CHANNEL.name].audioNotice.typeNames = {
    Squee: "Username",
    Poll: "Poll",
    Priv: "Private Message",
    Video: "Queued Video"
};
window[CHANNEL.name].audioNotice.pushNoticeChange = function(change) {
    var type, id, silent;
    type = change.type;
    id = change.id;
    silent = change.silent;
    window[CHANNEL.name].audioNotice[type].id = id;
    window[CHANNEL.name].audioNotice[type].file = window[CHANNEL.name].audioNotice.choices[id];
    localStorage[CHANNEL.name + "_AudioNotice" + type + "ID"] = id;
    $("#AudioNotice" + this.typeNames[type].split(" ")[0]).remove();
    window[CHANNEL.name].audioNotice[type].audio = $("<audio>").prop("id", "AudioNotice" + this.typeNames[type].split(" ")[0]).appendTo("body").attr("preload", "auto").prop("volume", window[CHANNEL.name].audioNotice[type].volume).append($("<source>").attr("src", window[CHANNEL.name].audioNotice[type].file).attr("type", "audio/ogg"));
    if (!silent) {
        window[CHANNEL.name].audioNotice[type].audio[0].play();
        $("div.chat-msg-\\\\\\$server\\\\\\$:contains(" + this.typeNames[type] + " Notification)").remove();
        window[CHANNEL.name].VirtualWhisper(this.typeNames[type] + " Notification Changed to: " + id)
    }
};
window[CHANNEL.name].audioNotice.pushVolume = function(change) {
    var type, volume;
    type = change.type;
    volume = change.volume;
    if (volume == "up") {
        volume = (window[CHANNEL.name].audioNotice[type].volume * 100 + 5) / 100
    } else if (volume == "down") {
        volume = (window[CHANNEL.name].audioNotice[type].volume * 100 - 5) / 100
    } else {
        return console.error("ERROR: AudioNotice System: Volume must be 'up' or 'down'")
    }
    volume = Math.min(Math.max(volume, .05), 1) || .6;
    window[CHANNEL.name].audioNotice[type].volume = volume;
    localStorage[CHANNEL.name + "_AudioNotice" + type + "Volume"] = Math.floor(volume * 100);
    window[CHANNEL.name].audioNotice[type].audio.prop("volume", volume)[0].play();
    if (window[CHANNEL.name].audioNotice[type].indicator) window[CHANNEL.name].audioNotice[type].indicator.html(Math.floor(volume * 100))
};
window[CHANNEL.name].audioNotice.toggle = function(type) {
    window[CHANNEL.name].audioNotice[type].toggleState = !window[CHANNEL.name].audioNotice[type].toggleState;
    localStorage[CHANNEL.name + "_AudioNotice" + type + "Toggle"] = +window[CHANNEL.name].audioNotice[type].toggleState;
    if (window[CHANNEL.name].audioNotice[type].toggleButton) window[CHANNEL.name].audioNotice[type].toggleButton.toggleClass("label-default label-info");
    window[CHANNEL.name].audioNotice[type].panel.toggleClass("btn-danger btn-success")
};
window[CHANNEL.name].audioNotice.handler = {
    Squee: function(data) {
        var squee;
        if (!window[CHANNEL.name].audioNotice.Squee.toggleState) {
            return
        }
        if (!CHANNEL.opts.chat_antiflood) {
            console.info();
            return
        }
        if (Date.now() - window[CHANNEL.name].audioNotice.Squee.timeSinceLast < 7e3) return;
        squee = $(".nick-highlight:not( .parsed )");
        if (!squee.length) return;
        squee.addClass("parsed");
        var start = Date.parse("2015-10-31T04:00:00Z"),
            end = Date.parse("2015-11-01T04:00:00Z"),
            current = Date.now();
        current > start && end > current ? function() {
            toot = new Audio("/skulltrumpet.wav");
            toot.volume = .33;
            toot.play()
        }() : window[CHANNEL.name].audioNotice.Squee.audio[0].play();
        window[CHANNEL.name].audioNotice.Squee.timeSinceLast = Date.now()
    },
    Poll: function(data) {
        if (!window[CHANNEL.name].audioNotice.Poll.toggleState) return;
        if (CLIENT.rank < CHANNEL.perms.pollvote) return;
        if (Date.now() - window[CHANNEL.name].audioNotice.Poll.timeSinceLast < 36e4) return;
        window[CHANNEL.name].audioNotice.Poll.audio[0].play();
        window[CHANNEL.name].audioNotice.Poll.timeSinceLast = Date.now()
    },
    Priv: function(data) {
        if (!window[CHANNEL.name].audioNotice.Priv.toggleState) return;
        if (data.username == CLIENT.name) return;
        if ($(document.activeElement).hasClass("pm-input")) return;
        if (Date.now() - window[CHANNEL.name].audioNotice.Priv.timeSinceLast < 18e4) return;
        window[CHANNEL.name].audioNotice.Priv.audio[0].play();
        window[CHANNEL.name].audioNotice.Priv.timeSinceLast = Date.now();
        $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Private Message Notification)").remove();
        window[CHANNEL.name].VirtualWhisper("Private Message Notification")
    },
    Video: function(data) {
        var addedby;
        if (!window[CHANNEL.name].audioNotice.Video.toggleState) return;
        if (CLIENT.rank < CHANNEL.perms.seeplaylist) return;
        addedby = playlist(true).addedby == CLIENT.name;
        if (addedby && window[CHANNEL.name].audioNotice.Video.last) {
            window[CHANNEL.name].audioNotice.Video.timeSinceLast = Date.now();
            return
        }
        window[CHANNEL.name].audioNotice.Video.last = false;
        if (!addedby) return;
        if (Date.now() - window[CHANNEL.name].audioNotice.Video.timeSinceLast < 6e5) return;
        window[CHANNEL.name].audioNotice.Video.audio[0].play();
        window[CHANNEL.name].audioNotice.Video.timeSinceLast = Date.now();
        window[CHANNEL.name].audioNotice.Video.last = true;
        $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Video Notification)").remove();
        window[CHANNEL.name].VirtualWhisper("Video Notification: Your video is now playing!")
    }
};
(function() {
    if (window[CHANNEL.name].audioNotice.initialized) return;
    window[CHANNEL.name].audioNotice.initialized = true;
    window[CHANNEL.name].audioNotice["Squee"].toggleState = true;
    window[CHANNEL.name].audioNotice["Poll"].toggleState = true;
    window[CHANNEL.name].audioNotice["Priv"].toggleState = true;
    window[CHANNEL.name].audioNotice["Video"].toggleState = true;
    window[CHANNEL.name].audioNotice["Squee"].id = "squee";
    window[CHANNEL.name].audioNotice["Poll"].id = "votingpoll";
    window[CHANNEL.name].audioNotice["Priv"].id = "uhoh";
    window[CHANNEL.name].audioNotice["Video"].id = "fairywand";
    window[CHANNEL.name].audioNotice["Squee"].volume = .6;
    window[CHANNEL.name].audioNotice["Poll"].volume = .3;
    window[CHANNEL.name].audioNotice["Priv"].volume = .35;
    window[CHANNEL.name].audioNotice["Video"].volume = .35;
    if (!!window[CHANNEL.name].audioLibrary) {
        window[CHANNEL.name].audioNotice.choices = window[CHANNEL.name].audioLibrary.squees
    } else {
        window[CHANNEL.name].audioNotice.choices = {
            squee: "https://resources.pink.horse/sounds/squee.ogg",
            votingpoll: "https://resources.pink.horse/sounds/votingpoll.ogg",
            uhoh: "https://resources.pink.horse/sounds/uhoh.ogg",
            fairywand: "https://resources.pink.horse/sounds/fairy_wand.ogg"
        }
    }
    if (window[CHANNEL.name] && window[CHANNEL.name].modulesOptions && window[CHANNEL.name].modulesOptions.audioNotice) {
        var choices = Object.keys(window[CHANNEL.name].modulesOptions.audioNotice.choices);
        var notices = Object.keys(window[CHANNEL.name].modulesOptions.audioNotice.notices);
        for (var i = choices.length - 1; i >= 0; i--) {
            window[CHANNEL.name].audioNotice["choices"][choices[i]] = window[CHANNEL.name].modulesOptions.audioNotice.choices[choices[i]]
        }
        for (var i = notices.length - 1; i >= 0; i--) {
            window[CHANNEL.name].audioNotice[notices[i]]["id"] = window[CHANNEL.name].modulesOptions.audioNotice.notices[notices[i]]
        }
    }
    var types = Object.keys(window[CHANNEL.name].audioNotice.typeNames);
    if (typeof Storage !== "undefined") {
        for (var i = types.length - 1; i >= 0; i--) {
            if (localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "Toggle"] != undefined) {
                window[CHANNEL.name].audioNotice[types[i]].toggleState = parseInt(localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "Toggle"])
            }
            if (localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "ID"] != undefined) {
                window[CHANNEL.name].audioNotice[types[i]].id = localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "ID"]
            }
            if (localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "Volume"] != undefined) {
                window[CHANNEL.name].audioNotice[types[i]].volume = parseInt(localStorage[CHANNEL.name + "_AudioNotice" + types[i] + "Volume"]) / 100 || .6
            }
            window[CHANNEL.name].audioNotice.pushNoticeChange({
                type: types[i],
                id: window[CHANNEL.name].audioNotice[types[i]].id,
                silent: true
            })
        }
    } else {
        console.log("ERROR: AudioNotice System: Local storage not supported by this browser.")
    }
    window[CHANNEL.name].audioNotice.Squee.toggleButton = $("<span/>").html('Sq<span class="toggle-label">uee</span>').prop("id", "AudioNoticeSqueeToggle").attr("title", "Toggle Username Audio Notices").addClass("pointer label label-info pull-right").click(function() {
        window[CHANNEL.name].audioNotice.toggle("Squee")
    }).appendTo($("#chatheader"));
    if (!window[CHANNEL.name].audioNotice.Squee.toggleState) {
        window[CHANNEL.name].audioNotice.Squee.toggleButton.removeClass("label-info").addClass("label-default")
    }
    socket.on("chatMsg", function(data) {
        return window[CHANNEL.name].audioNotice.handler["Squee"](data)
    });
    socket.on("newPoll", function(data) {
        return window[CHANNEL.name].audioNotice.handler["Poll"](data)
    });
    socket.on("pm", function(data) {
        return window[CHANNEL.name].audioNotice.handler["Priv"](data)
    });
    socket.on("changeMedia", function(data) {
        return window[CHANNEL.name].audioNotice.handler["Video"](data)
    });
    console.log("INFO: AudioNotice System Initialized");
    window[CHANNEL.name].audioNotice.controls = $('<div id="AudioNoticeControls" class="customSettings" data-title="Audio Notifications Settings"/>').appendTo("#customSettingsStaging");
    for (var i = 0; i < types.length; i++) {
        var TYPE = types[i];
        (function() {
            var form = $("<form>").prop("action", "javascript:void(0)").addClass("form-horizontal");
            var wrapper = $("<div>").addClass("form-group").prop("id", "AudioNoticeControls" + TYPE).appendTo(form);
            window[CHANNEL.name].audioNotice.controls.append(form);
            $("<span>").addClass("label label-info col-sm-2").text(window[CHANNEL.name].audioNotice.typeNames[TYPE] + " Notice").appendTo(wrapper);
            var buttongroup = $("<div>").addClass("btn-group col-sm-4").attr("data-control", TYPE).appendTo(wrapper);
            var toggle = $("<button/>").prop("id", "AudioNoticeControls" + TYPE + "Toggle").addClass("btn btn-sm btn-success").attr("title", "Toggle " + window[CHANNEL.name].audioNotice.typeNames[TYPE] + " Notices").html('<span class="glyphicon glyphicon-bell"></span>').click(function() {
                window[CHANNEL.name].audioNotice.toggle($(this).parent().data().control)
            }).prependTo(buttongroup);
            window[CHANNEL.name].audioNotice[TYPE].panel = toggle;
            if (!window[CHANNEL.name].audioNotice[TYPE].toggleState) toggle.toggleClass("btn-success btn-danger");
            var sounds = $("<div/>").addClass("btn-group").prop("id", "AudioNoticeControls" + TYPE + "Sounds").appendTo(buttongroup);
            $("<button/>").prop("id", "AudioNoticeControls" + TYPE + "VolumeDown").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[TYPE] + " Volume Down").click(function() {
                window[CHANNEL.name].audioNotice.pushVolume({
                    type: $(this).parent().data().control,
                    volume: "down"
                })
            }).html('<span class="glyphicon glyphicon-volume-down"></span>').appendTo(buttongroup);
            window[CHANNEL.name].audioNotice[TYPE].indicator = $("<button/>").prop("id", "AudioNoticeControls" + TYPE + "Indicator").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[TYPE] + " Volume").html(window[CHANNEL.name].audioNotice[TYPE].volume * 100).appendTo(buttongroup);
            $("<button/>").prop("id", "AudioNoticeControls" + TYPE + "VolumeUp").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[TYPE] + " Volume Up").click(function() {
                window[CHANNEL.name].audioNotice.pushVolume({
                    type: $(this).parent().data().control,
                    volume: "up"
                })
            }).html('<span class="glyphicon glyphicon-volume-up"></span>').appendTo(buttongroup);
            $("<button/>").prop("id", "AudioNoticeControls" + TYPE + "Play").addClass("btn btn-sm btn-default").attr("title", "Play Notification").click(function() {
                window[CHANNEL.name].audioNotice[$(this).parent().data().control].audio[0].play()
            }).html('<span class="glyphicon glyphicon-play"></span>').appendTo(buttongroup);
            $("<button/>").addClass("btn btn-default btn-sm dropdown-toggle").attr("type", "button").attr("href", "javascript:void(0)").attr("data-toggle", "dropdown").html("<span class='glyphicon glyphicon-music'></span> Sound <span class='caret'></span>").appendTo(sounds);
            var sound_content = $("<ul/>").addClass("dropdown-menu").addClass("columns").attr("role", "menu").appendTo(sounds);
            var keys = Object.keys(window[CHANNEL.name].audioNotice.choices);
            for (var i = 0; i < keys.length; i++) {
                key = keys[i];
                var populate_list = $("<li/>").appendTo(sound_content);
                (function(i) {
                    $("<a/>").text(key).attr("href", "javascript:void(0)").attr("data-notice", key).attr("data-type", TYPE).click(function() {
                        console.log($(this).data().type, $(this).data().notice);
                        window[CHANNEL.name].audioNotice.pushNoticeChange({
                            type: $(this).data().type,
                            id: $(this).data().notice,
                            silent: false
                        })
                    }).appendTo(populate_list)
                })(i)
            }
        })()
    }
})();