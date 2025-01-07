function main() {
    window.addEventListener('load', function() {
        document.querySelectorAll('.preloader').forEach(function(element) {
            element.classList.add('preloader-deactivate');
        });
    });

    /*====================================
        Mobile Menu
    ======================================*/ 	
    $('.menu').slicknav({
        prependTo:".mobile-nav",
        duration: 300,
        closeOnClick:true,
    });
    
    /*===============================
        Hero Slider JS
    =================================*/ 
    $(".hero-slider").owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed: 500,
        autoplayTimeout:3500,
        singleItem: true,
        autoplayHoverPause:true,
        items:1,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots:false,
    });

    /*===============================
        Testimonial Slider JS
    =================================*/ 
    $('.testimonial-slider').owlCarousel({
        items:3,
        autoplay:true,
        autoplayTimeout:4500,
        smartSpeed:300,
        autoplayHoverPause:true,
        loop:true,
        merge:true,
        nav:false,
        dots:true,
        responsive:{
            1: {
                items:1,
            },
            300: {
                items:1,
            },
            480: {
                items:1,
            },
            768: {
                items:2,
            },
            1170: {
                items:3,
            },
        }
    });
    
    /*===============================
        Portfolio Slider JS
    =================================*/ 
    $('.portfolio-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:4000,
        margin:15,
        smartSpeed:300,
        autoplayHoverPause:true,
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            300: {
                items:1,
            },
            480: {
                items:2,
            },
            768: {
                items:2,
            },
            1170: {
                items:4,
            },
        }
    });    
}

        

main();