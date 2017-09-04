//Staging for white chat checkbox and clear PMs button
$('#customSettingsStaging').append('<div class="customSettings" data-title="Chat Options" id="chatOptionsWrap"></div>');
$('#chatOptionsWrap').append('<label><input type="checkbox" name="whitechatCheck" id="whiteCheck" />White Chat</label>');
$('#chatOptionsWrap').append('<div data-title="Clear PMs" id="clearPMwrap"><button class="btn btn-primary" id="pm-clear"><i class="glyphicon glyphicon-trash"></i> Clear PMs</button></div>');

$('#whiteCheck').change(function(){
  if (this.checked){
    $('#chatwrap').append('<link id="whiteChat" href="https://dl.dropbox.com/s/wtg68o0l3s9ka1g/White%20chat.css" rel="stylesheet" />')
  }else if (!this.checked) {
    $('#whiteChat').remove()
  }})

$('#pm-clear').click( function() { 
    if (confirm("WARNING: This will permanently clear all PMs on this channel!")) {
		localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify("[]");
		$("#pmbar > div[id^=pm]:not(.pm-panel-placeholder)").each(function() { $(this).remove(); });
		$.each(localStorage, function(key){ if (key.startsWith(CHANNEL.name + "_BetterPM_History_")) { window.localStorage.removeItem(key); } });
	}
});

function makeTrashcan(target) {
	//add trashcan
	$('#pm-' + target + ' > div.panel-heading').append('<button class="close pull-right" id="close-pm-' + target + '"><i class="glyphicon glyphicon-trash" style="font-size:16px;margin-right:16px"></i></button>');
	$('#close-pm-' + target).click(function () {
		if (confirm("Erase entire PM history with " + target + "?")) {
			$('[id^="pm-' + target + '"]').remove();
			$('[id^="pm-placeholder-' + target + '"]').remove();
			window.localStorage.removeItem(CHANNEL.name + "_BetterPM_History_" + target);
			localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify("[]");
		}});
}

//append trashcan icons to PM boxes for history deletion + tab removal
$('[id^="pm-"] > div.panel-heading').each(function(){
	var target = $(this).parent('div').text().split("×")[0];
	makeTrashcan(target);
});

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observepm = new MutationObserver(function(mutations, observer) {
    for(var i=0; i<mutations.length; ++i) {
        for(var j=0; j<mutations[i].addedNodes.length; ++j) {
            if(mutations[i].addedNodes[j].id.startsWith("pm-") &&
             !(mutations[i].addedNodes[j].id.includes("placeholder"))) {
             	var target = mutations[i].addedNodes[j].id.substring(3);
             	makeTrashcan(target);            	
        	}
    	}	
	}
});

observepm.observe($("#pmbar").get(0), {
  childList: true
});