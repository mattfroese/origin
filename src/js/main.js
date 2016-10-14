var Origin = {
    navScroll: null,
	navInit: function() {
	    if ($('#header[data-nav-sticky]')) {
	        var ns = $('#header');
	        Origin.navScroll = {
				el: ns,
	            class: ns.data('nav-scroll'),
	            position: ns.data('nav-scroll-start')
	        };
	    }
		Origin.checkNav();
	},
	checkNav: function() {
		if (Origin.navScroll) {
	        if ($(window).scrollTop() > Origin.navScroll.position) {
	            Origin.navScroll.el.addClass(Origin.navScroll.class);
	        } else {
	            Origin.navScroll.el.removeClass(Origin.navScroll.class);
	        }
	    }
	}
};
$(window).scroll(function() {
    Origin.checkNav();
});
$(document).ready(function() {
	Origin.navInit();
});
$(document).on("click","#resposive-nav-toggle",function(){
	$("#primary-nav").toggleClass("show");
	if( $("#primary-nav").hasClass("show") ) {
		$('#header').addClass("nav-in");
	} else {
		$('#header').removeClass("nav-in");
	}
});
