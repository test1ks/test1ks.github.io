const swiper1 = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
});

const swiper2 = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
});

new WOW().init();

$(function(){
    $('#menu').slicknav({
        label: "",
        closeOnClick: true,
        brand: "Testiks",
        openedSymbol: "&#10006;",
    });
});