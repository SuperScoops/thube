$("#chatheader").append('<span id="topbutton" class="label pull-right pointer label-topbutton">Top</span>');

CLIENT._hideNav = JSON.parse(localStorage.getItem(CHANNEL.name + "_hideNav"));

if (CLIENT._hideNav === null) {
	CLIENT._hideNav === false; localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(false));
} 

if (CLIENT._hideNav === true) {
	$(".navbar").hide(); $("#motdrow").hide(); $("#cinematoggle").hide();
	$("#topbutton").removeClass("label-topbutton").addClass("label-default"); $("#mainpage").css("padding-top","10px");
}

$("#topbutton").click(function(){
	if (CLIENT._hideNav === false) {
		CLIENT._hideNav = true; localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(true));
		$(".navbar").hide(); $("#motdrow").hide(); $("#cinematoggle").hide();
		$("#topbutton").removeClass("label-topbutton").addClass("label-default"); $("#mainpage").css("padding-top","10px");
	} else {
		CLIENT._hideNav = false; localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(false));
		$(".navbar").show(); $("#motdrow").show(); $("#cinematoggle").show();
		$("#topbutton").removeClass("label-default").addClass("label-topbutton"); $("#mainpage").css("padding-top","60px");
	}
});
