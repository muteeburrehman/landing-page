$(document).ready(function(){
	"use strict";

	/***** Preloader *****/
	$(window).on('load', function() {
		$(".preloader .item-wrapper").delay(500).animate({
	        top: "-100%"
	    },500,"easeInQuart");
	    $(".preloader").delay(500).fadeOut(500);
	});

	/***** Sicky Menu *****/
	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".sticky-menu").removeClass("sticky");
		}else{
			$(".sticky-menu").addClass("sticky");
		}
	});

	/***** Owl Carousel *****/

	// Home 1 Slider
	$(".owl-slider").owlCarousel({
		autoplay:true,
    	autoplayTimeout:7000,
    	animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    	autoplayHoverPause:true,
    	smartSpeed:700,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<img src="images/left-arrow.png" alt="" />', '<img src="images/right-arrow.png" alt="" />'],
		margin: 0,
		dots: true
    });

	$(".owl-slider").on('translate.owl.carousel', function() {
		$('.slider-item .img1.effect').removeClass('wow').hide();
        $('.slider-item .img2.effect').removeClass('wow').hide();
        $('.slider-item .slider-box .effect').removeClass('wow').hide();
    });

    $(".owl-slider").on('translated.owl.carousel', function() {
		$('.owl-item.active .slider-item .img1.effect').addClass('animated').show();
        $('.owl-item.active .slider-item .img2.effect').addClass('animated').show();
        $('.owl-item.active .slider-item .slider-box .effect').addClass('animated').show();
    });

	// Home 2 Slider
	$(".slider-wrapper").owlCarousel({
		autoplay:true,
    	autoplayTimeout:7000,
    	animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    	autoplayHoverPause:true,
    	smartSpeed:200,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<img src="images/left-arrow.png" alt="" />', '<img src="images/right-arrow.png" alt="" />'],
		margin: 0,
		dots: true
    });

	$(".slider-wrapper").on('translate.owl.carousel', function() {
        $('.slider-item .img1.effect').removeClass('wow').hide();
        $('.slider-item .img2.effect').removeClass('wow').hide();
        $('.slider-item .slider-box .effect').removeClass('wow').hide();
    });

    $(".slider-wrapper").on('translated.owl.carousel', function() {
        $('.owl-item.active .slider-item .img1.effect').addClass('animated').show();
        $('.owl-item.active .slider-item .img2.effect').addClass('animated').show();
        $('.owl-item.active .slider-item .slider-box .effect').addClass('animated').show();
    });

	// Best Deal
	$(".bt-body").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 0,
		dots: false,
    });

	// Hot Offer
	$(".ht-body").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 0,
		dots: false,
    });

	// Feature Product Home 1
	$(".tab-slider").owlCarousel({
		autoplay:false,
    	autoplayTimeout:7000,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 3,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 20,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    });

	// New Product Home 1
	$(".new-slider").owlCarousel({
		autoplay:false,
    	autoplayTimeout:7000,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 3,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 20,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    });

	// Top Seller
	$(".slr-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 3,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 20,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    });

	// Blog Slider
	$(".blog-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 3,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 25,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    });

	// Testimonial Slider
	$(".test-body").owlCarousel({
		autoplay:true,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : false,
		margin: 25,
		dots: true,
    });

	//Top Rated Slider
	$(".rt-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 0,
		dots: false,
    });

	// Brand Slider
	$(".tp-bnd").owlCarousel({
		autoplay:true,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 6,
		nav : false,
		margin: 20,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 3
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
    });

	// Best Offer Slider Home 2
	$(".bst-body").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 0,
		dots: false,
    });

	// Home 2 blog
	$(".fb-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 3,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 25,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			}
		}
    });

	// Mega Menu Slider
	$(".m-slider").owlCarousel({
		autoplay:true,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 1,
		margin: 0,
		nav : false,
		dots: false
    });

	// Team slider
	$(".team-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 4,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 25,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
    });

	// Similar Item Slider
	$(".sim-slider").owlCarousel({
		autoplay:false,
    	autoplayHoverPause:true,
    	smartSpeed:500,
		loop: true,
		responsiveClass: true,
		items : 4,
		nav : true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		margin: 25,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
    });

	/***** Shopping Cart *****/
	$('.cart-btn').on('click', function(e){
	    e.preventDefault();
	    $('.cart-overlay').addClass('visible');
	    $('.cart-body').addClass('open');
	});
	$('.close-cart, .cart-overlay').on('click', function(e){
	    e.preventDefault();
	    $('.cart-overlay').removeClass('visible');
	    $('.cart-body').removeClass('open');
	});