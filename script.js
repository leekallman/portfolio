
// re-size text on scroll
$(document).on("scroll", function() {
    var pixels = $(document).scrollTop()
    var font = pixels /20 + 12
    $(".six").css("font-size", font)
    
    $("span").html(font)
  })