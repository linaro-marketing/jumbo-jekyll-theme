$(document).mouseup(function(e) 
{
    var search_container = $("div#search_bar");
    
    // if the target of the click isn't the container nor a descendant of the container
    if (!search_container.is(e.target) && search_container.has(e.target).length === 0) 
    {
        search_container.hide();
    }
    
});

$(document).ready(function () {
    
    $('.dropdown-toggle').dropdown();
    
    
    // $(document).on('touchstart.dropdown.data-api', '.dropdown-submenu > a', function (event) {
    //   event.preventDefault();
    // });
    // 
    // $("li.dropdown-submenu.sub-menu>a").click(function(event){
    //     event.preventDefault();
    //     $("li.dropdown-submenu.sub-menu>a").next("ul.dropdown-menu.sub-menu").show();
    // });
    
    // Search Bar
    // SHOW SEARCH - show search bar when you click the search icon
    
    // Show Search Bar on click
    // focus the user on search input field
    var search_bar = $("div#search_bar");
    var search_icon = $("a#search_icon");
    var search_close = $("button#search_close");
    var search_search = $("button#search_search");
    var search_form = $("form#search_form");
    var search_hidden_input = $("div#search_bar input[type='hidden']");
    
    var nav_light = $('nav.nav-light');
    
    $("a#search_icon").click(function() {
        search_bar.css('display','block');
    });
    
    
    
    // CLICK AWAY CLOSE - Close Search bar on click away from input

    // RESET BUTTON - Clear and Close search
    $("button#search_close").click(function() {
        search_form.trigger('reset');
        search_bar.css('display','none');
    });
    
    // // Youtube Video Thumbnails
    // 
    // var youtube = document.querySelectorAll( ".youtube" );
    // 
    // for (var i = 0; i < youtube.length; i++) {
    // 
    //     var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    // 
    //     var image = new Image();
    //        image.src = source;
    //        image.addEventListener( "load", function() {
    //            youtube[ i ].appendChild( image );
    //        }(i) );
    // 
    //        youtube[i].addEventListener( "click", function() {
    //            var iframe = document.createElement( "iframe" );
    //            iframe.setAttribute( "frameborder", "0" );
    //            iframe.setAttribute( "allowfullscreen", "" );
    //            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
    // 
    //            this.innerHsTML = "";
    //            this.appendChild( iframe );
    //        } );
    // };
    // 

    //Reset form when bootstrap modal closes.
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });

    $('#stacked-nav-bar').on('show.bs.collapse', function() {
        $('.nav-pills').addClass('nav-stacked');
    });
    
    //Unstack menu when not collapsed
    $('#stacked-nav-bar').on('hidden.bs.collapse', function() {
        $('.nav-pills').removeClass('nav-stacked');
    });
    
    
    $("a.dev-services").click(function(){
        $("#developer-services-contact-modal").modal('show');
    });
    
    //Scrolling sticking on IOS7
    if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)){$('html').addClass('ios7');}
    
    
    // //Nav Bar
    // 
    // $('nav').removeClass('no-js');

    // Nav Bar Drop Down Animation
    
    $('nav li.dropdown.main > ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().addClass('open');

        var menu = $(this).parent().find("ul");
        var menupos = menu.offset();
        
        if ((menupos.left + menu.width()) + 30 > $(window).width()) {
            var newpos = - menu.width();
        } else {
            var newpos = $(this).parent().width();
        }
        menu.css({ left:newpos });
    });
    
    
    
    // Remove any zoom class added to body 
    $('body').css('zoom', '');
    
    
    // External Links Opening in new window.
    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          $(this).attr("target","_blank");
       }
    });
    
    console.log("%c%s", "color:#fff; background:#fff; font-size: 2pt", 'Speak friend and enter. - We are Hiring - visit /careers/ for more info.');
    console.log("%c%s", "color:#fff; background:#a682b8; font-size: 16pt", 'Linaro.org - Leading Collaboration in the Arm Ecosystem\n\nStatic Website built using Jekyll\n\nTo Contribute visit https://github.com/Linaro/website');

    
    
});
