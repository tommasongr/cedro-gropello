// NOTE: Menu Slide

$(document).ready(function(){
	$('.link-menu[href^="#"], .link-id').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// NOTE: Lightbox

lightbox.option({
      'showImageNumberLabel': false
});

// NOTE: Testimonials Slider

jQuery(document).ready(function($) {
			$('.testimonials-slider').unslider({
				autoplay: true,
				arrows: false,
				infinite: true,
				speed: 1000,
				delay: 7000,
				nav: true
			});

			var slider = $('.testimonials-slider').unslider();

			$('.unslider-nav > ol > li').click(function() {
				slider.data('unslider').stop();
			});
		});



// NOTE: Accordion

$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title, .expand-less').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();

						$('.expand-more').removeClass('hidden');
						$('.expand-less').removeClass('show-inline-block');
        }else {
            close_accordion_section();
						$('.expand-more').removeClass('hidden');
						$('.expand-less').removeClass('show-inline-block');

						// Change Expand Icon
						$(this).find('.expand-more').addClass('hidden');
						$(this).find('.expand-less').addClass('show-inline-block');
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// NOTE: Special Products

$('.partners-2').on('click', function(){
	$('.pandhy-s-container').addClass('hidden');
	$('.pnei-container').removeClass('hidden');
	$('.crystal-nails-container').addClass('hidden');
	$('.partners-1-img, .partners-2-img, .partners-3-img').removeClass('shadow-select');
	$('.partners-2-img').addClass('shadow-select');

});

$('.partners-1').on('click', function(){
	$('.pandhy-s-container').removeClass('hidden');
	$('.pnei-container').addClass('hidden');
	$('.crystal-nails-container').addClass('hidden');
	$('.partners-1-img, .partners-2-img, .partners-3-img').removeClass('shadow-select');
	$('.partners-1-img').addClass('shadow-select');

});

$('.partners-3').on('click', function(){
	$('.crystal-nails-container').removeClass('hidden');
	$('.pnei-container').addClass('hidden');
	$('.pandhy-s-container').addClass('hidden');
	$('.partners-1-img, .partners-2-img, .partners-3-img').removeClass('shadow-select');
	$('.partners-3-img').addClass('shadow-select');

});

// NOTE: Maps Clicked

$('.maps-container')
	.click(function(){
			$(this).find('iframe').addClass('maps-clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('maps-clicked')
		});

// NOTE: Mobile DropDown Menu

$('.btn-menu').on("click",function(event){
    $(".menu").slideToggle();
});
