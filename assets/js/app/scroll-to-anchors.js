// Animated scroll to anchors and offset
var $root = $('html, body');

$('#content-container a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-200
    }, 500);

    return false;
});