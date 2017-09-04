$(function() {
    if (window.LIGHTSOUT === undefined) {
        window.LIGHTSOUT = getOpt('useLightsOut');
        if (LIGHTSOUT === null) {
            setOpt('useLightsOut', false);
            LIGHTSOUT = false;
        }
        $('.lightsoutbtn').remove();
        var btn = $('<span/>', {
            'class':'lightsoutbtn label pull-right pointer label-default',
            text:'LightsOut',
            click:function(){
                $('.LIGHTSOUT-CSS').remove();
                $(this).removeClass('label-default');
                $(this).removeClass('label-lightsout');
                var theme = getOpt('theme');
                if (!LIGHTSOUT) {
                    if (theme === '/css/themes/slate.css') {
                        LIGHTSOUT = true;
                        $(this).addClass('label-lightsout');
                        $('head').append('<link class="LIGHTSOUT-CSS" href="https://cdn.rawgit.com/zeratul0/cytube-lightsout-theme/fd09f273/lightsout.css" rel="stylesheet">');
                    } else {
                        $(this).addClass('label-default');
                        alert('Lights Out was not set. You must be using the Slate theme.');
                    }
                } else {
                    LIGHTSOUT = false;
                    $(this).addClass('label-default');
                }
                setOpt('useLightsOut', LIGHTSOUT);
            }
        });
        btn.appendTo('#chatheader');
        if (LIGHTSOUT) {
            LIGHTSOUT = false;
            btn.click();
        }
    }
});