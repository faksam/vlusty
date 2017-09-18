(function ($) {
    $(function () {
        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        $('.carousel.carousel-slider').carousel({ fullWidth: true, padding: 200 }, setTimeout(autoplay, 5500));
        
        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 5500);
        };
        $('.carousel').carousel({ duration: 35 });
        $('.button-collapse').sideNav();

        $('.pushpin-demo-nav').each(function () {
            var $this = $(this);
            var $target = $('#' + $(this).attr('data-target'));
            $this.pushpin({
                top: $target.offset().top,
                bottom: $target.offset().top + $target.outerHeight() - $this.height()
            });
        });
    });

})(jQuery);

$(document).ready(function () {
    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });
});


