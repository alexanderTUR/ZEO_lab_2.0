$(function() {

	// Smooth loading
	$('body').removeClass('loading');

	// Functions init
	formValidate();
	if ($(window).width() >= 768) {
		mainAnimation();
	}

	// Main animation function
	function mainAnimation() {
		var $logoBlock = $('.logo-block'),
			$logoContainer = $('.logo-container'),
			$whiteBlock = $('.white-block'),
			$blackBlock = $('.black-block'),
			$formBlock = $('.mail-collector'),
			$squares = $('.square'),
			$redSquare = $('.red-square'),
			$whiteBlockText = $('.white-block-text'),
			$mainSubTitle = $('.figure-subtitle'),
			mainTimeLine = new TimelineLite();

		mainTimeLine
			.add("startAnimation", "0.2")
			.from($logoBlock, 1, {y: '-=50px', x: '+=50px', autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1')
			.from($logoContainer, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.5')
			.from($whiteBlock, 1.2, {x: '+=100%', autoAlpha: 0, ease:Power2.easeOut}, 'startAnimation+=0.8')
			.from($blackBlock, 1, {autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation')
			.from($blackBlock, 1, {x: '-=28%', ease:Power2.easeOut}, 'startAnimation+=1')
			.from($formBlock, 0.8, {y: '+=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.2')
			.from($redSquare, 1, {y: '-=100%', autoAlpha: 0, ease:Power4.easeInOut}, 'startAnimation+=1.5')
			.from($mainSubTitle, 1, {y: '-=100%', autoAlpha: 0, ease:Power3.easeOut}, 'startAnimation+=1.2')
			.from($whiteBlockText, 1, {autoAlpha: 0, ease:Power3.easeOut}, 'startAnimation+=1.5')
			.staggerFrom($squares, 1, {scaleX: 0, scaleY: 0, autoAlpha: 0, ease:Power1.easeInOut}, 0.2, 'startAnimation+=2')
	}

	//Form validation function
	function formValidate() {
		validate.init({
			messageValueMissing: 'Please fill out this field.',
			messageTypeMismatchEmail: 'Please enter an email address.',
			messagePatternMismatch: 'Please enter correct mail.',
			disableSubmit: true,
			onSubmit: function () {
				$("form").trigger("reset");
				$("#mail").css('display', 'none');
				$("#submit").css('display', 'none');
				$(".input-container>label").css('display', 'none');
				$(".input-container").append("<div class='success-container'><p class='onsuccess'>Thanks for your response!</p></div>");
			}
		});
		$(".mail-collector").submit(function(e) { //устанавливаем событие отправки для формы
			var form_data = $(this).serialize(); //собераем все данные из формы
			$.ajax({
				method: "POST", //Метод отправки
				url: "send.php", //путь до php файла отправителя
				data: form_data
			});
			e.preventDefault();
		});
	}

});