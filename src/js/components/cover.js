$(document).ready(function() {

	if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
		window.addEventListener("orientationchange", resizeBackground, false);
	}
	function resizeBackground() {
		$(".multi-cover").height($(window).height());
	}
	resizeBackground();
	$(".multi-cover").owlCarousel({
		singleItem: true,
		addClassActive: true
	});

});
