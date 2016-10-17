$(document).ready(function() {

	if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
		window.addEventListener("orientationchange", resizeBackground, false);
	} else {
		$(window).resize(resizeBackground);
	}

	function resizeBackground() {
		$(".multi-cover,.cover").height($(window).height());
	}
	resizeBackground();
	$(".multi-cover").each(function() {
		$(this).owlCarousel({
			singleItem: true,
			addClassActive: true,
			autoPlay: $(this).data("autoplay") ? $(this).data("autoplay") : false,
			pauseOnHover: $(this).data("pause-hover") ? $(this).data("pause-hover") : false,
			navigation: $(this).data("navigation") ? $(this).data("navigation") : false,
			navigationText: ["<i class=\"material-icons\">navigate_before</i>", "<i class=\"material-icons\">navigate_next</i>"]
		});
	});
});
