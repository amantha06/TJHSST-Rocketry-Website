$(function() {
	$('.carousel').each(function() {
		var $cfs = $(this);
		$cfs.carouFredSel({
			direction: 'up',
			circular: false,
			infinite: false,
			align: false,
			width: 275,
			height: 250,
			items: 1,
			auto: false,
			scroll: {
				queue: 'last'
			}
		});
		$cfs.hover(
			function() {
				$cfs.trigger('next');
			},
			function() {
				$cfs.trigger('prev');
			}
		);
	});
});