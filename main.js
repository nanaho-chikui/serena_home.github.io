/*__________________________サイドバー____________________________________*/

$(function() {
    var duration = 500;
    var $sidebar = $('.sidebar');
    var $button = $('.button a');

    $button.addClass('open');
    $button.click(function() {
        $button.toggleClass('close');
        $button.removeClass('open');
        if ($button.hasClass('close')) {
            $sidebar.stop().animate({
                left: '0'
            }, duration, 'easeOutQuint');
        } else {
            $sidebar.stop().animate({
                left: '-100px'
            }, duration, 'easeOutQuint');
            $button.addClass('open');
        };
    });
});

