$(window).resize(function(){
  $('#largeplayer').remove();
})

if (USEROPTS.layout === "fluid" || USEROPTS.layout === "synchtube-fluid"){$("#leftcontrols").append('<button title="Will only work with 1080p+ resolutions" id="largevidToggle" class="btn btn-default btn-sm">1080p+ Player</button>');}
$('#largevidToggle').click(function(){
  if(USEROPTS.layout === "default" || USEROPTS.layout === "hd" || USEROPTS.layout === "synchtube"){
    $("#largeplayer").remove();
    $(this).remove();
  }else if ($("body").hasClass("fluid") && $("body").hasClass("synchtube") && ($("#largeplayer").length === 0)) {
    $("head").append('<link id="largeplayer" href="https://dl.dropbox.com/s/c5ekrjcfh79z4id/1080A.css" rel="stylesheet" />');
  }else if ($("body").hasClass("fluid") && ($("#largeplayer").length === 0)) {
    $("head").append('<link id="largeplayer" href="https://dl.dropbox.com/s/8i0r6r0ed22fdco/1080AFluid.css" rel="stylesheet" />');
  }else{
    $("#largeplayer").remove();
  }
});





