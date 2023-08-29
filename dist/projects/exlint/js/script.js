// Copy code
document.body.onclick = (event) => {
    const elem = event.target;
    if (elem.classList.contains("copy_img")) {
        navigator.clipboard.writeText("npm install --global @exlint.io/cli");
    }
};
// Message after copying
$(document).on("click", ".copy_img", function (e) {
    var tekst = $(
            '<div id="message-success"><p>You are copy this code !</p></div>'
        ),
        linc = $("#jGrowl");
    linc.html(tekst).fadeIn();
    setTimeout(function () {
        linc.fadeOut();
    }, 2000);
});

new WOW().init();
