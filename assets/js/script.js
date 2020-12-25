jQuery(function($){
	/*=====preloader======*/
	jQuery(window).load(function() { // makes sure the whole site is loaded      
		jQuery('#preloader').delay(400).fadeOut('slow'); // will fade out      
	});

	/*======Scroll To Top=====*/
	jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 300) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });


	jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });

	/*----Fixed navbar----*/
	jQuery(window).bind('scroll', function() {
		if (jQuery(window).scrollTop() > 100) {
			jQuery('.navbar').addClass('navbar-bg');
			jQuery('.navbar-brand').addClass('navbar-brand-small');
		} else {
			jQuery('.navbar').removeClass('navbar-bg');
			jQuery('.navbar-brand').removeClass('navbar-brand-small');
		}
	});
/*==== Top slider====*/
	jQuery('.about-us-cnt').slick({
		infinite:true,
		arrows:true,
		speed:400,
		autoplay:true,
		fade:true,
		cssEase:'linear'
	});
    /*======Chef=====*/
    jQuery('.blog-nav').slick({
    	dots:false,
    	infinite:true,
    	arrows:true,
    	autoplay:true,
    	speed:300,
    	slidesToShow:3,
    	slidesToScroll:3,
    	autoplaySpeed:2500,
    	responsive:[
				{
					breakpoint:992,
					settings:{
						slidesToShow:2,
						slidesToScroll:2
					}
				},
    	{
    		breakpoint:776,
    		settings:{
    			slidesToShow:1,
    			slidesToScroll:1
    		}
    	},
    	{
    		breakpoint:480,
    		settings:{
    			slidesToShow:1,
    			slidesToScroll:1
    		}
    	}
    	]
    });
});

/*----Navbar-toggle-----*/
$(document).ready(function (){
	$('.header-btn').click(function (){
		$('.nav-collapse').toggleClass('show');
		$('.nav-collapse').addClass('show');
	});
});
$(document).ready(function (){
	$('.nav-close').click(function (){
		$('.nav-collapse').toggleClass('hide');
		$('.nav-collapse').addClass('hide');
	});
});

//======= Portfolio ==== See more----
$(document).ready(function () {
 
    $(".portfolio-show").hide();
    $(".see-more-btn").on("click", function (e) {
        
        var $this = $(this).prev('.portfolio-show');
        var $text = $(this);
      
        $this.slideToggle('1000', function () {
            if ($(this).is(':visible')) {
                $text.text('That\'s All');
            } else {
                $text.text('See More of these');
            }
        });
    });
});
/*=====Navigation bar=====*/