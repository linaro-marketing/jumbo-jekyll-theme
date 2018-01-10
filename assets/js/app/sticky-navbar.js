$(document).ready(function(){

    var menu = $('#tabbed-nav-bar');

    if(menu.length){

        var origOffsetY = menu.offset().top;
        var navHeight = $("nav#main-navigation").height;

        var text = $('#tabbed-nav-bar ul.nav-tabs li.active').text();
        $('#sub-navigation-header').text(text);

        function scroll() {
            var text = $('#tabbed-nav-bar ul.nav-tabs li.active').text();
            $('#sub-navigation-header').text(text);
            $('#sub-navigation-header').hide();


            if ( $(window).scrollTop() > origOffsetY) {
                $('#tabbed-nav-bar').addClass('sticky-nav');
                $("nav#main-navigation").hide();
                $('#main-container').css('margin-top','160px');
                if ($(window).width() < 1200) {
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
                $('#main-container').css('margin-top','80px');
                $("nav#main-navigation").show();

                $('#tabbed-nav-bar nav').addClass('navbar-default');
                $('#tabbed-nav-bar nav').removeClass('navbar-inverse');

                if ($(window).width() < 1200) {
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
