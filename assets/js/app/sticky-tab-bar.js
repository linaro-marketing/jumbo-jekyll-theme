$(document).ready(function(){
    var menu = $('#tabbed-nav-bar');
    var light_nav = $("nav#main-navigation.nav-light");
    if(menu.length){
        var origOffsetY = menu.offset().top;
        if($("#universal-nav").length > 0){
            origOffsetY = origOffsetY - 20;
        }
        var navHeight = $("nav#main-navigation").height;
        var text = $('#tabbed-nav-bar ul.nav-tabs li.active a').text();
        $('#sub-navigation-header').text(text);
        function scroll() {
            var text = $('#tabbed-nav-bar ul.nav-tabs li.active a').text();
            $('#sub-navigation-header').text(text);
            $('#sub-navigation-header').hide();
            $('#content-container').css('padding-top','20px');
            $('#wrapper').css('padding-top','0px');

            console.log($(window).scrollTop(),origOffsetY);
            if ( $(window).scrollTop() >= origOffsetY) {
                $('#tabbed-nav-bar').removeClass('non-sticky-nav');
                $('#tabbed-nav-bar').addClass('sticky-nav');
                $("nav#main-navigation").hide();
                $('#wrapper').css('top','166px');
                $('#wrapper').css('margin-top','0px');
                $('#wrapper').css('position','relative');
                $('#content-container').css('padding-top','45px');
                if ($(window).width() < 768) {
                    $('#tabbed-nav-bar nav').removeClass('navbar-default');
                    $('#tabbed-nav-bar nav').addClass('navbar-inverse');
                    $('#tabbed-nav-bar ul.nav-tabs').addClass('nav-stacked');
                    $('#sub-navigation-header').show();
                }
                else {
                    $('#tabbed-nav-bar nav').addClass('navbar-default');
                    $('#tabbed-nav-bar nav').removeClass('navbar-inverse');
                    $('#tabbed-nav-bar ul.nav-tabs').removeClass('nav-stacked');
                    $('#sub-navigation-header').hide();
                }
            }
            else {
                $('#tabbed-nav-bar').removeClass('sticky-nav');
                $('#tabbed-nav-bar').addClass('non-sticky-nav');
                $("nav#main-navigation").show();
                $('#wrapper').css('position','static');
                $('#tabbed-nav-bar nav').addClass('navbar-default');
                $('#tabbed-nav-bar nav').removeClass('navbar-inverse');
                if ($(window).width() < 768) {
                    $('#tabbed-nav-bar ul.nav-tabs').addClass('nav-stacked');
                    $('#sub-navigation-header').show();
                }
                else {
                    $('#tabbed-nav-bar ul.nav-tabs').removeClass('nav-stacked');
                    $('#sub-navigation-header').hide();
                }
            }
        }
        scroll();
        $(window).scroll(function(){
                scroll();
            });
        $(window).resize(scroll);
    }
});
