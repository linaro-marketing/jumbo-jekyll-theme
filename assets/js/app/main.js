// Hide all navigation sub menus on window click
$(window).click(function() {
    $(".dropdown-submenu.sub-menu > .dropdown-menu.sub-menu").hide();
});
$(document).ready(function () {
    // Toggle the sub menu when clicked.
    $('.dropdown-submenu.sub-menu a').on("click", function(e){
        if($(this).hasClass("active")){
            $(this).next('ul').hide();
            $(this).removeClass("active");
        }
        else {
            $(".dropdown-menu.sub-menu").hide();
            $(".dropdown-submenu.sub-menu a").removeClass("active");
            $(this).next('ul').show();
            $(this).addClass("active");
        }
        e.stopPropagation();
    });
    // Navigation bar setup
    var wrapper = $('#wrapper');
    var universalNav = false;
    var universalNavHeight = 0;
    if("#universal-nav".length>0){
        var universalNav = $('#universal-nav');
        var universalNavHeight = $("#universal-nav").height();
    }
    var stickyOffset = $('#main-navigation').offset().top;
    var wrapper = $('#wrapper');
    function navbar(){
        var sticky = $('#main-navigation'),
        scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) 
        {
            sticky.removeClass('navbar-static');
            wrapper.css('margin-top', $('#main-navigation').height() + universalNavHeight);
            if(universalNav){
            universalNav.hide();
            }
            sticky.addClass('navbar-fixed-top');
        }   
        else 
        {
            sticky.removeClass('navbar-fixed-top');
            wrapper.css('margin-top', '0px');
            if(universalNav){
                universalNav.slideDown("fast");
            }
            sticky.addClass('navbar-static');
        }
    }
    navbar();
    $(window).scroll(function(){
        navbar();
    });
    // Initialise dropdowns
    $('.dropdown-toggle').dropdown();

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
           if($(this).attr("target") != "_self"){
               $(this).attr("target","_blank");
           }
       }
    });
    // Enabled permalinks to specific Bootstrap tabs
    var hash = document.location.hash;
    if (hash) {
        $('.nav-tabs a[href="'+hash+'"]').tab('show');
    } 
    // Change hash for page-reload
    $('.nav-tabs a').on('shown', function (e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });
    var cHeight = 0;

    $('#header-carousel').on('slide.bs.carousel', function (e) {
        var $nextImage = null;

        $activeItem = $('.item.active', this);

        if (e.direction == 'left'){
            $nextImage = $activeItem.next('.item');
        } else {
            if ($activeItem.index() == 0){
                $nextImage = $('div:last', $activeItem.parent());
            } else {
                $nextImage = $activeItem.prev('.item');
            }
        }

        // prevents the slide decrease in height
        if (cHeight == 0) {
            cHeight = $(this).height();
            $activeItem.next('.item').height(cHeight);
        }

        // prevents the loaded image if it is already loaded
        var src = $nextImage.attr('data-src');
        
        if (typeof src !== "undefined" && src != "") {
        $nextImage.css('background-image', 'url(' + src + ')');
        $nextImage.data('data-src', '');
        }
    });
    // Cookie Consent Setup
    window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
        "popup": {
            "background": "#000000",
            "text": "#fff"
        },
        "button": {
            "background": "transparent",
            "text": "#ffffff",
            "border": "#25cfb0"
        }
        }
    })});
});
