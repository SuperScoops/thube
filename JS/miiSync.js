// ==UserScript==
// @name         miiSync
// @version      1.00
// @description  stable
// @author       Miimer
// @match        http://cytu.be/r/*
// @match        https://cytu.be/r/*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    // prevent overload

    if (window.MiiSync) return;
    window.MiiSync = {
        options: {
            startFullscreened: false
        }
    };
    console.log("MiiSync started");

    // config

    var lfPanelBorder = 2;
    var lfBtnSize = 28;
    var lfBtnBorder = 2;
    var rfBtnSize = 28;
    var rfBtnBorder = 2;

    // === CSS ===

    $("<style/>")
        .attr("type", "text/css")
        .attr("id", "MiiSync")
        .text("" +
"" +
".navbar-inverse .navbar-nav > li > a, .navbar-inverse .navbar-text {\
  font-size: 12px;\
}\
.dropdown-menu .divider {\
  margin: 4px 0;\
}\
.dropdown-menu > li > a:hover {\
  background-color: #0091FF;\
}\
.navbar-inverse .navbar-nav > .open > a,\
.navbar-inverse .navbar-nav > .open > a:focus,\
.navbar-inverse .navbar-nav > .open > a:hover/*,\
.navbar-nav > li > a:hover,\
.navbar-nav > .open > a:hover,\
.nav .open > a,\
.nav .open > a:focus,\
.nav .open > a:hover*/\
{\
  background: #0091FF !important;\
}\
.btn.active.focus,\
.btn.active:focus,\
.btn.focus,\
.btn:active.focus,\
.btn:active:focus,\
.btn:focus\
{\
  outline: #66afe9 auto 1px !important;\
}\
.form-control\
{\
  border-color: #656565;\
}\
" +
"/* bootstrap tweaks */" +
".btn-purple {" +
"  border-color: transparent !important;" +
"  background-repeat: repeat !important;" +
"}" +
"" +
".display-none {" +
"  display: none;" +
"}" +
"" +
".navbar, .well, .form-group {" +
"  margin-bottom: 15px;" +
"}" +
"" +
"#motdwrap {" +
"  margin-bottom: 15px !important;" +
"}" +
"" +
"#mainpage {" +
"  padding-top: 0;" +
"}" +
"" +
".fw-start .glyphicon {" +
"  top: 0;" +
"}" +
"" +
"#main {" +
"  padding-left: 15px;" +
"}" +
"" +
"body.fw #main {" +
"  padding-left: 0px;" +
"}" +
"" +
"#videowrap, #chatwrap {" +
"  padding-right: 15px;" +
"  padding-left: 0;" +
"  margin-bottom: 15px;" +
"}" +
"" +
"#videowrap {" +
"  margin-bottom: 15px !important;" +
"  bottom: 0 !important;" +
"}" +
"" +
"#main {" +
"  margin-top: 0 !important;" +
"  margin-bottom: 0 !important;" +
"}" +
"" +
"#videowrap #videowrap-header {" +
"  margin-top: 0 !important;" +
"  margin-bottom: 0 !important;" +
"  height: 24px;" +
"}" +
"" +
"body.fw #videowrap #videowrap-header," +
"body.fw #main {" +
"  margin-top: 0 !important;" +
"  margin-bottom: 0 !important;" +
"}" +
"" +
"body.fw #videowrap #videowrap-header," +
"body.fw #resize-video-smaller," +
"body.fw #resize-video-larger {" +
"  display: none;" +
"}" +
"" +
"#currenttitle {" +
"  position: relative;" +
"  padding-top: 0 !important;" +
"  height: 24px !important;" +
"  line-height: 24px;" +
"  max-width: none !important;" +
"}" +
"#currenttitle #currentblame {" +
"  position: absolute;" +
"  top: 0;" +
"  right: 0;" +
"}" +
"" +
"#chatwrap {" +
"  position: relative;" +
"  overflow: visible !important;" +
"  overflow-y: visible !important;" +
"  top: 0 !important;" +
"}" +
"#chatwrap #chatheader {" +
"  overflow: hidden;" +
"  padding-top: 2px;" +
"  padding-bottom: 2px;" +
"  padding-left: 2px;" +
"  padding-right: 2px;" +
"}" +
"#chatwrap #chatheader .label {" +
"  line-height: inherit;" +
"}" +
"#chatwrap #chatheader #userlisttoggle {" +
"  height: 100% !important;" +
"  margin-left: 3px;" +
"  margin-right: 3px;" +
"}" +
"#chatwrap #chatheader #afkCount {" +
"  position: static;" +
"}" +
"#chatwrap #chatheader .afkusercount {" +
"  display: none;" +
"}" +
"#chatwrap #chatheader .activeusercount {" +
"  border-right: 0;" +
"}" +
"" +
"#emote_suggest {" +
"  display: none;" +
"  margin-bottom: 0;" +
"}" +
"#emote_suggest.well {" +
"  position: absolute;" +
"  left: 0;" +
"  top: 100%;" +
"  padding-bottom: 0;" +
"  z-index: 2000;" +
"  padding: 6px;" +
"  padding: 6px;" +
"}" +
"" +
"#controlsrow {" +
"  padding-left: 15px;" +
"}" +
"#controlsrow > div {" +
"  padding-left: 0;" +
"  padding-top: 0 !important;" +
"  bottom: 0 !important;" +
"}" +
"" +
"#controlsrow > div > button," +
"#controlsrow > div > div {" +
"  margin-bottom: 15px;" +
"}" +
"" +
"#rightpane-inner {" +
"  margin-bottom: 15px;" +
"}" +
"" +
"#playlistrow {" +
"  bottom: 0 !important;" +
"  padding-left: 15px;" +
"}" +
"#playlistrow > div {" +
"  padding-right: 15px;" +
"  padding-left: 0;" +
"  margin-bottom: 0;" +
"}" +
".plcontrol-collapse > .vertical-spacer:first-child,\
#queuefail > .vertical-spacer:first-child\
{\
  display: none;\
}\
#library {\
  margin-bottom: 0;\
}\
#recentmedia-list {\
  margin-bottom: 15px;\
  border: 1px solid #000000;\
}\
#recentmedia-list li {\
  border-top: 0px;\
  border-left: 1px solid #000000;\
}\
#recentmedia-list li:nth-child(even) {\
  background: rgba(255, 255, 255, .04);\
}\
#recentmedia-list li:last-child{\
  border-bottom: 0px;\
}\
" +
"#playlistmanagerwrap {" +
"  margin-top: 0;" +
"}" +
"#playlistmanagerwrap:last-child {" +
"  margin-bottom: 0;" +
"}" +
"" +
"#leftpane-inner {" +
"  padding-right: 10px;" +
"}" +
"#pollwrap {" +
"  padding-right: 0;" +
"  margin-bottom: 15px;" +
"}" +
"#pollwrap > div {" +
"  margin-top: 0;" +
"  margin-right: 5px;" +
"  margin-bottom: 15px;" +
"}" +
"#pollwrap > div:last-child {" +
"  margin-top: 0;" +
"  margin-bottom: 0;" +
"}" +
"#pollwrap > div > .close.pull-right {" +
"  margin-left: 5px;" +
"}" +
"#pollwrap.col-lg-12.col-md-12 {" +
"  min-height: 158px !important;" +
"  background-position: center 13px !important;" +
"}" +
"#pollwrap .btn.btn-sm.pull-right {" +
"  margin-left: 2px;" +
"}" +
"" +
"/* full windowing shit */" +
"" +
"body.fw .fw-showOn {" +
"  display: block;" +
"}" +
"" +
"body.fw .navbar {" +
"  position: static;" +
//"  margin-bottom: 0;" +
"  margin-top: 100vh;" +
"}" +
"" +
"body.fw #christmaslights {" +
" display: none;" +
"}" +
"" +
"body.fw #videowrap {" +
"  overflow: hidden;" +
"  padding-left: 0;" +
"  padding-right: 0;" +
"  position: absolute;" +
"  top: 0;" +
"  width: 100%;" +
"  height: 100vh;" +
"  padding-bottom: 0;" +
"}" +
"body.fw #videowrap #currenttitle {" +
"  display: none;" +
"}" +
"" +
"body.fw .embed-responsive {" +
"  positive: relative;" +
"  height: 100vh;" +
"  border: 0;" +
"  padding-bottom: 0;" +
"}" +
"body.fw .embed-responsive-item {" +
"  width: 100%;" +
"  height: 100vh;" +
"}" +
"body.fw.lfOpen .embed-responsive .videochatContainer {" +
"  opacity: 0;" +
"}" +
"" +
"body.fw #chatwrap {" +
"  background-color: transparent !important;" +
"}" +
"" +
"body.fw #messagebuffer {" +
"  margin-bottom: 10px;" +
"  border: 0;" +
"  overflow: hidden;" +
"}" +
"body.fw #messagebuffer:hover {" +
"  overflow-x: hidden;" +
"  overflow-y: auto;" +
"}" +
"" +
"body.fw #userlist {" +
"  overflow: hidden;" +
"}" +
"body.fw #userlist:hover {" +
"  overflow-x: hidden;" +
"  overflow-y: auto;" +
"}" +
"" +
"body.fw #emote_suggest.well {" +
"  left: 100%;" +
"  top: auto;" +
"  bottom: 0;" +
"}" +
"" +
"body.fw.lfOpen #emote_suggest.well {" +
"  left: 0;" +
"}" +
"" +
"body.fw #guestlogin," +
"body.fw #chatline {" +
"  position: absolute;" +
"  bottom: 45px;" +
"  left: 0;" +
"  right: auto;" +
"  z-index: 999;" +
"  width: 500px;" +
"  opacity: .25;" +
"  border-width: 2px;" +
"}" +
"body.fw.lfOpen #guestlogin," +
"body.fw.lfOpen #chatline {" +
"  position: absolute;" +
"  bottom: 0;" +
"  left: 0;" +
"  right: auto;" +
"  z-index: 10000;" +
"  width: 500px;" +
"  opacity: .25;" +
"  border-width: 2px;" +
"  border-top: 0;" +
"}" +
"@media screen and (max-height: 499px) {" +
"  body.fw.lfOpen #guestlogin," +
"  body.fw.lfOpen #chatline {" +
"    border-bottom-width: 0;" +
"    border-radius: 0;" +
"  }" +
"}" +
"@media screen and (min-height: 500px) {" +
"  body.fw.lfOpen #guestlogin," +
"  body.fw.lfOpen #chatline {" +
"    bottom: 45px;" +
"    border-top-right-radius: 0;" +
"  }" +
"}" +
"body.fw #guestlogin #guestname {" +
"  border-top-right-radius: 4px;" +
"  border-bottom-right-radius: 4px;" +
"}" +
"body.fw #guestlogin span.input-group-addon {" +
"  border-bottom-left-radius: 0px;" +
"}" +
"body.fw #chatline {" +
"  border-top-right-radius: 4px;" +
"  border-bottom-right-radius: 4px;" +
"  border-bottom-left-radius: 0px;" +
"  border-left: 0;" +
"}" +
"body.fw #chatline:focus {" +
"  opacity: 1;" +
"}" +
"body.fw.lfOpen #chatline {" +
//"  border-top-right-radius: 0;" +
//"  border-bottom-right-radius: 0;" +
//"  border-bottom-left-radius: 0;" +
"  border-left: 0;" +
"  border-top: 0;" +
"}" +
"" +
"body.fw #controlsrow {" +
"  margin-left: 0px;" +
"  margin-right: 0px;" +
"}" +
".lfPanel {" +
"  box-sizing: border-box;" +
"  position: absolute;" +
"  left: -500px;" +
"  top: 80px;" +
"  bottom: 100px;" +
"  width: 500px;" +
"  z-index: 999;" +
"  border-top: " + lfPanelBorder + "px solid rgba(222, 222, 222, .5);" +
"  border-right: " + lfPanelBorder + "px solid rgba(222, 222, 222, .5);" +
"  border-bottom: " + lfPanelBorder + "px solid rgba(222, 222, 222, .5);" +
"  border-radius: 0 3px 3px 0;" +
"  bottom: 38px;" +
"}" +
"@media screen and (min-height: 500px) {" +
"  .lfPanel {" +
"    bottom: 83px;" +
"  }" +
"}" +
".lfPanel .inner {" +
"  box-sizing: border-box;" +
"  width: 100%;" +
"  height: 100%;" +
"  background: rgba(0, 0, 0, .67);" +
"}" +
"body.fw.lfOpen .lfPanel {" +
"  left: 0;" +
"  top: 0;" +
"  border-top: 0px;" +
"  border-radius: 0px;" +
"}" +
".lfPanel #chatwrap {" +
"  width: 100%;" +
"  padding-left: 0;" +
"  padding-right: 0;" +
"  height: 100% !important;" +
"  margin-bottom: 0;" +
"  padding-bottom: 20px;" +
"}" +
".lfPanel #chatwrap #chatheader {" +
"  height: 20px;" +
"  border: 0;" +
"}" +
".lfPanel #chatwrap #chatheader .label {" +
"  line-height: 13px;" +
"}" +
".lfPanel #chatwrap #messagebuffer {" +
"  height: 100% !important;" +
"}" +
".lfPanel #chatwrap #userlist {" +
"  height: 100% !important;" +
"  border: 0;" +
"}" +
".lfControls {" +
"  display: none;" +
"  position: absolute;" +
"  left: 0;" +
"  top: 30%;" +
"  z-index: 999;" +
//"border-top: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
//"border-right: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
//"border-bottom: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
"  padding: 2px;" +
"  background: rgba(222, 222, 222, .5);" +
"  border-radius: 0 3px 3px 0;" +
"}" +
"body.fw .lfControls {" +
"  display: block;" +
"}" +
"body.fw.lfOpen .lfControls {" +
"  left: 500px;" +
"  padding: 2px 2px 2px 0;" +
"}" +
".lfControls .button {" +
"  position: relative;" +
"  box-sizing: border-box;" +
"  display: block;" +
"  width: " + lfBtnSize + "px;" +
"  height: " + lfBtnSize + "px;" +
"  color: rgba(22, 22, 22, .7);" +
"  background: none;" +
"  text-align: center;" +
"  line-height: " + (lfBtnSize + 1) + "px;" +
"  text-decoration: none;" +
"  cursor: pointer;" +
"  border-radius: " + (lfBtnSize / 2) + "px;" +
"}" +
".lfControls .button.selected," +
"body.lfOpen .lfControls .button.chat," +
"body.nnd .lfControls .button.nnd-toggle," +
".rfControls .button.selected {" +
"  border: 2px solid rgba(22, 22, 22, .7);" +
"  line-height: " + (lfBtnSize - 3) + "px;" +
"  background: transparent;" +
"}" +
".lfControls .button:hover," +
".lfControls .button.selected:hover," +
"body.lfOpen .lfControls .button.chat:hover," +
"body.nnd .lfControls .button.nnd-toggle:hover," +
".rfControls .button.selected:hover {" +
"  border: 0;" +
"  line-height: " + (lfBtnSize + 1) + "px;" +
"  text-decoration: none;" +
"  background: #121212;" +
"  color: #FFFFFF;" +
"  text-shadow: none;" +
"  box-shadow: none;" +
"}" +
".lfControls .button .button-label {" +
"  display: none;" +
"  position: absolute;" +
"  top: 0;" +
"  left: " + (lfBtnSize + 5) + "px;" +
"  margin-bottom: 0;" +
"  height: " + lfBtnSize + "px;" +
"  background: #121212;" +
"  border-radius: 3px;" +
"  line-height: " + lfBtnSize + "px;" +
"  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" +
"  padding: 0 6px;" +
"  color: #FFFFFF;" +
"  font-size: 14px;" +
"}" +
".rfControls {" +
"  display: none;" +
"  position: fixed;" +
"  right: 0;" +
"  top: 30%;" +
"  z-index: 999;" +
//"border-top: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
//"border-left: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
//"border-bottom: " + lfBtnBorder + "px solid rgba(255, 255, 255, .1);" +
"  padding: 2px;" +
"  background: rgba(222, 222, 222, .5);" +
"  border-radius: 3px 0 0 3px;" +
"}" +
"body.fw .rfControls {" +
"  display: block;" +
"}" +
".rfControls .button {" +
"  position: relative;" +
"  box-sizing: border-box;" +
"  display: block;" +
"  width: " + lfBtnSize + "px;" +
"  height: " + lfBtnSize + "px;" +
"  color: rgba(22, 22, 22, .7);" +
"  background: none;" +
"  text-align: center;" +
"  line-height: " + (lfBtnSize + 1) + "px;" +
"  text-decoration: none;" +
"  cursor: pointer;" +
"  border-radius: " + (lfBtnSize / 2) + "px;" +
"}" +
".rfControls .button:hover {" +
"  border: 0;" +
"  text-decoration: none;" +
"  background: #121212;" +
"  color: #FFFFFF;" +
"  text-shadow: none;" +
"  box-shadow: none;" +
"}" +
".rfControls .button .button-label {" +
"  display: none;" +
"  position: absolute;" +
"  top: 0;" +
"  right: " + (rfBtnSize + 5) + "px;" +
"  margin-bottom: 0;" +
"  height: " + lfBtnSize + "px;" +
"  background: #121212;" +
"  border-radius: 3px;" +
"  line-height: " + lfBtnSize + "px;" +
"  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" +
"  padding: 0 6px;" +
"  color: #FFFFFF;" +
"  font-size: 14px;" +
"}" +
".lfControls .button:hover .button-label," +
".rfControls .button:hover .button-label {" +
"  display: block;" +
"}" +
"@media screen and (max-width: 700px) {" +
"  body.fw.lfOpen .lfControls .button:hover .button-label," +
"  body.fw.lfOpen .rfControls .button:hover .button-label {" +
"    display: none;" +
"  }" +
"}" +
".killScreen {" +
"  width: 100%;" +
"  height: 100%;" +
"  background: transparent;" +
"  text-align: center;" +
"  font-size: 24px;" +
"  color: #62C462;" +
"  font-weight: bold;" +
"  text-shadow: 0 0 3px #000000;" +
"}" +
"")
        .appendTo($("head"));

    var body = jQuery(document.body);
    var vidCon = body.find(".embed-responsive");
    var vidElement;

    // fix

    $('.navbar-nav li').each(function(i, e) {
      var text = $($(e).find('a')[0]);
      if (text.length > 0) {
        switch (/^[/w]*([a-zA-Z]*)/.exec($(text).html().trim().toLowerCase())[0]) {
          case 'account':
            $(text).html('<span class="glyphicon glyphicon-user"></span> <b class="caret"></b>');
            break;
          case 'options':
            $(text).html('Client <span class="glyphicon glyphicon-cog"></span>');
            break;
          case 'channel':
            $(text).html('Channel <span class="glyphicon glyphicon-cog"></span>');
            break;
          case 'layout':
            $(text).html('<span class="glyphicon glyphicon-th-large"></span> <b class="caret"></b>');
            break;
        }
      }
    });

    /*$('#autoplay').html('\
      \
    ');
    $('#newpollbtn').html('\
      <span class="glyphicon glyphicon-plus"></span> <span class="glyphicons glyphicons-pie-chart" aria-hidden="true"></span>\
    ');*/
    /*$('#emotelistbtn').html('\
      \
    ');*/

    $(".navbar .navbar-header > .navbar-brand").remove();
    var homeButton = $($(".navbar .navbar-nav li")[0]);
    //homeButton.prependTo($('.navbar .navbar-collapse'));
    homeButton.find("a").html('<span class="glyphicon glyphicon-home"></span>');

    var MiiChannels = {
      mii: {
        label: 'Mii',
        headerLogo: 'http://i.imgur.com/EmEXp7q',
        id: 'mii'
      },
      happymii: {
        label: 'Happy Mii Time',
        id: 'miitime'
      },
      miimhour: {
        label: 'Mii',
        id: 'miim'
      }
    };

    var channelList = $('\
      <li class="dropdown" style="">\
        <a class="dropdown-toggle" href="#" data-toggle="dropdown" style="padding: 4px 8px 4px 6px; height: 50px;">\
          <img src="' + miiChannels[CHANNEL.name.toLowerCase()].headerLogo + '" style="height: 100%;" /><b class="caret"></b>\
        </a>\
        <ul class="dropdown-menu">\
        </ul>\
      </li>\
    ');
    channelList.insertAfter(homeButton);
    channelList = channelList.find(".dropdown-menu");

    $(Object.keys(miiChannels)).each(function(i, e) {
      var channel = $('\
        <li><a></a></li>\
      ').appendTo(channelList);
      $(channel.find('a')).attr('href', 'http://cytu.be/r/' + miiChannels[e].id)
        .html(miiChannels[e].label + ' (../r/' + miiChannels[e].id + ')');
    });

    $('.plcontrol-collapse > .input-group').addClass('input-group-sm');

    $(".navbar.navbar-fixed-top").removeClass("navbar-fixed-top");

    // left floating panel

    var lfPanel = $("<div class=\"lfPanel\"><div class=\"inner\"></div></div>");
    lfPanel.appendTo($(".embed-responsive"));

    // left floating controls

    var lfControls = $("\
            <div class=\"lfControls\">\
                <a class=\"button chat\">\
                    <i class=\"glyphicon glyphicon-comment\"></i>\
                    <span class=\"button-label\">Toggle&nbsp;Chat</span>\
                </a>\
                <a class=\"button nnd-toggle\">\
                    <i class=\"glyphicon glyphicon-bullhorn\"></i>\
                    <span class=\"button-label\">NND&nbsp;Toggle</span>\
                </a>\
                <a class=\"button fw-close\">\
                    <i class=\"glyphicon glyphicon-remove\"></i>\
                    <span class=\"button-label\">Exit&nbsp;Full&nbsp;Window</span>\
                </a>\
            </div>");
    lfControls.appendTo($(".embed-responsive"));

    // add left control actions

    lfControls.find("a.chat").on("click", function() {
        body.toggleClass("lfOpen");
    });
    lfControls.find("a.fw-close").on("click", function() {
        toggleFw();
    });
    lfControls.find("a.nnd-toggle").on("click", function() {
        toggleNnd();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) $("#chatline").blur();
    });

    /*$(document).keydown(function(e) {
        if (e.which === 32 && e.shiftKey) {
            body.toggleClass("lfOpen");
            $("#chatline").focus();
            e.stopPropagation();
            e.preventDefault();
        }
    });*/

    // right floating controls

    var rfControls = $("\
            <div class=\"rfControls\">\
                <a class=\"button kill\">\
                    <i class=\"glyphicon glyphicon-trash\"></i>\
                    <span class=\"button-label\">Local&nbsp;Skip&nbsp;Video</span>\
                </a>\
                <a class=\"button skip display-none fw-showOn\">\
                    <i class=\"glyphicon glyphicon-step-forward\"></i>\
                    <span class=\"button-label\">Vote&nbsp;Skip</span>\
                </a>\
            </div>");

    // add right control actions

    rfControls.find(".kill").on("click", function() {
        if (vidCon.find("object, embed, iframe, video").length === 0) {
            reloadMedia();
        } else {
            getVidElement().remove();
            killScreen.appendTo(vidCon);
            checkKillScreen();
        }
    });
    var checkKillScreen = function()
    {
        if (vidCon.find(".killScreen").length) {
            rfControls.find(".kill").addClass("selected");
        } else {
            rfControls.find(".kill").removeClass("selected");
        }
    };
    var voteSkip = rfControls.find(".skip").detach();
    $("#voteskip").click(function() {
        voteSkip.detach();
    });
    voteSkip.click(function() {
        socket.emit("voteskip");
        voteSkip.detach();
        $("#voteskip").attr("disabled", true);
    });

    var channelOpts = CHANNEL ? CHANNEL.opts : null;

    rfControls.appendTo($(".embed-responsive"));

    // full window button in header

    var fullWindowBtn = jQuery("<li>", {
        "class": "fw-start",
        css: {
            cursor: "pointer"
        }
    });
    fullWindowBtn
        .appendTo(body.find(".nav.navbar-nav"))
        .on("click", function(){toggleFw();})
        .append(jQuery("<a>", {"class": "glyphicon glyphicon-fullscreen"}));

    // full window toggle function

    var appendTo = $($("#main > div")[0]).attr("id") === "videowrap";
    var toggleFw = function()
    {
        vidCon.find(".videochatContainer").empty();
        if (body.hasClass("fw")) {
            body.removeClass("fw");
            jQuery("#guestlogin, #chatline")
                .detach().insertAfter($("#messagebuffer"));
            $(".navbar").prependTo(body);
            $("#controlsrow").insertAfter($("#main"));
            appendTo ? $("#chatwrap").appendTo($("#main")) : $("#chatwrap").prependTo($("#main"));
            handleVideoResize();
            SCROLLCHAT = true;
        } else {
            body.addClass("fw");
            jQuery("#guestlogin, #chatline")
                .detach().appendTo(document.body);
            $(".navbar").prependTo(body);
            $("#controlsrow").insertAfter($(".navbar"));
            $(window).scrollTop(0);
            $("#chatwrap").appendTo($(".lfPanel > .inner"));
            SCROLLCHAT = true;
        }
        scrollChat();
    };
    $("#messagebuffer").on("mouseover", function() {
        if (body.hasClass("fw")) {
            setTimeout(function() {
                scrollChat();
            }, 50);
        }
    });

    // kill screen for when video is local skipped

    var killScreen = $("\
          <div class=\"killScreen\">\
             <br /><br /><br />\
             Video Locally Skipped\
             <br /><br />\
             Waiting for next video to start...\
          </div>");

    // revive the video on change of media

    function getVidElement()
    {
        return vidCon.find("object, embed, iframe, video");
    }

    // hook channelCSSJS

    var oldChannelCSSJS = Callbacks.channelCSSJS;
    Callbacks.channelCSSJS = function(data) {
        if (!channelOpts) socket.on("channelOpts", function(opts) {
            channelOpts = opts;
        });
        if (data && data.js && data.js.indexOf("MiiSync.onXaekaiLoaded();") === -1) {
            data.js = data.js.replace("console.info(\"Xaekai's Script Sequencer: Loading Complete.\")",
                "console.info(\"Xaekai's Script Sequencer: Loading Complete.\");MiiSync.onXaekaiLoaded(null);");
        }
        oldChannelCSSJS(data);
    };

    // hook changeMedia

    var currentVideoData, oldChangeMedia;
    var newChangeMedia = function(data, options)
    {
        if (channelOpts) {
            if (channelOpts.allow_voteskip) {
                voteSkip.appendTo(rfControls);
            } else {
                voteSkip.detach();
            }
        }

        options = options || {};

        currentVideoData = data || currentVideoData;

        reloadMedia();
    };
    var reloadMedia = function(options)
    {
        options = options || {};

        var reattachVidElement = function() {
            if (vidCon.find(".killScreen").length && options.preserveKillScreen !== true) {
                killScreen.detach();
            }
            if (vidCon.find("object, embed, iframe, video").length === 0) {
                $("<iframe>", {id: "ytapiplayer", "class": "embed-responsive-item display-none"})
                    .appendTo(vidCon);
            }
        };

        console.log("currentVideoData", new Date(), currentVideoData);

        reattachVidElement();
        if (PLAYER && PLAYER.mediaType)
            PLAYER.mediaType = null;
        oldChangeMedia(currentVideoData);
        checkKillScreen();
    };
    var assertDominance = function()
    {
        if (window.Callbacks.changeMedia !== newChangeMedia) {
            oldChangeMedia = window.Callbacks.changeMedia;
            window.Callbacks.changeMedia = newChangeMedia;
        }
    };
    assertDominance();

    var mousemoveTimeout = null;
    function active()
    {
        clearTimeout(mousemoveTimeout);
        mousemoveTimeout = null;
        body.removeClass("inactive");
    }
    function inactive()
    {
        body.addClass("inactive");
    }
    $(body).on("mousemove", function() {
        if (mousemoveTimeout === null) {
            active();
        }
        clearTimeout(mousemoveTimeout);
        mousemoveTimeout = null;
        mousemoveTimeout = setTimeout(function() {
            inactive();
        }, 10000);
    });

    // prune navbar

    var navbarItems = $(body).find(".navbar .nav > li");
    $.each(navbarItems, function(i, e) {
        /*if ($(e).html().indexOf("Layout") !== -1) {
            $(e).remove();
        }*/
    });

    // nnd functions

    var checkNnd = function() {
        if (window.nnd.enabled) {
            $(body).addClass("nnd");
        } else {
            $(body).removeClass("nnd");
        }
    };
    var toggleNnd = function() {
        $(".videoText").remove();
        window.nnd.enabled = !window.nnd.enabled;
        checkNnd();
    };

    // hooking for xaekai

    MiiSync.onXaekaiLoaded = function() {
        assertDominance();

        // fix

        setTimeout(function() {
            $("#pad_notes_wrap").addClass("well");
        }, 5e3);
        $("#emote_suggest").addClass("well");
        $("#colorFilters").remove();
        $("#cinematoggle").remove();

        $('.plcontrol-collapse > .input-group').addClass('input-group-sm');

        // add nnd listeners

        var oldNndInit = window.nnd._fn.init;
        window.nnd._fn.init = function() {
            oldNndInit.apply(this, arguments);
            checkNnd();
        };
        var oldSaveFromModal = window.nnd._fn.saveFromModal;
        window.nnd._fn.saveFromModal = function() {
            oldSaveFromModal.apply(this, arguments);
            checkNnd();
        };
        checkNnd();

        $('#customSettingsModalTrigger').html('\
          Channel <span class="glyphicon glyphicon-cog"></span>\
        ');
        $('#toggleNND').html('\
          <span class="glyphicon glyphicon-cog"></span> NND Mode\
        ');

        $('.navbar-nav li').each(function(i, e) {
          var text = $($(e).find('a')[0]);
          if (text.length > 0) {
            switch (/^[/w]*([a-zA-Z]*)/.exec($(text).html().trim().toLowerCase())[0]) {
              case 'hide':
                $(text).html('<span class="glyphicon glyphicon-cog"></span>');
                break;
              case 'mention':
                $(text).html('<strong>@</strong> Mentions');
                break;
            }
          }
        });
        fullWindowBtn
            .appendTo(body.find(".nav.navbar-nav"));
    };

    $(window).on('resize', function() {
        SCROLLCHAT = true;
        scrollChat();
    });

    if (window.MiiSync.options.startFullscreened) {
        toggleFw();
    }

})();
