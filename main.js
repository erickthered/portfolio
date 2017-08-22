var selectors = [
    "header",
    "#about",
    ".carousel",
    ".carousel .item",
    "#skills",
    "#projects"
];

$(document).ready(function() {
    function updateHeight() {
        var height = $(window).height();
        for (var i = 0; i < selectors.length; i++) {
            $(selectors[i]).css('min-height', height + 'px');
        }
        $("header h1").css('margin-top', height*0.3 + 'px');
        $(".carousel-caption").css('padding-bottom', height*0.3 + 'px');
    }

    updateHeight();
    $(window).resize(function() {
        updateHeight();
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        $(window).stop(true).scrollTo(this.hash, { duration: 1000, interrupt: true });
    });
});