$(function() {

	// Smooth loading
	$('body').removeClass('loading');

	// var scene = document.getElementById('scene');
	// var parallaxInstance = new Parallax(scene);

	// Loader hide
	// setTimeout(function(){$('body').addClass('loaded');}, 1000);

	$(window).resize(function() {
		// menuClose();
	});

	// Header animation
	// function headerMainAnimation() {
	// 	var $mainHeaderContainer = $('.header-top'),
	// 		$headerLogo = $('.header-logo-container'),
	// 		$menuItems = $('.menu-item'),
	// 		$socialIcons = $('.social-item'),
	// 		$mainTitle = $('.header-title'),
	// 		headerTimeLine = new TimelineLite();
	//
	// 	headerTimeLine
	// 		.from($mainHeaderContainer, 1, {y: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, '+=1.5')
	// 		.addLabel('startHeaderAnimation', '-=0.5')
	// 		.from($headerLogo, 1, {x: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startHeaderAnimation', '-=0.5')
	// 		.staggerFrom($menuItems, 1, {y: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.1, 'startHeaderAnimation')
	// 		.staggerFrom($socialIcons, 0.8, {x: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 0.15, '-=0.8')
	// 		.from($mainTitle, 1, {autoAlpha: 0, ease:Power4.easeInOut}, '-=1.5')
	// }

});