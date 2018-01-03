$(document).ready(function(){

    //MAIN Navigation
    var nav = $("nav#main-navigation");
    // MAIN Content Container
    var content = $('#main-container');
    //SUB Navigation Text Header
    // SUB Navigati on
    var sub_navigation = $('#tabbed-nav-bar');
    var sub_navigation_text = $('#sub-navigation-header');
    var sub_navigation_nav  = $('#tabbed-nav-bar nav');
    var sub_navigation_nav_tabs = $('#tabbed-nav-bar ul.nav-tabs');
    var sub_navigation_nav_tabs_active = $('#tabbed-nav-bar ul.nav-tabs li.active');


    if(sub_navigation.length){

        var origOffsetY = sub_navigation.offset().top;
        var navHeight = nav.height;

        var text = $('#tabbed-nav-bar ul.nav-tabs li.active').text();
        sub_navigation_text.text(text);

        function scroll() {

            var text = $('#tabbed-nav-bar ul.nav-tabs li.active').text();
            sub_navigation_text.text(text);
            sub_navigation_text.hide();

            if ( $(window).scrollTop() > origOffsetY) {
                sub_navigation.addClass('sticky-nav');
                nav.hide();
                content.css('margin-top','160px');
                if ($(window).width() < 1200) {
                    sub_navigation_nav.removeClass('navbar-default');
                    sub_navigation_nav.addClass('navbar-inverse');


                    sub_navigation_nav_tabs.addClass('nav-stacked');
                    sub_navigation_text.show();
                }
                else {
                    sub_navigation_nav.addClass('navbar-default');
                    sub_navigation_nav.removeClass('navbar-inverse');

                    sub_navigation_nav_tabs.removeClass('nav-stacked');
                    sub_navigation_text.hide();
                }
            }
            else {
                sub_navigation.removeClass('sticky-nav');
                content.css('margin-top','80px');
                nav.show();

                sub_navigation_nav.addClass('navbar-default');
                sub_navigation_nav.removeClass('navbar-inverse');

                if ($(window).width() < 1200) {
                    sub_navigation_nav_tabs.addClass('nav-stacked');
                    sub_navigation_text.show();
                }
                else {
                    sub_navigation_nav_tabs.removeClass('nav-stacked');
                    sub_navigation_text.hide();
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
