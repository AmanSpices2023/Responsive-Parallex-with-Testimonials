// testimonials

var swiper = new Swiper('.client_slider', {
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },
    touch: {
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
    },
});