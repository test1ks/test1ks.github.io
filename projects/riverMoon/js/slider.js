const swiper = new Swiper(".swiper-slider", {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
