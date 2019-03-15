// Hide all navigation sub menus on window click
$(window).click(function() {
    $(".dropdown-submenu.sub-menu > .dropdown-menu.sub-menu").hide();
});
$(document).ready(function () {

    // Clipboard JS
    if($("div.highlight").length > 0){
        $('div.highlight').each(function (index) {
            var uniqueId = "highlight" + index;
            $(this).attr("id", uniqueId);
            var copyBtn = '<button id="copyBtn' + index + '" data-toggle="tooltip" data-placement="left" title="Copied to Clipboard" class="btn copyBtn" data-clipboard-target="#' + uniqueId + '">';
            copyBtn += '<img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>';
            $(this).append(copyBtn);
            (function () {
                new ClipboardJS('#copyBtn' + index);
            })();

        });
    }

    if ($("#jumbotron-slider").length > 0 ){
        $("#jumbotron-slider").owlCarousel({
            navigation: true,
            slideSpeed: 300,
            autoplayTimeout: 10000,
            paginationSpeed: 400,
            pagination: false,
            rewindSpeed: 500,
            rewind: true,
            autoplay: true,
            items: 1,
            lazyLoadEager: 1,
            loop: false,
            lazyLoad: true,
            dots: true
        });
    }

    // Double Scroll Plugin
    if($(".double-scroll").length > 0){
        $(".double-scroll").doubleScroll({
            resetOnWindowResize: true,
            onlyIfScroll: true
        });
    }
    // Toggle the sub menu when clicked.
    $('.dropdown-submenu.sub-menu a').on("click", function (e) {
        if ($(this).hasClass("active")) {
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
    // Theme navbar setup
    var wrapper = $('#wrapper');
    var universalNav = false;
    var universalNavHeight = 0;
    if($("#universal-nav").length > 0){
        var universalNav = $('#universal-nav');
        var universalNavHeight = $("#universal-nav").height();
    }
    var stickyOffset = $('#main-navigation').offset().top;
    var wrapper = $('#wrapper');

    function navbar() {
        // Main Navigation Selector
        var sticky = $('#main-navigation');
        // Scroll value
        var scroll = $(window).scrollTop();

        if (scroll > stickyOffset) {
            sticky.removeClass('navbar-static');
            if(universalNav === false){
                wrapper.css('margin-top', "66px");
            }
            else{
                wrapper.css('margin-top', "104px");
            }

            if (universalNav) {
                universalNav.hide();
            }

            sticky.addClass('navbar-fixed-top');
        }
        else {
            sticky.removeClass('navbar-fixed-top');
            wrapper.css('margin-top', '0px');

            if (universalNav) {
                universalNav.slideDown(100);
            }

            sticky.addClass('navbar-static');
        }
    }
    navbar();
    $(window).scroll(function () {
        navbar();
    });

    // Initialise dropdowns
    $('.dropdown-toggle').dropdown();
    // Reset forms when bootstrap modal closes.
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
    // Stacked Navbar
    $('#stacked-nav-bar').on('hidden.bs.collapse', function() {
        $('.nav-pills').removeClass('nav-stacked');
    });
    // Scrolling sticking on IOS7 (Bug fix)
    if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)){$('html').addClass('ios7');}
    // Dropdown menu JS
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
    // Open External links in a new tab
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
    // Carousel image header - Lazy loading the carousel images
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
