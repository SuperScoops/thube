$("#chatheader").append('<span id="animationbutton" class="label pull-right pointer label-animationbutton">Anim</span>');
$("#animationbutton").click(function(){$('#messagebuffer').toggleClass('notransition');$('#animationbutton').toggleClass('label-animationbutton');});
