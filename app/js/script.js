// -------------Nav Hamburger--------------
let navSlide = ()=> {
    let burger = document.querySelector('.main_nav-burger');
    let nav = document.querySelector('.main_nav-ul');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    })
}

navSlide();

// -------------Testimonial Slider--------------

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fade",
        autoPlay:true
    });
});

// -------------Smooth Scroll--------------
var scroll = new SmoothScroll('.main_nav a[href*="#"]', {
    speed: 800
});






