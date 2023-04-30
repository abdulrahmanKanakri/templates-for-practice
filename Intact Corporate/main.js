// Strat fixed element at right side
// Start Tooltip

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// End Tooltip
// End fixed element at right side


// Start fixed bottom element

// Go to the top
$(function() {
    $('.fixed-go-top').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

// End fixed bottom element


// Start main carousel
$(function() {
    
    if($('.carousel-inner .carousel-item:first-child').hasClass('active')) {
        // first slide
        $('.carousel-inner .carousel-item:first-child .just-text').css({
            'transform':'translateY(0px)',
            'opacity':'1'
        });
        $('.carousel-inner .carousel-item:first-child button').css({
            'opacity':'1'
        });
    }

    $("#demo").on('slid.bs.carousel', function() {
        if($('.carousel-inner .carousel-item:first-child').hasClass('active')) {
            // first slide
            $('.carousel-inner .carousel-item:first-child .just-text').css({
                'transform':'translateY(0px)',
                'opacity':'1'
            });
            $('.carousel-inner .carousel-item:first-child button').css({
                'opacity':'1'
            });

            // second slide
            $('.carousel-inner .carousel-item:last-child .just-text').css({
                'transform':'translateY(30px)',
                'opacity':'0'
            });
            $('.carousel-inner .carousel-item:last-child button').css({
                'opacity':'0'
            });
        } else {
            // first slide
            $('.carousel-inner .carousel-item:first-child .just-text').css({
                'transform':'translateY(30px)',
                'opacity':'0'
            });
            $('.carousel-inner .carousel-item:first-child button').css({
                'opacity':'0'
            });

            // second slide
            $('.carousel-inner .carousel-item:last-child .just-text').css({
                'transform':'translateY(0px)',
                'opacity':'1'
            });
            $('.carousel-inner .carousel-item:last-child button').css({
                'opacity':'1'
            });
        }
    });
});

// End main carousel

// Start about
const about = document.querySelector('.about');
var aboutRect = about.getBoundingClientRect();

$(function() {
    $('.nav-item .nav-link[href = \'#about\']').click(()=> {
        $('#collapsibleNavbar').collapse('hide');
    });
});

// End about


// Start performance 
var performanceCheck = 1;
// End performance 


// Start services
const services = document.querySelector('.services');
var servicesRect = services.getBoundingClientRect();

$(function() {
    $('.nav-item .nav-link[href = \'#services\']').click(()=> {
        $('#collapsibleNavbar').collapse('hide');
    });
});
// End services


// Start testimonials
const testimonials = document.querySelector('.testimonials');
var testimonialsRect = testimonials.getBoundingClientRect();

$(function() {
    $('.nav-item .nav-link[href = \'#testimonials\']').click(()=> {
        $('#collapsibleNavbar').collapse('hide');
    });
});
// End testimonials


// Start counters
var countersCheck = 1;
// End counters


// start our offices
const ourOffices = document.querySelector('.our-offices');
var ourOfficesRect = ourOffices.getBoundingClientRect();

$(function() {
    $('.nav-item .nav-link[href = \'#contact\']').click(()=> {
        $('#collapsibleNavbar').collapse('hide');
    });
});
// End our offices



// Start eLements depends on scrolling
window.onscroll = function() {scrollFunction();}
function scrollFunction() {

    // Start Shrink Navbar on scroll

    if(document.documentElement.clientWidth > 992) {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            var Navbar = document.querySelector('.navbar');
            Navbar.classList.add('shrink');
        } else {
            var Navbar = document.querySelector('.navbar');
            Navbar.classList.remove('shrink');
        }
    }

    // End Shrink Navbar on scroll


    // Start fixed bottom element

    var performance = document.querySelector('.performance');
    var performanceTop = performance.getBoundingClientRect().top;

    if(document.body.scrollTop >= performanceTop || document.documentElement.scrollTop >= performanceTop) {
        document.querySelector('.fixed-go-top').style.right = '25px';
    } else {
        document.querySelector('.fixed-go-top').style.right = '-50px';
    }

    // End fixed bottom element


    // Start about 
    if((document.body.scrollTop >= aboutRect.top && document.body.scrollTop <= aboutRect.bottom) || (document.documentElement.scrollTop >= aboutRect.top && document.documentElement.scrollTop <= aboutRect.bottom)) {  
        $(function() {
            $('.navbar .nav-link[href = \'#about\']').addClass('link-scroll');
        });
    } else {
        $(function() {
            $('.navbar .nav-link[href = \'#about\']').removeClass('link-scroll');
        });
    }
    // End about


    // Start performance animation
    if(performanceCheck == 1) {
        if(document.body.scrollTop >= performanceTop || document.documentElement.scrollTop >= performanceTop) {
            // software solutions
            $('.performance .container .col-md:first-child').css({
                'transform':'translateX(0%)',
                'opacity' : '1'
            });
    
            //performance
            $('.performance .container .col-md:last-child').css({
                'transform':'translateY(0%)',
                'opacity' : '1'
            });
            
    
            $('#progress-content1 .progress-bar').css({
                'width': '60%'
            });
            var progressBarNum1 = document.querySelector('#progress-content1 .progress-head span:last-child');
            var width1 = 0;
            var id1 = setInterval(function() {inceasingNumber(60, 1)}, 12);
            
    
            $('#progress-content2 .progress-bar').css({
                'width': '75%'
            });
            var progressBarNum2 = document.querySelector('#progress-content2 .progress-head span:last-child');
            var width2 = 0;
            var id2 = setInterval(function() {inceasingNumber(75, 2)}, 12);
    
            $('#progress-content3 .progress-bar').css({
                'width': '90%'
            });
            var progressBarNum3 = document.querySelector('#progress-content3 .progress-head span:last-child');
            var width3 = 0;
            var id3 = setInterval(function() {inceasingNumber(90, 3)}, 12);
    
    
    
            function inceasingNumber(n, who) {
                if(who == 1) {
                    if(width1 >= n) {
                        clearInterval(id1);
                    } else {
                        width1++;
                        progressBarNum1.innerHTML = width1 + '%';
                    }
                } else if(who == 2) {
                    if(width2 >= n) {
                        clearInterval(id2);
                    } else {
                        width2++;
                        progressBarNum2.innerHTML = width2 + '%';
                    }
                } else if(who == 3) {
                    if(width3 >= n) {
                        clearInterval(id3);
                    } else {
                        width3++;
                        progressBarNum3.innerHTML = width3 + '%';
                    }
                }
            }
            performanceCheck = 0;
        }
    }
    // End performance animation


    // Start Strategy animation
    var strategy = document.querySelector('.about .strategy .item');
    var strategyRect = strategy.getBoundingClientRect();
    var strategyTop = strategyRect.top;
    
    if(document.body.scrollTop >= strategyTop || document.documentElement.scrollTop >= strategyTop) {
        $(function() {
            $('.about .strategy .item').css({
                'opacity':'1'
            });
        });
    }
    // End Strategy animation


    // Start services
    if((document.body.scrollTop >= servicesRect.top && document.body.scrollTop <= servicesRect.bottom) || (document.documentElement.scrollTop >= servicesRect.top && document.documentElement.scrollTop <= servicesRect.bottom)) {
        $('.navbar .nav-link[href = \'#services\']').addClass('link-scroll');
    } else {
        $('.navbar .nav-link[href = \'#services\']').removeClass('link-scroll');
    }
    // End services


    // Start how we wor
    if(document.body.scrollTop >= 2780 || document.documentElement.scrollTop >= 2780) {
        $(function() {
            $('.how-we-work .col-md-3').css({
                'opacity':'1',
                'transform': 'translateY(0%)'
            });
        });
    }
    // End how we work
    

    // Start testimonials
    if((document.body.scrollTop >= testimonialsRect.top && document.body.scrollTop <= testimonialsRect.bottom) || (document.documentElement.scrollTop >= testimonialsRect.top && document.documentElement.scrollTop <= testimonialsRect.bottom)) {
        $('.navbar .nav-link[href = \'#testimonials\']').addClass('link-scroll');
    } else {
        $('.navbar .nav-link[href = \'#testimonials\']').removeClass('link-scroll');
    }
    // End testimonials


    // Start counters
    if(countersCheck == 1) {
        if(document.body.scrollTop >= 4000 || document.documentElement.scrollTop >= 4000) {
            
            $('.counters .col-md-3').css({
                'opacity':'1',
                'transform': 'translateY(0%)'
            });
    
            const counter1 = document.querySelector('.counters .col-md-3:nth-child(1) .content div');
            var cnt1 = 0;
            var countFunc1 = setInterval(function() {inceasingNumber2(220, 1)}, 10);
    
            const counter2 = document.querySelector('.counters .col-md-3:nth-child(2) .content div');
            var cnt2 = 0;
            var countFunc2 = setInterval(function() {inceasingNumber2(160, 2)}, 12);
    
            const counter3 = document.querySelector('.counters .col-md-3:nth-child(3) .content div');
            var cnt3 = 0;
            var countFunc3 = setInterval(function() {inceasingNumber2(440, 3)}, 6);
    
            const counter4 = document.querySelector('.counters .col-md-3:nth-child(4) .content div');
            var cnt4 = 0;
            var countFunc4 = setInterval(function() {inceasingNumber2(320, 4)}, 8);
    
            function inceasingNumber2(n, who) {
                if(who == 1) {
                    if(cnt1 >= n) {
                        clearInterval(countFunc1);
                    } else {
                        cnt1++;
                        counter1.innerHTML = cnt1;
                    }
                } else if(who == 2) {
                    if(cnt2 >= n) {
                        clearInterval(countFunc2);
                    } else {
                        cnt2++;
                        counter2.innerHTML = cnt2;
                    }
                } else if(who == 3) {
                    if(cnt3 >= n) {
                        clearInterval(countFunc3);
                    } else {
                        cnt3++;
                        counter3.innerHTML = cnt3;
                    }
                } else if(who == 4) {
                    if(cnt4 >= n) {
                        clearInterval(countFunc4);
                    } else {
                        cnt4++;
                        counter4.innerHTML = cnt4;
                    }
                }
            }
    
            countersCheck = 0;
        }
    }
    // End counters


    // Start our offices
    if(document.documentElement.clientWidth > 992) {
        if(document.body.scrollTop >= ourOfficesRect.top || document.documentElement.scrollTop >= ourOfficesRect.top) {
            $('.navbar .nav-link[href = \'#contact\']').addClass('link-scroll');
        } else {
            $('.navbar .nav-link[href = \'#contact\']').removeClass('link-scroll');
        }
    }
    // End our offices


    // Start get in touch
    if(document.body.scrollTop >= 5100 || document.documentElement.scrollTop >= 5100) {
        $('.get-in-touch .container .row button').css({
            'opacity' : '1',
            'transform' : 'scale(1)'
        });
    }
    // End get in touch

    // console.log('body: ' + document.documentElement.scrollTop);

}

// End eLements depends on scrolling


// Start Strategy | Development | Planning

// Owl Carousel
$(function() {
    $('.strategy .owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

// End Strategy | Development | Planning

// Start Services

$(function() {

    $('.nav-tabs .nav-item').click(function() {
        var tabs = Array.from(document.querySelectorAll('.nav-tabs .nav-item'));
        for(var i=0;i<tabs.length;i++) {
            tabs[i].classList.remove('active');
        }
        this.classList.add('active');
    });
})

// End Services

// Start Testimonials

$('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})

// End Testimonials