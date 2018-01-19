$(document).ready(function(){

    var menu = $('#tabbed-nav-bar');

    if(menu.length){

        var origOffsetY = menu.offset().top;
        var navHeight = $("nav#main-navigation").height;

        var text = $('#tabbed-nav-bar ul.nav-tabs li.active a').text();
        $('#sub-navigation-header').text(text);

        function scroll() {
            var text = $('#tabbed-nav-bar ul.nav-tabs li.active a').text();
            $('#sub-navigation-header').text(text);
            $('#sub-navigation-header').hide();


            if ( $(window).scrollTop() > origOffsetY) {
                $('#tabbed-nav-bar').removeClass('non-sticky-nav');
                $('#tabbed-nav-bar').addClass('sticky-nav');
                if($("ul#tab-row > li.main").length == 0){
                    $("ul#tab-row").append("<li class='divider'></li>");
                    $("#navbar-buttons > li" ).clone().appendTo("ul#tab-row");
                }

                $("nav#main-navigation").hide();
                $('#wrapper').css('margin-top','70px');
                if ($(window).width() < 1000) {
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
                $("ul#tab-row > li.main").remove();
                $("ul#tab-row > li.divider").remove();
                $('#wrapper').css('margin-top','0px');
                $("nav#main-navigation").show();

                $('#tabbed-nav-bar nav').addClass('navbar-default');
                $('#tabbed-nav-bar nav').removeClass('navbar-inverse');

                if ($(window).width() < 1000) {
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
