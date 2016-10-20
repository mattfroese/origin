$(document).on("click",".nav-toggle",function(){
	$(this).toggleClass("active");
	$($(this).data("target")).toggleClass("show");
});

var stickies=[];
var scrolled=[];
$(document).ready(function() {
	$('[data-sticky]').each(function() {
		stickies.push({
			el: $(this),
			at: $(this).position().top,
			class: $(this).data("sticky") == "" ? "nav-sticky" : $(this).data("sticky"),
			offset: !$(this).data("sticky-offset") ? 0 : parseInt($(this).data("sticky-offset")),
			spacer: false,
			addSpacer: $(this).data("sticky-spacer") == undefined ? true : $(this).data("sticky-spacer")
		});
	});
	$('[data-scrolled]').each(function() {
		scrolled.push({
			el: $(this),
			at: $(this).data("scrolled")
		});
	});
	scroll();
})
$(window).scroll(function() {
	scroll();
});
$(window).resize(function() {
	resize();
});
function scroll() {
	var top = $(window).scrollTop();
	stickies.forEach(function(s){
		if( top > s.at + s.offset ) {
			if( s.addSpacer && !s.spacer ) {
				s.spacer = $("<div class=\"sticky-spacer\" style=\"height:" + s.el.height()  + "px\"></div>");
				s.spacer.insertBefore( s.el );
				scrolled.push({
					el: s.el,
					class: !$(this).data("scrolled") ? "scrolled" : $(this).data("scrolled"),
					at: s.at + s.el.height()
				});
			}
			s.el.addClass( s.class );
		} else {
			s.el.removeClass( s.class );
			if( s.spacer ) s.spacer.remove();
			s.spacer = false;
		}
	});
	scrolled.forEach(function(s){
		if( top > s.at ) {
			s.el.addClass( "scrolled" );
		} else {
			s.el.removeClass( "scrolled" );
		}
	});
}
function resize() {
	// TODO: Recalculate the at positions for stickies and scrolleds
}
