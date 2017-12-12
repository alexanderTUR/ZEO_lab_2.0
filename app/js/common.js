$(function() {

	// Smooth loading
	$('body').removeClass('loading');

	// Hide browser menu
	window.scrollTo(0, 1);

	// Functions init
	formValidate();
	initAnimation();
	if ($(window).width() > 1024) {
		mainAnimation();
	}

	// Main animation function
	function mainAnimation() {
		var $logoBlock = $('.logo-block'),
			$logoContainer = $('.logo-container'),
			$whiteBlock = $('.white-block'),
			$blackBlock = $('.black-block'),
			$animationContainer = $('#animation_container'),
			$formBlock = $('.mail-collector'),
			$squares = $('.square'),
			$redSquare = $('.red-square'),
			$whiteBlockText = $('.white-block-text'),
			mainTimeLine = new TimelineLite();

		mainTimeLine
			.add("startAnimation", "0.2")
			.from($logoBlock, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.5')
			.from($logoContainer, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=2')
			.from($whiteBlock, 1.2, {x: '+=100%', autoAlpha: 0, ease:Power2.easeOut}, 'startAnimation+=0.8')
			.from($blackBlock, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation')
			.from($animationContainer, 0.5, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=0.5')
			.from($blackBlock, 1, {x: '-=28%', ease:Power2.easeOut}, 'startAnimation+=1')
			.from($formBlock, 0.8, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.2')
			.from($redSquare, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.5')
			.from($whiteBlockText, 1, {autoAlpha: 0, ease:Power3.easeOut}, 'startAnimation+=1.5')
			.staggerFrom($squares, 1, {scaleX: 0, scaleY: 0, autoAlpha: 0, ease:Power1.easeInOut}, 0.2, 'startAnimation+=2')

	}

	//Form validation function
	function formValidate() {
		validate.init({
			messageValueMissing: 'Please fill out this field.',
			messageTypeMismatchEmail: 'Please enter an email address.',
			messagePatternMismatch: 'Please enter correct mail.',
			disableSubmit: false
			// onSubmit: function () {
			// 	setTimeout(function(){
			// 		$("form").trigger("reset");
			// 		$("#mail").css('display', 'none');
			// 		$("#submit").css('display', 'none');
			// 		$(".input-container>label").css('display', 'none');
			// 		$(".input-container").append("<div class='success-container'><p class='onsuccess'>Thanks for your response!</p></div>");
			// 	}, 500);
			// }
		});
		// $(".mail-collector").submit(function(e) { //устанавливаем событие отправки для формы
		// 	var form_data = $(this).serialize(); //собераем все данные из формы
		// 	$.ajax({
		// 		method: "POST", //Метод отправки
		// 		url: "send.php", //путь до php файла отправителя
		// 		data: form_data
		// 	});
		// 	e.preventDefault();
		// });
	}

	var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
	function initAnimation() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		var comp=AdobeAn.getComposition("FA16A563FFD14245BBFDC5BE7BD283FB");
		var lib=comp.getLibrary();
		handleComplete({},comp);
	}
	function handleComplete(evt,comp) {
		//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
		var lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		exportRoot = new lib.ZEOlab2();
		stage = new lib.Stage(canvas);
		//Registers the "tick" event listener.
		fnStartAnimation = function() {
			stage.addChild(exportRoot);
			createjs.Ticker.setFPS(lib.properties.fps);
			createjs.Ticker.addEventListener("tick", stage);
		}
		//Code to support hidpi screens and responsive scaling.
		function makeResponsive(isResp, respDim, isScale, scaleType) {
			var lastW, lastH, lastS=1;
			window.addEventListener('resize', resizeCanvas);
			resizeCanvas();
			function resizeCanvas() {
				var w = lib.properties.width, h = lib.properties.height;
				var iw = window.innerWidth, ih=window.innerHeight;
				var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
				if(isResp) {
					if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
						sRatio = lastS;
					}
					else if(!isScale) {
						if(iw<w || ih<h)
							sRatio = Math.min(xRatio, yRatio);
					}
					else if(scaleType==1) {
						sRatio = Math.min(xRatio, yRatio);
					}
					else if(scaleType==2) {
						sRatio = Math.max(xRatio, yRatio);
					}
				}
				canvas.width = w*pRatio*sRatio;
				canvas.height = h*pRatio*sRatio;
				canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
				canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
				stage.scaleX = pRatio*sRatio;
				stage.scaleY = pRatio*sRatio;
				lastW = iw; lastH = ih; lastS = sRatio;
				stage.tickOnUpdate = false;
				stage.update();
				stage.tickOnUpdate = true;
			}
		}
		makeResponsive(true,'both',false,1);
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();
	}

});