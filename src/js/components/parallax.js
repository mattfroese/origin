
$(document).ready(function() {

  $('.parallax').each(function() {
    $(this).parallax({imageSrc: $(this).data('parallax-img')});
  });

})
