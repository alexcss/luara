;(function($) {
	"use strict";

	var introSlider = $('.ba-intro-slider'),
		bgSlider = $('.ba-bg-slider');

	introSlider.slick({
		prevArrow: '.ba-intro-slider-prev',
		nextArrow: '.ba-intro-slider-next',
		asNavFor: bgSlider,
		speed: 500,
		dots: true,
		appendDots: '.ba-intro-slider-nav',
		adaptiveHeight: true
	});

	bgSlider.slick({
		arrows: false,
		asNavFor: introSlider,
		fade:true,
		speed: 500		
	});


	// Toggle mob menu
	var nav = $('.ba-nav'),
		menuToggle = $('.ba-menu-toggle');

	menuToggle.on('click', function (e) {
		e.preventDefault();
		
		menuToggle.toggleClass('ba-open');
		nav.toggleClass('ba-open');
	});

})(jQuery);

