
$(document).ready(function() {

  $('.parallax').each(function() {
    $(this).parallax({imageSrc: $(this).data('parallax-img')});
  });

})

$(window).scroll(function() {
    $('.parallax2').each(function() {
		$(this).css("transform", "translateY(" + ($(window).scrollTop()) + "px)");
	});
});
