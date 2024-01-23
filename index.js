$(document).ready(function () {
    // Smooth scroll to anchor links
    $(".nav-link").on("click", function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 100);
    });


    $(window).scroll(function () {
        var scrollPosition = $(document).scrollTop();

        $(".section").each(function () {
            var currentSection = $(this);
            var sectionId = currentSection.attr("id");

            if (scrollPosition >= currentSection.offset().top &&
                scrollPosition < currentSection.offset().top + currentSection.outerHeight()) {
                $(".nav-link").removeClass("active");
                $(".nav-link[href='#" + sectionId + "']").addClass("active");
            }
        });
    });
});



$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

});