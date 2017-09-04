// Poll Copy button
// written by zeratul (github/zeratul0)
// works i guess? manipulating poll menu and polls themselves is a nightmare

function extractPoll(pollElement) {
	var self = pollElement;
	var title = self.find('h3').length ? cleanPollText(self.find('h3')[0].innerHTML) : "";
	var opts = self.find('.option');
    var obscured = (()=>{
        if (opts.length > 0)
            return ~opts[0].innerText.indexOf('?');
        return false;
    })();
	var newOpts = [];
	var i = 0;
	for (;i < opts.length;i++) {
        if (newOpts.length >= 50) break;
		newOpts.push(cleanPollText(opts[i].innerHTML));
    }
	return {"title":title, "opts":newOpts, "obscured":obscured};
}

function clearPollForm() {
    if (!$('.well.poll-menu').length) return;
    $('.well.poll-menu').remove();
    showPollMenu();
}

function fillPollForm(data) {
    if (!data || typeof data.title !== "string" || !data.opts || !data.hasOwnProperty('obscured') || data.opts.length >= 50) return;
    showPollMenu();
    clearPollForm();
    var form = document.getElementsByClassName('poll-menu');
    if (form.length > 0) {
        form = form[0];
        var fields = form.querySelectorAll('input.form-control'),
            obscured = form.querySelector('input[type="checkbox"]');
            
        function addOption() {
            $("<input/>").addClass("form-control")
                .attr("type", "text")
                .attr("maxlength", "255")
                .addClass("poll-menu-option")
                .insertAfter($(fields[fields.length - 1]));
        }
        var len = fields.length-2;
        while (len < data.opts.length) {
            addOption();
            len++;
        }
        fields = form.querySelectorAll('input.form-control');
        fields[0].value = data.title;
        var i = 2;
        for (;i-2 < data.opts.length;i++) {
            fields[i].value = data.opts[i-2];
        }
        obscured.checked = data.obscured;
    }
}
function cleanPollText(txt) {
	return $('<span>' + txt.replace(/\<button .+?\>[0-9\?]+\<\/button\>/i, '').replace(/\<img class\=\"channel\-emote\" .+? title\=\"(.+?)\"\>/gi, '$1') + '</span>')[0].innerText;
}
socket.on('newPoll', function() {
    var btn = $('<button/>', {
        "class":"btn btn-purple btn-sm pull-right copy",
        "text":"Copy",
        "click":function(){
            fillPollForm(extractPoll($(this).parent()));
        }
    });
    if (CLIENT.rank < CHANNEL.perms.pollctl)
        btn.hide();
    btn.insertBefore($('#pollwrap .well.active').find('h3'));
});
$(function() {
    var x = $('#pollwrap .well');
    var i = 0;
    for (;i < x.length; i++) {
        if (!x.eq(i).find('.btn.copy').length) {
            var btn = $('<button/>', {
                "class":"btn btn-purple btn-sm pull-right copy",
                "text":"Copy",
                "click":function(){
                    fillPollForm(extractPoll($(this).parent()));
                }
            });
            if (CLIENT.rank < CHANNEL.perms.pollctl)
                btn.hide();
            btn.insertBefore(x.eq(i).find('h3'));
        }
    }
});