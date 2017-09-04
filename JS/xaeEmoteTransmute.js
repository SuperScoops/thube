
/*
**  Xaekai's WIP emote transmuter
**
**/
$("#messagebuffer").unbind("click.transmote");
$("#messagebuffer").on("click.transmote","img.channel-emote",function(ev){
    function _snd(snd, vol) { snd.volume = vol; return snd; }
    switch($(this).attr("title")){


        case '/feel'     : $(this).attr('title',"/feelsgud").attr('src',"https://i.imgur.com/miFcyXz.png"); break;
        case '/feelsgud' : $(this).attr('title',"/feel").attr('src',"https://i.imgur.com/1MJdYMA.png"); break;

        case '/wakemeup'   : $(this).attr('title',"/cantwakeup").attr('src',"https://i.imgur.com/gAqA8PP.png"); break;
        case '/cantwakeup' : $(this).attr('title',"/wakemeup").attr('src',"https://i.imgur.com/rpFA4eT.png"); break;

        case '/go'     : $(this).attr('title',"/gigago").attr('src',"https://i.imgur.com/nA1oTnX.gif");
                        _snd(new Audio('https://www.myinstants.com/media/sounds/gal-o-sengen.mp3'), .7).play(); 
                        break;

        case '/gigago' : $(this).attr('title',"/go").attr('src',"https://i.imgur.com/aqhrV.gif"); break;
                        _snd(new Audio('https://www.myinstants.com/media/sounds/gal-o-sengen.mp3'), .7).play(); 
                        break;

     
        case '/homo'  : $(this).attr('title',"/homo2").attr('src',"https://i.imgur.com/Ns8g8lB.gif"); break;
        case '/homo2' : $(this).attr('title',"/homo").attr('src',"https://i.imgur.com/vaQn3RC.gif"); break;

        case '/neverever'        : $(this).attr('title',"/neverfuckingever").attr('src',"https://i.imgur.com/X8wgq2k.png"); break;
        case '/neverfuckingever' : $(this).attr('title',"/neverever").attr('src',"https://i.imgur.com/MJnWGHV.png"); break;

        case '/burd' : $(this).attr('title',"/burd2").attr('src',"https://i.imgur.com/Hp3ypPj.gif"); break;
        case '/burd2' : $(this).attr('title',"/burd3").attr('src',"https://i.imgur.com/jSlcr.gif"); break;
        case '/burd3' : $(this).attr('title',"/burd").attr('src',"https://i.imgur.com/O9ZKezB.gif"); break;

        case '/aniki' : $(this).attr('title',"/aniki").attr('src',"https://i.imgur.com/tqD04Xw.png"); break;

        case '/mysides' : $(this).attr('title',"/mysides2").attr('src',"https://i.imgur.com/DtINozi.gif"); break;
        case '/mysides2' : $(this).attr('title',"/mysides").attr('src',"https://i.imgur.com/vETtK.png"); break;


        case '/chen'  : 
                        $(this).attr('title',"/chen2").attr('src',"https://i.imgur.com/TGHRo8W.gif"); 
                        _snd(new Audio('https://www.myinstants.com/media/sounds/bikehorn.mp3'), .4).play(); 
                        break;
        case '/chen2' : 
                        $(this).attr('title',"/chen3").attr('src',"https://i.imgur.com/MSoQrxX.gif"); 
                        _snd(new Audio('https://www.myinstants.com/media/sounds/honk-honk-chen.mp3'), .4).play(); 
                        break;
        case '/chen3' :
                        $(this).attr('title',"/chen").attr('src',"https://i.imgur.com/7X9O7Rm.png"); 
                        _snd(new Audio('https://www.myinstants.com/media/sounds/car-horn-sound-effect.mp3'), .4).play(); 
                        break; 

        
        case '/notbad'  : 
                        $(this).attr('title',"/john").attr('src',"https://i.imgur.com/LXaCgmO.png"); 
                        _snd(new Audio('https://www.myinstants.com/media/sounds/divorce1.mp3'), .85).play(); 
                        break;

        //AUDIO TEST!
        case '/!'               : _snd(new Audio('https://www.myinstants.com/media/sounds/metalgearsolid.mp3'),                .9).play(); break;
        case '/4u'              : _snd(new Audio('https://www.myinstants.com/media/sounds/bane-1.mp3'),                        .5).play(); break;
        case '/aesthetic'       : _snd(new Audio('https://www.myinstants.com/media/sounds/succ.mp3'),                          .4).play(); break;
        case '/succ'       : _snd(new Audio('https://www.myinstants.com/media/sounds/succ.mp3'),                          .4).play(); break;
        case '/alarm'           : _snd(new Audio('https://www.myinstants.com/media/sounds/sirene_1.mp3'),                      .9).play(); break;
        case '/bazinga'         : _snd(new Audio('https://www.myinstants.com/media/sounds/bazinga.swf.mp3'),                      .33).play(); break;
        case '/bestgames'       : _snd(new Audio('https://drowngaben.x10.mx/unused/gayniggas.mp3'),                      .33).play(); break;
        case '/birry'           : _snd(new Audio('https://soundboard.ass-we-can.com/static/music/BillyH/Like%20embarrassing%20me.mp3'),          .9).play(); break;
        case '/berd'            : _snd(new Audio('https://resources.pink.horse/sounds/berd.ogg'),                             .33).play(); break;
        case '/bomb'           : _snd(new Audio('https://www.myinstants.com/media/sounds/bomb2.mp3'),                          .7).play(); break;
        case '/chen4'           : _snd(new Audio('https://www.myinstants.com/media/sounds/chen-honk-honk.mp3'),                              .4).play(); break;
	case '/daniel'		: _snd(new Audio('https://www.myinstants.com/media/sounds/vocaroo_s03hjdrwp5kq.mp3'),          .3).play(); break;
        case '/dio'             : _snd(new Audio('https://resources.pink.horse/sounds/v4c/dio.mp3'),                           .5).play(); break;
        case '/doit'            : _snd(new Audio('https://www.myinstants.com/media/sounds/do-it_2.mp3'),                       .3).play(); break;
        case '/doot'            : _snd(new Audio('https://drowngaben.x10.mx/unused/dootdoot.mp3'),                              .5).play(); break;
        case '/doomguy'         : _snd(new Audio('https://resources.pink.horse/sounds/doom.music.ogg'),        .5).play(); break;
        case '/duane'           : _snd(new Audio('https://www.myinstants.com/media/sounds/videoplayback-1-mp3cut_6.mp3'),      .7).play(); break;
        case '/duckgif'         : _snd(new Audio('https://www.myinstants.com/media/sounds/quack_5.mp3'),                       .9).play(); break;
        case '/eey'             : _snd(new Audio('https://www.myinstants.com/media/sounds/pa_1.mp3'),                          .9).play(); break;
        case '/fuckyou'             : _snd(new Audio('https://www.myinstants.com/media/sounds/dmc-fuck-you-1.mp3'),            .9).play(); break;
        case '/he'             : _snd(new Audio('https://www.myinstants.com/media/sounds/he_5.mp3'),                           .9).play(); break;
        case '/john'             : _snd(new Audio('https://www.myinstants.com/media/sounds/divorce1.mp3'),                     .5).play(); break;
        case '/jotaro'          : _snd(new Audio('https://www.myinstants.com/media/sounds/oraoraoraoraora-sound-effect.mp3'),  .5).play(); break;
        case '/nice2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/joseph-joestar-nice.mp3'),           .9).play(); break;
        case '/no'              : _snd(new Audio('https://drowngaben.x10.mx/unused/no.mp3'),                                    .4).play(); break;
        case '/nogaems'              : _snd(new Audio('https://www.myinstants.com/media/sounds/videoplayback-2-mp3cut_2.mp3'), .7).play(); break;
        case '/noh'             : _snd(new Audio('https://www.myinstants.com/media/sounds/noh_1.mp3'),                        .33).play(); break;
        case '/objection'             : _snd(new Audio('https://www.myinstants.com/media/sounds/phoenix-objection.mp3'),       .3).play(); break;
        case '/percy'           : _snd(new Audio('https://www.myinstants.com/media/sounds/thomas-whistle.mp3'),                .5).play(); break;
        case '/pew'             : _snd(new Audio('https://www.myinstants.com/media/sounds/efectos-de-sonido-street-fight-ii-ryus-hadouken.mp3'),                    .9).play(); break;
        case '/push'            : _snd(new Audio('https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3'),         .5).play(); break;
        case '/push2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3'),         .7).play(); break;
        case '/ree'             : _snd(new Audio('https://www.myinstants.com/media/sounds/reeeeeeeee.mp3'),                    .7).play(); break;
        case '/rekt'            : _snd(new Audio('https://www.myinstants.com/media/sounds/pistol_fire3.mp3'),                  .77).play(); break;
        case '/rekt2'           : _snd(new Audio('https://www.myinstants.com/media/sounds/mp5_smg-gunguru-703432894.mp3'),     .9).play(); break;
        case '/rekt3'           : _snd(new Audio('https://www.myinstants.com/media/sounds/rifle-shot-echo.mp3'),               .9).play(); break;
        case '/sanic'           : _snd(new Audio('https://www.myinstants.com/media/sounds/come-on-step-it-up.mp3'),            .9).play(); break;
        case '/shazbot'         : _snd(new Audio('https://www.myinstants.com/media/sounds/vgs-shazbot-mp3cut.mp3'),            .9).play(); break;
        case '/shieeet'         : _snd(new Audio('https://www.myinstants.com/media/sounds/shiet_1.mp3'),                       .66).play(); break;
        case '/swooce'          : _snd(new Audio('https://drowngaben.x10.mx/snd/swooce.mp3'),                                   .8).play(); break;
        case '/spurdo'          : _snd(new Audio('https://resources.pink.horse/sounds/fug.ogg'),                               .5).play(); break;
        case '/teedus'          : _snd(new Audio('https://www.myinstants.com/media/sounds/tidus-laugh-japanese.mp3'),          .9).play(); break; 
        case '/tidus'           : _snd(new Audio('https://www.myinstants.com/media/sounds/tiduss-laugh.mp3'),                  .9).play(); break; 
        case '/van'             : _snd(new Audio('https://www.myinstants.com/media/sounds/van-darkholme-says-fuck-you.mp3'),   .5).play(); break;
        case '/wooo'            : _snd(new Audio('https://www.myinstants.com/media/sounds/woo.mp3'),                           .9).play(); break;
        case '/wow2'            : _snd(new Audio('https://www.myinstants.com/media/sounds/wow-.mp3'),                          .9).play(); break;
        case '/wry'             : _snd(new Audio('https://www.myinstants.com/media/sounds/wryyyyyy.mp3'),                      .5).play(); break;
        case '/yee'             : _snd(new Audio('https://www.myinstants.com/media/sounds/combobreak.mp3'),                    .9).play(); break;
        case '/yes'             : _snd(new Audio('https://www.myinstants.com/media/sounds/m_6.mp3'),                           .9).play(); break; 
        case '/yoo'             : _snd(new Audio('https://www.myinstants.com/media/sounds/yoooooooooooooooooooooooooooohhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.mp3'),                    .9).play(); break;
    }

})

