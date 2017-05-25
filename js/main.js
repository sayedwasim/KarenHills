var loader;
(function() {
	if ($('#loader').length){
		loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 500, easingIn : mina.easeinout } );
		loader.show();
	}
})();

function setSliderHeight(){
	var headerHeight = $('#header').innerHeight();
	var footerHeight = $('#footer').innerHeight();
	var winHeight = $(window).innerHeight();
	var sliderHeight = winHeight - (headerHeight + footerHeight);
	$('.home-slider-wrapper').innerHeight(sliderHeight);
}

function setContentHeight(){
	var headerHeight = $('#header').innerHeight();
	var footerHeight = $('#footer').innerHeight();
	var winHeight = $(window).innerHeight();
	var contentHeight = winHeight - (headerHeight + footerHeight);
	$('#main_content').css('min-height', contentHeight);
}

$(document).ready(function(){
	setSliderHeight();
	setContentHeight();
	
	/*---------- HOME SLIDER ----------*/
	$(".home-slider").owlCarousel({
		items:1,
		dots:true,
		nav:true,
		navText:["<i class='icon-prev'></i>","<i class='icon-next'></i>"],
		responsiveRefreshRate:0,
		loop:true,
		autoplay:true,
		animateOut: 'fadeOut',
		autoplayHoverPause:true,
		autoplayTimeout: 10000
	});
	
	if($(window).width() > 1000){
		$(".home-slider-wrapper .scrollable").niceScroll({cursorcolor:"#42210B", cursorborder:"0px", autohidemode:false, railpadding:{right:-20}});
	}
	
	/*---------- ABOUT DISCOVER ----------*/
	$(".btn-discover").click(function() {
		var target = $("#homes");
		if (target.length) {
			$('html, body').animate({
					scrollTop: target.offset().top
			}, 1000);
		}
		return false;
	});
	
	/*---------- FEEDBACK ----------*/
	$(".btn-feedback").on("click", function(){
		$('body').toggleClass('feedback-open');
		setTimeout(function() { 
			$('#feedback_fullname').focus();
		}, 100);
	});
	
	$('body').on('click', function(event){
		if($(event.target).is('body.feedback-open') || $(event.target).is('.feedback-close')) {
			$('body').removeClass('feedback-open');
			event.preventDefault();
		}
	});
	
	$('.home-slider-wrapper.inner .btn-close').on('click', function(event){
		$('.home-slider-wrapper.inner .info-wrapper').removeClass('open');
		$('.home-slider-wrapper.inner .slider-cover').removeClass('show');
		$('.home-slider-wrapper.inner .slider-cover').addClass('hide');
		$('.home-slider-wrapper.inner .btn-slider-menu').addClass('show');
		event.preventDefault();
	});
	
	$('.home-slider-wrapper.inner .btn-slider-menu').on('click', function(event){
		$('.home-slider-wrapper.inner .info-wrapper').addClass('open');
		$('.home-slider-wrapper.inner .slider-cover').removeClass('hide');
		$('.home-slider-wrapper.inner .slider-cover').addClass('show');
		$(this).removeClass('show');
		event.preventDefault();
	});
	
});//$(document).ready() end


$(window).on('resize', function(){
	setSliderHeight();
	setContentHeight();
});

$(document).keydown(function(e) {
	// ESCAPE key pressed
	if (e.keyCode == 27) {
		if($("body").hasClass("feedback-open")){
			$("body").removeClass("feedback-open");
		}
	}
});


$(window).load(function() {
	$("#preloader-bg").fadeOut(1000);
	$(".load").fadeOut(1000);
	setTimeout( function() {
		if ($('#loader').length){		
			loader.hide();
		}
	}, 700 );	
});
