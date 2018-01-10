$(document).ready(function(){

    // Home Stick Nav

    var nav_light = $('nav.nav-light');
    var nav_dark = $('nav.nav-dark');
    var nav_base = $('nav#main-navigation');
    var nav_height = nav_base.height();
    var search_bar = $("div#search_bar");

    var main_content = $('div#jumbotron-caption');

    if(nav_light.length || nav_dark.length){

        var origOffsetY = main_content.offset().top - nav_height;
        
        function scroll() {
        
            if ( $(window).scrollTop() > origOffsetY) {
                if(nav_light.length){
                    $('nav#main-navigation').removeClass('nav-light');
                }
                else{
                    $('nav#main-navigation').removeClass('nav-dark');
                }
            }
            else {                
                if(nav_light.length ){
                    $('nav#main-navigation').addClass('nav-light');
                }
                else{
                    $('nav#main-navigation').addClass('nav-dark');
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
