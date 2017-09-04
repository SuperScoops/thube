/*
    experimental playlist filter script
    things will break (especially when playlist updates)
    v0.3
    zeratul
*/

function markPlaylistVideos(name) {
    clearPlaylistMarks();
    var i = 0,
        pl = $('#queue li'),
        name = name.toLowerCase();
    if (!pl) return;
    for (;i < pl.length; i++) {
        var via = pl[i].title;
        if (via) via = via.substr(10).toLowerCase();
        else continue;
        if (via !== name) {
            $(pl[i]).addClass('pl-noheight');
        } else {
            $(pl[i]).addClass('pl-highlight');
        }
    }
}

function clearPlaylistMarks() {
    $('#filterlabel').text('').hide();
    $('#queue li').removeClass('pl-noheight').removeClass('pl-highlight');
}
$(function() {
    $('.plfilter-css').remove();
    $('head').append(`<style class='plfilter-css'>
    .pl-highlight.queue_active {
        background: #335375;
    }
    .pl-highlight {
        border-color: #63c3ff!important;
        background: #122735!important;
    }
    .pl-noheight {
        height: 0!important;
        padding: 0!important;
        margin: 0!important;
        border: 0!important;
        overflow: hidden!important;
    }
    #filterlabel {
        color: #63c3ff;
        border: 1px solid #63c3ff;
        border-bottom: 0;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: #122735;
        padding: 2px 6px;
    }
    </style>`)
    $('<div id="filterlabel" style="display: none;"></div>').insertBefore('#queue');
    $('#plcontrol').append('<button class="btn btn-sm btn-default collapsed" id="showuserfilter" title="Filter playlist for videos added by a specific user" data-toggle="collapse" data-target="#filterplaylistcontrol" aria-expanded="false"><span class="glyphicon glyphicon-filter"></span></button>');
    $('<div id="filterplaylistcontrol" class="plcontrol-collapse col-lg-12 col-md-12 collapse" aria-expanded="false" style="height: 0px;"><div class="vertical-spacer"></div><div class="input-group"><input class="form-control" id="pfinput" type="text" maxlength=100 placeholder="Username"><span class="input-group-btn"><button class="btn btn-default" id="pfcancel">Clear</button></span><span class="input-group-btn"><button class="btn btn-default" id="pffilter">Filter</button></span></div></div>').insertAfter("#addfromurl");
    $('#pffilter').on('click', function() {
        $('#filterlabel').text('').hide();
        var name = $('#pfinput').val().trim().toLowerCase().substr(0,100);
        if (!name || name === "") {
            makeAlert("Invalid Input", "No username specified to search for.", "alert-danger").appendTo($("#filterplaylistcontrol"));
        } else {
            $('#filterplaylistcontrol .alert').remove();
            markPlaylistVideos(name);
            $('#filterlabel').text('Showing ' + $('.pl-highlight').length + ' videos added by ' + name + '.').show();
        }
    });
    $('#pfcancel').on('click', clearPlaylistMarks);
    $('#pfinput').on('keypress', function(e) {
        if (e.which === 13) {
            var active = ($('.pl-noheight').length > 0 || $('.pl-highlight').length > 0);
            if (active) {
                $('#pfcancel').click();
            } else {
                $('#pffilter').click();
            }
        }
    });
});