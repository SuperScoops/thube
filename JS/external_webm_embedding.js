/*!  
**|  CyTube In-Chat Media Embedding Support
**|  Written by Xaekai
**|  Version: 2015.12.25
///

WebM / Imgur GifV:



Sound Embedding Filters:

Normal:
\b(https?\:\/\/)(.*?)[.,](?:sound|play)\b
<span class="sound-embed" style="display:none;" data-proto="\1" data-path="\2"></span>

Replace for autoplay:
<span class="sound-embed autoplay" style="display:none;" data-proto="\1" data-path="\2"></span>

\\\
**@preserve
*/
function parse_VideoEmbeds(){$("img.webm").each(function(index){var img2vid=this;var newElement=$("<video>").attr("preload","").attr("volume",.5).attr("webkit-playsinline","").text("Your browser does not support the video tag.");if($(this).hasClass("data")){$(this).attr("src",$(this).attr("data-src"));$(this).removeAttr("data-src")}var source=$(this).attr("src");if($(this).hasClass("imgur")){$(this).removeAttr("src");source=source.split(".").reverse().splice(1).reverse().join(".");newElement.append('<source src="'+source+".mp4"+'" type="video/mp4">').append('<source src="'+source+".webm"+'" type="video/webm">')}var user=$(this).parents('div[class*="chat-msg"]').attr("class").match(/chat-msg-[^ ]+/)[0].replace(/chat-msg-/,"");var rank=findUserlistItem(user)?findUserlistItem(user).data()["rank"]:-2;var dataParams=$(this).attr("data-params")||"";$(this).removeAttr("data-params");var playParams={autoplay:dataParams.match(/a/)&&rank>=1?true:false,unmuted:dataParams.match(/m/)&&rank>=1?true:false,loop:dataParams.match(/l/)&&rank>=1?true:false,controls:dataParams.match(/c/)&&rank>=2?true:false,shens:""};if(playParams.autoplay&&playParams.unmuted&&rank<2){playParams.autoplay=false;playParams.shens=" Attempted unauthorized unmuted autoplay"}try{window[CHANNEL.name].VirtualWhisper(String().concat("Video Media embedded by ",user,". Rank: ",rank>-2?rank:"unknown"," Autoplay:",playParams.autoplay," Unmuted:",playParams.unmuted," Loop:",playParams.loop," Hide Controls:",playParams.controls))}catch(e){return}if(playParams.autoplay){newElement.attr("autoplay","");newElement[0].autoplay=true}if(playParams.loop){newElement.attr("loop","");newElement[0].loop=true}if(playParams.unmuted){newElement.removeAttr("muted");newElement[0].muted=false}else{newElement.attr("muted","");newElement[0].muted=true}if(playParams.controls){newElement.removeAttr("controls");newElement[0].controls=false}else{newElement.attr("controls","");newElement[0].controls=true}attrs=null;$.each(this.attributes,function(index){$(newElement).attr(img2vid.attributes[index].name,img2vid.attributes[index].value)});$(this).parent().after(newElement.addClass("webmvol")).remove();setTimeout(function(){$(".webmvol").each(function(){$(this)[0].volume=.33;$(this).removeClass("webmvol")})},1500)})}function parse_SoundEmbeds(args){$(".sound-embed:not(.parsed)").each(function(index){var self=$(this);var path=self.attr("data-path");var proto=self.attr("data-proto");self.addClass("parsed").append($("<audio>").append($("<source>").attr("src",proto+path).attr("type","audio/mpeg")).prop("volume",.4).on("play",function(){$(this).siblings("button").addClass("btn-success").removeClass("btn-default btn-warning").html('<span class="glyphicon glyphicon-pause"></span>').attr("title","Click to pause")}).on("pause",function(){$(this).siblings("button").addClass("btn-warning").removeClass("btn-default btn-success").html('<span class="glyphicon glyphicon-play"></span>').attr("title","Click to resume")}).on("ended",function(){$(this).siblings("button").addClass("btn-default").removeClass("btn-success btn-warning").html('<span class="glyphicon glyphicon-play"></span>').attr("title","Click to play")})).append($("<button>").addClass("btn btn-sm btn-default playsound").attr("title","Click to play").html('<span class="glyphicon glyphicon-play"></span>').on("click",function(event){if(event.ctrlKey){$("#chatline").val(String().concat($("#chatline").val()," ",$(this).siblings("audio").children("source").attr("src")));return}var sound=$(this).siblings("audio")[0];if(sound.paused){sound.play()}else{sound.pause()}})).show();if(self.hasClass("autoplay")){self.children("audio").attr("autoplay",true)}})}if(!CHANNEL.mediaListeners){CHANNEL.mediaListeners=socket.on("chatMsg",function(){parse_SoundEmbeds();parse_VideoEmbeds()});parse_SoundEmbeds();parse_VideoEmbeds();$(".webm").each(function(){$(this)[0]["volume"]=.33})}