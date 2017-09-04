(() => {
    if (CLIENT.displayOpts === undefined) {
        CLIENT.displayOpts = {
            'noRepeat': true,
            'utcClock': true,
            'motd': true,
            'footer':true,
            'inactivepolls':true,
            'hidevidonskip':false,
            'botMsg': {
                'pokeroll': true,
                'polls': false,
                'modMsg': false,
                'voteskip': false,
                'cmdMsg': true
            },
            'buttons': {
                'mod': true,
                'nnd':true,
                'channelcontrol': true,
                'autoplay': true,
                'largePlayer': true,
                'emotelist': true,
                'newpoll': true,

                'afkCount':true,
                'anim': true,
                'top': true,
                'squee': true,
                'lightsout':true,
                'rate':true,
                'modhat':true,

                'volumecontrol': true,
                'library': true,
                'search': true,
                'skip': true,
                'shuffle': false,
                'chance': false,
                'customembed':false,
                'playlistlock':false,
                'leader':false,
                'notify':true,
                'queuenext':true,
            }
        };
    } else {
        return console.error("Tried to load displayOpts add-on, but CLIENT.displayOpts already exists (did it load already?)");
    }

    CLIENT.displayOptsFns = {
        'load': () => {
            if (localStorage.getItem(CHANNEL.name + "_displayOpts"))
            CLIENT.displayOpts = JSON.parse(localStorage.getItem(CHANNEL.name + "_displayOpts"));
            CLIENT.displayOptsFns.updateModal();
        },
        'save': () => {
            CLIENT.displayOpts.noRepeat = $('#disopt-noRepeat').prop('checked');
            CLIENT.displayOpts.utcClock = $('#disopt-utcClock').prop('checked');
            CLIENT.displayOpts.motd = $('#disopt-motd').prop('checked');
            CLIENT.displayOpts.footer = $('#disopt-footer').prop('checked');
            CLIENT.displayOpts.inactivepolls = $('#disopt-inactivepolls').prop('checked');
            CLIENT.displayOpts.hidevidonskip = $('#disopt-hidevidonskip').prop('checked');

            CLIENT.displayOpts.botMsg.pokeroll = $('#disopt-botMsg-pokeroll').prop('checked');
            CLIENT.displayOpts.botMsg.polls = $('#disopt-botMsg-polls').prop('checked');
            CLIENT.displayOpts.botMsg.modMsg = $('#disopt-botMsg-modMsg').prop('checked');
            CLIENT.displayOpts.botMsg.voteskip = $('#disopt-botMsg-voteskip').prop('checked');
            CLIENT.displayOpts.botMsg.cmdMsg = $('#disopt-botMsg-cmdMsg').prop('checked');

            CLIENT.displayOpts.buttons.mod = $('#disopt-buttons-mod').prop('checked');
            CLIENT.displayOpts.buttons.nnd = $('#disopt-buttons-nnd').prop('checked');
            CLIENT.displayOpts.buttons.channelcontrol = $('#disopt-buttons-channelcontrol').prop('checked');
            CLIENT.displayOpts.buttons.autoplay = $('#disopt-buttons-autoplay').prop('checked');
            CLIENT.displayOpts.buttons.largePlayer = $('#disopt-buttons-largePlayer').prop('checked');
            CLIENT.displayOpts.buttons.emotelist = $('#disopt-buttons-emotelist').prop('checked');
            CLIENT.displayOpts.buttons.newpoll = $('#disopt-buttons-newpoll').prop('checked');

            CLIENT.displayOpts.buttons.afkCount = $('#disopt-buttons-afkCount').prop('checked');
            CLIENT.displayOpts.buttons.anim = $('#disopt-buttons-anim').prop('checked');
            CLIENT.displayOpts.buttons.top = $('#disopt-buttons-top').prop('checked');
            CLIENT.displayOpts.buttons.squee = $('#disopt-buttons-squee').prop('checked');
            CLIENT.displayOpts.buttons.lightsout = $('#disopt-buttons-lightsout').prop('checked');
            CLIENT.displayOpts.buttons.rate = $('#disopt-buttons-rate').prop('checked');
            CLIENT.displayOpts.buttons.modhat = $('#disopt-buttons-modhat').prop('checked');

            CLIENT.displayOpts.buttons.volumecontrol = $('#disopt-buttons-volumecontrol').prop('checked');
            CLIENT.displayOpts.buttons.library = $('#disopt-buttons-library').prop('checked');
            CLIENT.displayOpts.buttons.search = $('#disopt-buttons-search').prop('checked');
            CLIENT.displayOpts.buttons.skip = $('#disopt-buttons-skip').prop('checked');
            CLIENT.displayOpts.buttons.shuffle = $('#disopt-buttons-shuffle').prop('checked');
            CLIENT.displayOpts.buttons.chance = $('#disopt-buttons-chance').prop('checked');
            CLIENT.displayOpts.buttons.customembed = $('#disopt-buttons-customembed').prop('checked');
            CLIENT.displayOpts.buttons.playlistlock = $('#disopt-buttons-playlistlock').prop('checked');
            CLIENT.displayOpts.buttons.leader = $('#disopt-buttons-leader').prop('checked');
            CLIENT.displayOpts.buttons.notify = $('#disopt-buttons-notify').prop('checked');
            CLIENT.displayOpts.buttons.queuenext = $('#disopt-buttons-queuenext').prop('checked');
            
            CLIENT.displayOptsFns.processHidden();
            localStorage.setItem(CHANNEL.name + "_displayOpts", JSON.stringify(CLIENT.displayOpts));
        },
        'updateModal': () => {
            $('#disopt-noRepeat').prop('checked', CLIENT.displayOpts.noRepeat);
            $('#disopt-utcClock').prop('checked', CLIENT.displayOpts.utcClock);
            $('#disopt-motd').prop('checked', CLIENT.displayOpts.motd);
            $('#disopt-footer').prop('checked', CLIENT.displayOpts.footer);
            $('#disopt-inactivepolls').prop('checked', CLIENT.displayOpts.inactivepolls);
            $('#disopt-hidevidonskip').prop('checked', CLIENT.displayOpts.hidevidonskip);

            $('#disopt-botMsg-pokeroll').prop('checked', CLIENT.displayOpts.botMsg.pokeroll);
            $('#disopt-botMsg-polls').prop('checked', CLIENT.displayOpts.botMsg.polls);
            $('#disopt-botMsg-modMsg').prop('checked', CLIENT.displayOpts.botMsg.modMsg);
            $('#disopt-botMsg-voteskip').prop('checked', CLIENT.displayOpts.botMsg.voteskip);
            $('#disopt-botMsg-cmdMsg').prop('checked', CLIENT.displayOpts.botMsg.cmdMsg);

            $('#disopt-buttons-mod').prop('checked', CLIENT.displayOpts.buttons.mod);
            $('#disopt-buttons-nnd').prop('checked', CLIENT.displayOpts.buttons.nnd);
            $('#disopt-buttons-channelcontrol').prop('checked', CLIENT.displayOpts.buttons.channelcontrol);
            $('#disopt-buttons-autoplay').prop('checked', CLIENT.displayOpts.buttons.autoplay);
            $('#disopt-buttons-largePlayer').prop('checked', CLIENT.displayOpts.buttons.largePlayer);
            $('#disopt-buttons-emotelist').prop('checked', CLIENT.displayOpts.buttons.emotelist);
            $('#disopt-buttons-newpoll').prop('checked', CLIENT.displayOpts.buttons.newpoll);

            $('#disopt-buttons-afkCount').prop('checked', CLIENT.displayOpts.buttons.afkCount);
            $('#disopt-buttons-anim').prop('checked', CLIENT.displayOpts.buttons.anim);
            $('#disopt-buttons-top').prop('checked', CLIENT.displayOpts.buttons.top);
            $('#disopt-buttons-squee').prop('checked', CLIENT.displayOpts.buttons.squee);
            $('#disopt-buttons-lightsout').prop('checked', CLIENT.displayOpts.buttons.lightsout);
            $('#disopt-buttons-rate').prop('checked', CLIENT.displayOpts.buttons.rate);
            $('#disopt-buttons-modhat').prop('checked', CLIENT.displayOpts.buttons.modhat);

            $('#disopt-buttons-volumecontrol').prop('checked', CLIENT.displayOpts.buttons.volumecontrol);
            $('#disopt-buttons-library').prop('checked', CLIENT.displayOpts.buttons.library);
            $('#disopt-buttons-search').prop('checked', CLIENT.displayOpts.buttons.search);
            $('#disopt-buttons-skip').prop('checked', CLIENT.displayOpts.buttons.skip);
            $('#disopt-buttons-shuffle').prop('checked', CLIENT.displayOpts.buttons.shuffle);
            $('#disopt-buttons-chance').prop('checked', CLIENT.displayOpts.buttons.chance);
            $('#disopt-buttons-customembed').prop('checked', CLIENT.displayOpts.buttons.customembed);
            $('#disopt-buttons-playlistlock').prop('checked', CLIENT.displayOpts.buttons.playlistlock);
            $('#disopt-buttons-leader').prop('checked', CLIENT.displayOpts.buttons.leader);
            $('#disopt-buttons-notify').prop('checked', CLIENT.displayOpts.buttons.notify);
            $('#disopt-buttons-queuenext').prop('checked', CLIENT.displayOpts.buttons.queuenext);
        },
        'processHidden': () => {
            var hideTargets=[];
            $('input[data-hide]:not(:checked)').each(function(){
                hideTargets.push($(this).attr('data-hide'))
            });
            $('#hideThis').html('<style>' +hideTargets.toString()+'{display:none!important}</style>');        },
        'setHTML': () => {

            if (!$('#displayOptsModal').length){
                var optHtml='<div class="fade modal" id=displayOptsModal aria-hidden=true role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close data-dismiss=modal aria-hidden=true>x</button><h4>Advanced Display Options: <span id=modal-mh-roomname>' + CHANNEL.name + '</span></h4></div>' +
                            '<div class=modal-body id=displayOptsModalWrap>' +
                            '<div class=modal-option>' +
                            '<div class=checkbox><label for=displayoption-noRepeat><input id=disopt-noRepeat type=checkbox>Show single-user spam [Turn off for Anti-cuntpizza mode]</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-utcClock><input id=disopt-utcClock type=checkbox data-hide="#utcClock">Show UTC Clock</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-motd><input id=disopt-motd type=checkbox data-hide="#motdrow">Show MOTD</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-footer><input id=disopt-footer type=checkbox data-hide="#footer">Show Footer</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-inactivepolls><input id=disopt-inactivepolls type=checkbox data-hide="#pollwrap .muted">Show Inactive Polls</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-hidevidonskip><input id=disopt-hidevidonskip type=checkbox>Hide Video after pressing Voteskip [Coming Soon]</label></div></div>' +
                            '<br>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-botMsg-pokeroll><input id=disopt-botMsg-pokeroll type=checkbox>Bot: Show $pokeroll Messages</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-botMsg-polls><input id=disopt-botMsg-polls type=checkbox>Bot: Show "Poll Passed" Messages</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-botMsg-modMsg><input id=disopt-botMsg-modMsg type=checkbox>Bot: Show Mod Messages - whitenames dont see these anyway</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-botMsg-voteskip><input id=disopt-botMsg-voteskip type=checkbox> Show "Voteskip Passed" messages [Coming Soon]</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-botMsg-cmdMsg><input id=disopt-botMsg-cmdMsg type=checkbox> Show botcommand messages (anything starting with $) [Coming Soon]</label></div></div>' +
                            '<br>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-mod><input id=disopt-buttons-mod type=checkbox data-hide="#checkitout">Show Mod Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-nnd><input id=disopt-buttons-nnd type=checkbox data-hide="#toggleNND">Show NND Chat Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-channelcontrol><input id=disopt-buttons-channelcontrol type=checkbox data-hide="#customSettingsModalTrigger">Show Channel Control Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-autoplay><input id=disopt-buttons-autoplay type=checkbox data-hide="#autoplay">Show autoplay Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-largePlayer><input id=disopt-buttons-largePlayer type=checkbox data-hide="#largevidToggle">Show 1080p+ Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-emotelist><input id=disopt-buttons-emotelist type=checkbox data-hide="#emotelistbtn">Show Emote List Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-newpoll><input id=disopt-buttons-newpoll type=checkbox data-hide="#newpollbtn">Show New Poll Button</label></div></div>' +

                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-afkCount><input id=disopt-buttons-afkCount type=checkbox data-hide="#afkCount"> Show AFK Count</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-anim><input id=disopt-buttons-anim type=checkbox data-hide="#animationbutton"> Show Animation Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-top><input id=disopt-buttons-top type=checkbox data-hide="#topbutton"> Show Top Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-squee><input id=disopt-buttons-squee type=checkbox data-hide="#AudioNoticeSqueeToggle"> Show Squee Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-lightsout><input id=disopt-buttons-lightsout type=checkbox data-hide=".lightsoutbtn"> Show lightsout Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-rate><input id=disopt-buttons-rate type=checkbox data-hide=".msgsecbutton"> Show Message Rate Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-modhat><input id=disopt-buttons-modhat type=checkbox data-hide="#modhat"> Show Name Color Button (Mods Only)</label></div></div>' +

                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-volumecontrol><input id=disopt-buttons-volumecontrol type=checkbox data-hide="#volumeButtonDown, #volumeButtonUp, #volumeButtonIndicator"> Show Volume Controls (under Player)</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-library><input id=disopt-buttons-library type=checkbox data-hide="#showplaylistmanager"> Show Playlist Library Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-search><input id=disopt-buttons-search type=checkbox data-hide="#showsearch"> Show Search Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-skip><input id=disopt-buttons-skip type=checkbox data-hide="#voteskip"> Show Skip Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-shuffle><input id=disopt-buttons-shuffle type=checkbox data-hide="#shuffleplaylist"> Show Shuffle Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-chance><input id=disopt-buttons-chance type=checkbox data-hide="#clearplaylist"> Show Chance Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-customembed><input id=disopt-buttons-customembed type=checkbox data-hide="#showcustomembed"> Show Custom Embed Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-playlistlock><input id=disopt-buttons-playlistlock type=checkbox data-hide="#qlockbtn"> Show Playlist Lock Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-leader><input id=disopt-buttons-leader type=checkbox data-hide="#leader">Show Take Leader Button</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-notify><input id=disopt-buttons-notify type=checkbox data-hide="#qbtnnotify">Show Notify Buttons (In playlist)</label></div></div>' +
                            '<div class=modal-option><div class=checkbox><label for=displayoption-buttons-queuenext><input id=disopt-buttons-queuenext type=checkbox data-hide="#queue-next">Show Next Button</label></div></div>' +
                            '</div>' +
                            '<div class=modal-footer>' +
                            '<div class=left-warning>Settings are not applied until you click Save.</div>' +
                            '<button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.displayOptsFns.save() type=button>Save</button><button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.displayOptsFns.updateModal() type=button>Close</button>' +
                            '<div class=subfooter><span class=by>written by hunter2, code stolen from zeratul a bit tho tbh</span><span class=ver>version 1.0</span></div></div>' +
                            '</div></div>' +
                            '</div>';
                    $(optHtml).insertBefore("#pmbar");
            }
            if (!$('#showdisplayOptsmodal').length)
                $('ul.navbar-nav').append($('<li/>').append("<a id=showdisplayOptsmodal href=javascript:void(0) onclick=javascript:CLIENT.displayOptsFns.openModal()>Hide</a>"));

            $('.head-DISOPTS-CSS').remove();
            $('head').append('<div id="hideThis" style="display:none"></div><style class="head-DISOPTS-CSS">' +
                '.modal .modal-scroll {padding: 4px;background: #161616;box-shadow: 0 0 10px black inset;border: 1px solid black;border-radius: 6px;width: 100%;height:310px;overflow-y: auto;margin-top: 30px;}' +
                '.modal label.numInput {min-height: 20px;padding-left: 20px;margin-bottom: 0;font-weight: 400;}' +
                '.modal .left-warning {float: left;padding: 10px 12px;font-size: 13px;color: #ff8f8f}' +
                '.modal .modal-caption {font-size: 13px;text-indent: 35px;color: #8f9cad}' +
                '#displayOptsModal .subfooter {text-align: center;color: #757575}' +
                '#displayOptsModal .subfooter .by {padding-right: 10px;border-right: 1px solid #252525}' +
                '#displayOptsModal .subfooter .ver {padding-left: 10px;border-left: 1px solid #4e4e4e}' +
                '</style>');
        },
        'openModal': () => {
            $('#displayOptsModal').modal();
        }
    };

    CLIENT.displayOptsFns.setHTML();
    CLIENT.displayOptsFns.load();
    CLIENT.displayOptsFns.updateModal();
    CLIENT.displayOptsFns.processHidden();

    $(window).unload(function() {
        CLIENT.displayOptsFns.save();
    });
})();

