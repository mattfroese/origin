var Aura = {
    navSwap: null
};
$(window).scroll(function() {
    if (Aura.navSwap) {
        if ($(window).scrollTop() > Aura.navSwap.position) {
            $('.navbar').removeClass(Aura.navSwap.class);
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').addClass(Aura.navSwap.class);
            $('.navbar').removeClass('navbar-scrolled');
        }
    }
});
var navSwap = null;
$(document).ready(function() {
    if ($('.navbar[data-navbar-swap]')) {
        var ns = $('.navbar[data-navbar-swap]');
        Aura.navSwap = {
            position: ns.data('navbar-swap'),
            class: ns.data('navbar-swap-class')
        };
    }
});
