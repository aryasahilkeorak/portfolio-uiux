
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".on-scroll-nav").css("background", "#141A31");
            $(".on-scroll-nav").css("transition", "all 0.5s ease");
        }

        else {
            $(".on-scroll-nav").css("background", "transparent");

        }
    })
})



