$(document).ready(function () {
    // Modal
    $("[data-window=subs]").on("click", function () {
        $(".overlay, #subs").fadeIn("slow");
    });
    $(".window_close").on("click", function () {
        $(".overlay, #subs").fadeOut("slow");
    });
    $("menu_list_link").on("click", function () {
        $(".offcanvasNavbar, #offcanvasNavbar").fadeOut("slow");
    });
    // Send mail
    // $('form').submit(function(e){
    //     e.preventDefault();
    //     if (!$(this).valid()) {
    //         return;
    //     };
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function(){
    //         $(this).find("input").val("");
    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
});
