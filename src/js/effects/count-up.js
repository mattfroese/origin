$(document).ready(function() {
	$("[data-countup]").each(function() {
		var el = $(this)[0];
		var num = $(this).data("countup");
		if (num == "") num = parseInt($(this).html());
		var c = new CountUp(el, 0, num, 0, 2.5, {  
			useEasing: true,
			  useGrouping: false,
			  separator: ',',
			  decimal: '.',
			  prefix: '',
			  suffix: ''
		});
		var waypoint = new Waypoint({
			element: el,
			handler: function(direction) {
				c.start();
			},
			offset: '75%'
		})
	});
});
