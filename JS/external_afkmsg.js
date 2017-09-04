/*
    AFK message plugin for CyTube
    zeratul (github.com/zeratul0)
    v1.3
    - increased cooldown to 5 minutes
*/
if (!CLIENT.hasOwnProperty('AFKMSG')) {
    CLIENT.AFKMSG = {
        "enabled": false,
        "forced" : false,
        "message": ""
    }
    window.AFKcd = [];
    
    function addUserToCD(name) {
        name = name.toLowerCase();
        if (~AFKcd.indexOf(name)) return;
        else AFKcd.push(name);
        setTimeout(function() {
            AFKcd.splice(AFKcd.indexOf(name), 1);
        }, 300000);
    }

    function sendAFKMessage(to) {
        if (CLIENT.AFKMSG.enabled && to !== CLIENT.name && (CLIENT.afk || (!CLIENT.afk && CLIENT.AFKMSG.forced)) && !~AFKcd.indexOf(to.toLowerCase())) {
            addUserToCD(to);
            socket.emit('pm', {'to': to, 'msg': '[AFK] ' + (CLIENT.AFKMSG.message.trim() === "" ? "User is AFK. (default AFK message)" : CLIENT.AFKMSG.message)});
        }
    }

    function handleAFKMessageCmd(msg) {
        var splitmsg = msg.split(/\s+/);
        if (splitmsg.length === 1) {
            var status = CLIENT.AFKMSG.enabled ? '<span style="color:#0f0">ON</span>' : '<span style="color:#f00">OFF</span>';
            var forced = 'Message will be sent' + (CLIENT.AFKMSG.forced ? '<span style="color:#0ff"> regardless of AFK status.</span>' : '<span style="color:#ff0"> only if you are marked as AFK.</span>');
            var afkmsg = CLIENT.AFKMSG.message.trim() === "" ? "<span style='color:#f0f'>(none set)</span>" : "<span style='color:#09f'>" + CLIENT.AFKMSG.message.replace(/\<|\>/g, function(x) {if (x === "<") return "&lt;"; else if (x === ">") return "&gt;";}) + "</span>";
            return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] AFK message is ' + status + '. ' + forced + ' Message: ' + afkmsg, 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
        }
        if (splitmsg[1].toLowerCase() === "set") {
            if (splitmsg.length < 3) {
                return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] /afkmessage set <message to set> -- Changes your current AFK message.', 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            }
            var parts = [];
            var i = 2;
            for (;i < splitmsg.length; i++) {
                parts.push(splitmsg[i]);
            }
            var old = CLIENT.AFKMSG.message;
            CLIENT.AFKMSG.message = parts.join(" ");
            setOpt('afkmsg', CLIENT.AFKMSG);
            addChatMessage({'username':'[server]', 'msg':'[AFKMessage] Old message: <span style="color:#f00">' + old.replace(/\<|\>/g, function(x) {if (x === "<") return "&lt;"; else if (x === ">") return "&gt;";}) + '</span>', 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] New message: <span style="color:#0f0">' + CLIENT.AFKMSG.message.replace(/\<|\>/g, function(x) {if (x === "<") return "&lt;"; else if (x === ">") return "&gt;";}) + '</span>', 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
        } else if (splitmsg[1].toLowerCase() === "force") {
            CLIENT.AFKMSG.forced = !CLIENT.AFKMSG.forced;
            setOpt('afkmsg', CLIENT.AFKMSG);
            return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] Message will now be sent' + (CLIENT.AFKMSG.forced ? '<span style="color:#0ff"> regardless of AFK status.</span>' : '<span style="color:#ff0"> only if you are marked as AFK.</span>'), 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
        } else if (splitmsg[1].toLowerCase() === "disable" || splitmsg[1].toLowerCase() === "off") {
            if (!CLIENT.AFKMSG.enabled)
                return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] AFK Message is already <span style="color:#f00">OFF</span>.' , 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            else {
                CLIENT.AFKMSG.enabled = false;
                setOpt('afkmsg', CLIENT.AFKMSG);
                return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] AFK Message is now <span style="color:#f00">OFF</span>.' , 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            }
        } else if (splitmsg[1].toLowerCase() === "enable" || splitmsg[1].toLowerCase() === "on") {
            if (CLIENT.AFKMSG.enabled)
                return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] AFK Message is already <span style="color:#0f0">ON</span>.' , 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            else {
                CLIENT.AFKMSG.enabled = true;
                setOpt('afkmsg', CLIENT.AFKMSG);
                return addChatMessage({'username':'[server]', 'msg':'[AFKMessage] AFK Message is now <span style="color:#0f0">ON</span>.' , 'meta':{'addClass':'server-whisper'}, 'time':Date.now()});
            }
        }
    }

    socket.on('chatMsg', function(data) {
        if (CLIENT.AFKMSG.enabled && data.msg && data.username && CLIENT.name && ~data.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase()) && data.username !== "[server]" && data.username !== CLIENT.name && $('.userlist-' + data.username).parent().data().rank > 0) {
            sendAFKMessage(data.username);
        }
    });

    socket.on('pm', function(data) {
        if (CLIENT.AFKMSG.enabled && data.msg && data.username && CLIENT.name && data.username !== "[server]" && data.username !== CLIENT.name && $('.userlist-' + data.username).parent().data().rank > 0) {
            sendAFKMessage(data.username);
        }
    });

    //compatibility with xaekai's color plugin
    $("#chatline").unbind("keydown");
    if (window[CHANNEL.name] && window[CHANNEL.name]["chatline"] && window[CHANNEL.name]["chatline"].initialized) {
        $("#chatline").keydown(function(ev) {
            function generateChatlineColor() {
                function genHex() {
                    return Math.floor(Math.random() * 180 + 75).toString(16)
                }
                switch (window[CHANNEL.name].chatline.setting.type) {
                    case "random":
                        return "#" + genHex() + genHex() + genHex();
                        break;
                    case "static":
                        return window[CHANNEL.name].chatline.setting.static;
                        break;
                    case "cycle":
                        return window[CHANNEL.name].chatline.cycleDo();
                        break
                }
            }
            if (ev.keyCode == 13) {
                if (CHATTHROTTLE) {
                    return
                }
                var msg = $("#chatline").val();
                var splitmsg = msg.trim().split(/\s+/);
                if (splitmsg[0].match(/\/selfclear|\/sclear/)) {
                    Callbacks.clearchat();
                    $("#chatline").val("");
                    return
                }
                if (splitmsg[0] && (splitmsg[0].toLowerCase() === "/afkmsg" || splitmsg[0].toLowerCase() === "/afkmessage")) {
                    CHATHIST.push($("#chatline").val());
                    CHATHISTIDX = CHATHIST.length;
                    $("#chatline").val("");
                    return handleAFKMessageCmd(msg.trim());
                }
                if (splitmsg[0] == "/spoiler") {
                    $("#messagebuffer").data("spoilertype", $("#messagebuffer").data("spoilertype") === "hover" ? "click" : "hover");
                    $(".image-spoiler").each(function() {
                        $(this).attr("src", $(this).data()["spoiler"]).attr("data-spoiled", "false")
                    });
                    window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your spoiler setting is now: ", $("#messagebuffer").data("spoilertype"), "."));
                    $("#chatline").val("");
                    return
                }
                if (splitmsg[0] == "/wipesettings") {
                    Object.keys(localStorage).filter((i => {
                        return i.match(new RegExp("^" + CHANNEL.name))
                    })).each((i => localStorage.removeItem(i)));
                    window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your channel settings have been wiped."));
                    $("#chatline").val("");
                    return
                }
                if (splitmsg[0] == "/smartpurge") {
                    if (CLIENT.rank >= CHANNEL.perms.playlistdelete) {
                        playlist().filter((i => {
                            return !(userlist(true).indexOf(i.addedby) > -1)
                        })).each((i => {
                            socket.emit("delete", i.uid)
                        }));
                        socket.emit("chatMsg", {
                            msg: String().concat("/me ", "smartpurged the playlist."),
                            meta: {}
                        })
                    } else {
                        window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "You have insufficient rank to use this."))
                    }
                    $("#chatline").val("");
                    return
                }
                if (splitmsg[0] == "/pm") {
                    splitmsg.shift();
                    var user = splitmsg.shift();
                    msg = splitmsg.join(" ").trim();
                    if (userlist(true).indexOf(user) == -1) {
                        window[CHANNEL.name].VirtualWhisper(String().concat("[System] User not found."));
                        return
                    }
                    if (!$("#pm-" + user).length) {
                        initPm(user).find(".panel-heading").click()
                    } else {
                        if (!msg.length) {
                            window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "The PM window is already open retard."))
                        }
                    }
                    if (msg.length) {
                        socket.emit("pm", {
                            to: user,
                            msg: msg,
                            meta: {}
                        })
                    }
                    $("#chatline").val("");
                    return
                }
                if (CLIENT.rank >= CHANNEL.perms.playlistmove && splitmsg.length == 3 && splitmsg[0] == "/move") {
                    if (!isNaN(parseInt(splitmsg[1])) && parseInt(splitmsg[1]) > 0 && parseInt(splitmsg[1]) <= $("#queue li").length) {
                        if (!isNaN(parseInt(splitmsg[2])) && parseInt(splitmsg[2]) > 0 && parseInt(splitmsg[2]) <= $("#queue li").length) {
                            if (parseInt(splitmsg[2]) > parseInt(splitmsg[1])) {
                                socket.emit("chatMsg", {
                                    msg: "/me moves a video.",
                                    meta: {}
                                });
                                socket.emit("moveMedia", {
                                    from: $("#queue li").eq(parseInt(splitmsg[1]) - 1).data("uid"),
                                    after: $("#queue li").eq(parseInt(splitmsg[2]) - 1).data("uid")
                                })
                            } else {
                                socket.emit("chatMsg", {
                                    msg: "/me moves a video.",
                                    meta: {}
                                });
                                socket.emit("moveMedia", {
                                    from: $("#queue li").eq(parseInt(splitmsg[1]) - 1).data("uid"),
                                    after: $("#queue li").eq(parseInt(splitmsg[2]) - 2).data("uid")
                                })
                            }
                        }
                    }
                    $("#chatline").val("");
                    return
                }
                if (CLIENT.rank >= CHANNEL.perms.playlistmove && splitmsg.length >= 2 && splitmsg[0] == "/bump") {
                    splitmsg.shift();
                    var user = splitmsg.shift();
                    var pos = splitmsg.length ? parseInt(splitmsg.shift()) : -1;
                    var dest;
                    console.log(user, pos);
                    var bumped = $("#queue li").filter(function(v, i) {
                        return $(i).data()["blame"].toLowerCase() == user.toLowerCase()
                    }).last();
                    if (!bumped.length) {
                        window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Video by user ", user, " not found."));
                        $("#chatline").val("");
                        return
                    }
                    if (!(!isNaN(pos) && pos > 0 && pos <= $("#queue li").length)) {
                        if (pos !== -1) {
                            window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Destination doesn't exist."));
                            $("#chatline").val("");
                            return
                        } else {
                            dest = PL_CURRENT
                        }
                    } else {
                        dest = $("#queue li").eq(pos - 1).data("uid")
                    }
                    socket.emit("chatMsg", {
                        msg: "/me moves a video.",
                        meta: {}
                    });
                    socket.emit("moveMedia", {
                        from: bumped.data("uid"),
                        after: dest
                    });
                    $("#chatline").val("");
                    return
                }
                if (msg.trim()) {
                    var meta = {};
                    if (USEROPTS.adminhat && CLIENT.rank >= 255) {
                        msg = "/a " + msg
                    } else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
                        meta.modflair = CLIENT.rank
                    }
                    if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
                        meta.modflair = CLIENT.rank;
                        msg = msg.substring(3)
                    }
                    maxLength = 220;
                    if (msg.indexOf("ssc:") == -1 && (msg[0] !== "/" && msg[0] !== ">") && msg.length < maxLength && window[CHANNEL.name].chatline.toggleState) {
                        msg = "ssc:" + generateChatlineColor() + "  " + msg
                    }
                    if (msg.match(/^\/setcolor/)) {
                        return window[CHANNEL.name].chatline.handleSettingsMessage(ev, this, msg)
                    }
                    if (msg.match(/^\/tts/)) {
                        window.ttsToggle = !window.ttsToggle;
                        $("#chatline").val("");
                        return
                    }
                    socket.emit("chatMsg", {
                        msg: msg,
                        meta: meta
                    });
                    CHATHIST.push($("#chatline").val());
                    CHATHISTIDX = CHATHIST.length;
                    $("#chatline").val("")
                } else {
                    if (ev.ctrlKey && CHATHIST.length) {
                        if (CLIENT.enterHold) {
                            return
                        }
                        CLIENT.enterHold = true;
                        var msg = CHATHIST[CHATHIST.length - 1];
                        var meta = {};
                        if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
                            meta.modflair = CLIENT.rank
                        }
                        if (window[CHANNEL.name].chatline.toggleState) {
                            msg = "ssc:" + generateChatlineColor() + "  " + msg
                        }
                        socket.emit("chatMsg", {
                            msg: msg,
                            meta: meta
                        })
                    }
                }
                return
            } else if (ev.keyCode == 9) {
                chatTabComplete();
                ev.preventDefault();
                return false
            } else if (ev.keyCode == 38) {
                if (CHATHISTIDX == CHATHIST.length) {
                    CHATHIST.push($("#chatline").val())
                }
                if (CHATHISTIDX > 0) {
                    CHATHISTIDX--;
                    $("#chatline").val(CHATHIST[CHATHISTIDX])
                }
                ev.preventDefault();
                return false
            } else if (ev.keyCode == 40) {
                if (CHATHISTIDX < CHATHIST.length - 1) {
                    CHATHISTIDX++;
                    $("#chatline").val(CHATHIST[CHATHISTIDX])
                }
                ev.preventDefault();
                return false
            }
        });
    } else {
        $("#chatline").keydown(function(ev) {
            // Enter/return
            if(ev.keyCode == 13) {
                if (CHATTHROTTLE) {
                    return;
                }
                var msg = $("#chatline").val();
                if(msg.trim()) {
                    if (msg.toLowerCase().indexOf("/afkmsg ") === 0 || msg.toLowerCase().indexOf("/afkmessage ") === 0) {
                        CHATHIST.push($("#chatline").val());
                        CHATHISTIDX = CHATHIST.length;
                        $("#chatline").val("");
                        return handleAFKMessageCmd(msg.trim());
                    }
                    var meta = {};
                    if (USEROPTS.adminhat && CLIENT.rank >= 255) {
                        msg = "/a " + msg;
                    } else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
                        meta.modflair = CLIENT.rank;
                    }

                    // The /m command no longer exists, so emulate it clientside
                    if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
                        meta.modflair = CLIENT.rank;
                        msg = msg.substring(3);
                    }

                    socket.emit("chatMsg", {
                        msg: msg,
                        meta: meta
                    });
                    CHATHIST.push($("#chatline").val());
                    CHATHISTIDX = CHATHIST.length;
                    $("#chatline").val("");
                }
                return;
            }
            else if(ev.keyCode == 9) { // Tab completion
                try {
                    chatTabComplete();
                } catch (error) {
                    console.error(error);
                }
                ev.preventDefault();
                return false;
            }
            else if(ev.keyCode == 38) { // Up arrow (input history)
                if(CHATHISTIDX == CHATHIST.length) {
                    CHATHIST.push($("#chatline").val());
                }
                if(CHATHISTIDX > 0) {
                    CHATHISTIDX--;
                    $("#chatline").val(CHATHIST[CHATHISTIDX]);
                }

                ev.preventDefault();
                return false;
            }
            else if(ev.keyCode == 40) { // Down arrow (input history)
                if(CHATHISTIDX < CHATHIST.length - 1) {
                    CHATHISTIDX++;
                    $("#chatline").val(CHATHIST[CHATHISTIDX]);
                }

                ev.preventDefault();
                return false;
            }
        });
    }
    var opt = getOpt('afkmsg');
    if (opt) {
        CLIENT.AFKMSG = opt;
    }
}