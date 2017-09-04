/*!  
**|  CyTube Virtual Whispers and User Join/Leave messages for Everybody
**|  Written by Xaekai
**|  Copyright 2013-2016
**|  
**@preserve
*/
window[CHANNEL.name].VirtualWhisperOffset=0;window[CHANNEL.name].VirtualWhisperSync=function(){socket.once("chatMsg",function(data){window[CHANNEL.name].VirtualWhisperOffset=Date.now()-data.time})};setTimeout(window[CHANNEL.name].VirtualWhisperSync,2e3);setTimeout(window[CHANNEL.name].VirtualWhisperSync,3e4);window[CHANNEL.name].VirtualWhisper=function(msg){var data={time:Date.now()-window[CHANNEL.name].VirtualWhisperOffset,username:"[server]",msg:msg,msgclass:"server-whisper",meta:{shadow:false,addClass:"server-whisper",addClassToNameAndTimestamp:true}};addChatMessage(data)};window[CHANNEL.name].VirtualWhisperTick=1e3;window[CHANNEL.name].VirtualWhisperExpire=function(tickValue){if(document.hidden){$("div.chat-msg-\\\\\\$server\\\\\\$[data-expire]").each(function(){$(this).attr("data-expire",parseInt($(this).attr("data-expire"))+tickValue)});return}$("div.chat-msg-\\\\\\$server\\\\\\$[data-expire]").first().each(function(){Date.now()>parseInt($(this).attr("data-expire"))&&$(this).remove()});$("div.chat-msg-\\\\\\$server\\\\\\$:not([data-expire])").each(function(){$(this).attr("data-expire",Date.now()+3e4)})};window[CHANNEL.name].whisperUserLeave=function(data){window[CHANNEL.name].VirtualWhisper(data.name+" disconnected")};window[CHANNEL.name].whisperUserJoin=function(data){window[CHANNEL.name].VirtualWhisper(data.name+" joined")};if(!this[CHANNEL.name].loaded_whispers){this[CHANNEL.name].loaded_whispers=true;$("#messagebuffer").on("whisper",((ev,msg)=>{window[CHANNEL.name].VirtualWhisper(msg)}));socket.on("userLeave",function(data){window[CHANNEL.name].whisperUserLeave(data)});socket.on("addUser",function(data){if(CLIENT.rank<2){window[CHANNEL.name].whisperUserJoin(data)}});setInterval(function(tickValue){return window[CHANNEL.name].VirtualWhisperExpire(tickValue)},window[CHANNEL.name].VirtualWhisperTick,window[CHANNEL.name].VirtualWhisperTick)}