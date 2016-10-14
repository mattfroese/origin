var Origin = {
    navScroll: null
};
$(window).scroll(function() {
    if (Origin.navScroll) {
        if ($(window).scrollTop() > Origin.navScroll.position) {
            Origin.navScroll.el.addClass(Origin.navScroll.class);
        } else {
            Origin.navScroll.el.removeClass(Origin.navScroll.class);
        }
    }
});
$(document).ready(function() {
    if ($('#header[data-nav-sticky]')) {
        var ns = $('#header');
        Origin.navScroll = {
			el: ns,
            class: ns.data('nav-scroll'),
            position: ns.data('nav-scroll-start')
        };
    }
});
$(document).on("click","#resposive-nav-toggle",function(){
	$("#primary-nav").toggleClass("show");
});
