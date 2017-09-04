CLIENT.notifyVideos = [];

socket.on('changeMedia', function() {
const idx = CLIENT.notifyVideos.indexOf(PLAYER.mediaId);
    if (~idx) {
        window[CHANNEL.name].VirtualWhisper("Playing [" + $(".pluid-"+PL_CURRENT).data('media')["title"] + "], notified!"); scrollChat();
        CLIENT.notifyVideos.splice(idx, 1);
        window[CHANNEL.name].audioNotice.Video.audio[0].play();
        rebuildPlaylist();
    }
});

function addQueueButtons(li) {
    li.find(".btn-group").remove();
    li.find(".qbtn-alarm").remove();
    var menu = $("<div/>").addClass("btn-group").appendTo(li);
    // Play
    if(hasPermission("playlistjump")) {
        $("<button/>").addClass("btn btn-xs btn-default qbtn-play")
            .html("<span class='glyphicon glyphicon-play'></span>Play")
            .click(function() {
                socket.emit("jumpTo", li.data("uid"));
            })
            .appendTo(menu);
    }
    // Queue next
    if(hasPermission("playlistmove")) {
        $("<button/>").addClass("btn btn-xs btn-default qbtn-next")
            .html("<span class='glyphicon glyphicon-share-alt'></span>Queue Next")
            .click(function() {
                socket.emit("moveMedia", {
                    from: li.data("uid"),
                    after: PL_CURRENT
                });
            })
            .appendTo(menu);
    }
    // Temp/Untemp
    if(hasPermission("settemp")) {
        var tempstr = li.data("temp")?"Make Permanent":"Make Temporary";
        $("<button/>").addClass("btn btn-xs btn-default qbtn-tmp")
            .html("<span class='glyphicon glyphicon-flag'></span>" + tempstr)
            .click(function() {
                socket.emit("setTemp", {
                    uid: li.data("uid"),
                    temp: !li.data("temp")
                });
            })
            .appendTo(menu);
    }
    // Delete
    if(hasPermission("playlistdelete")) {
        $("<button/>").addClass("btn btn-xs btn-default qbtn-delete")
            .html("<span class='glyphicon glyphicon-trash'></span>Delete")
            .click(function() {
                socket.emit("delete", li.data("uid"));
            })
            .appendTo(menu);
    }
    //Notify
    idx = CLIENT.notifyVideos.indexOf(li.data("media").id);
    $("<button/>").addClass("btn btn-xs btn-default qbtn-alarm" + (!~idx ? "" : " qbtn-notified"))
            .html("<span class='glyphicon glyphicon-bell'></span>Notify")
            .click(function() {
                idx = CLIENT.notifyVideos.indexOf(li.data("media").id);
                if (!~idx) {
                    CLIENT.notifyVideos.push(li.data("media").id);
                    $(this).addClass("qbtn-notified");
                    window[CHANNEL.name].VirtualWhisper("Added video to notification list."); scrollChat();
                } else {
                    CLIENT.notifyVideos.splice(idx, 1);
                    $(this).removeClass("qbtn-notified");
                    window[CHANNEL.name].VirtualWhisper("Removed video from notification list."); scrollChat();
                }
            })
            .appendTo($(menu).parent());


    if(USEROPTS.qbtn_hide && !USEROPTS.qbtn_idontlikechange
        || menu.find(".btn").length == 0)
        menu.hide();

    // I DON'T LIKE CHANGE
    if(USEROPTS.qbtn_idontlikechange) {
        menu.addClass("pull-left");
        menu.detach().prependTo(li);
        menu.find(".btn").each(function() {
            // Clear icon
            var icon = $(this).find(".glyphicon");
            $(this).html("");
            icon.appendTo(this);
        });
        menu.find(".qbtn-play").addClass("btn-success");
        menu.find(".qbtn-delete").addClass("btn-danger");
    }
    else if(menu.find(".btn").length != 0) {
        li.unbind("contextmenu");
        li.contextmenu(function(ev) {
            // Allow shift+click to open context menu
            // (Chrome workaround, works by default on Firefox)
            if (ev.shiftKey) return true;
            ev.preventDefault();
            if(menu.css("display") == "none"){
                $(".qbtn-alarm", li).show("blind");
                menu.show("blind");
            }
            else {
                $(".qbtn-alarm", li).hide();
                menu.hide("blind");
            }
            return false;
        });
    }
}

rebuildPlaylist();