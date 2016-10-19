$(document).on("click",".nav-toggle",function(){
	$(this).toggleClass("active");
	$($(this).data("target")).toggleClass("show");
});

var shtickies=[];
$(document).ready(function() {
	$('[data-shticky]').each(function() {
		shtickies.push({
			el: $(this),
			shtickAt: $(this).position().top,
			class: $(this).data("shticky") == "" ? "nav-shtuck" : $(this).data("shticky"),
			spacer: false,
			addSpacer: true
		});
	});
})
$(window).scroll(function() {
	var top = $(window).scrollTop();
	shtickies.forEach(function(s){
		if( top > s.shtickAt ) {
			if( s.addSpacer && !s.spacer ) {
				s.spacer = $("<div class=\"shticky-spacer\" style=\"height:" + s.el.height() + "px\"></div>");
				s.spacer.insertBefore( s.el );
			}
			s.el.addClass( s.class );
		} else {
			s.el.removeClass( s.class );
			s.spacer.remove();
			s.spacer = false;
		}
	});
})
