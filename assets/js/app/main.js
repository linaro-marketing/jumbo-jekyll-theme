$(document).ready(function() {
  // Clipboard JS
  if ($("div.highlight").length > 0) {
    $("div.highlight").each(function(index) {
      var uniqueId = "highlight" + index;
      $(this).attr("id", uniqueId);
      var copyBtn =
        '<button id="copyBtn' +
        index +
        '" data-toggle="tooltip" data-placement="left" title="Copied to Clipboard" class="btn copyBtn" data-clipboard-target="#' +
        uniqueId +
        '">';
      copyBtn +=
        '<img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>';
      $(this).append(copyBtn);
      (function() {
        new ClipboardJS("#copyBtn" + index);
      })();
    });
  }
  if ($("#jumbotron-slider").length > 0) {
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
      lazyLoadEager: 0,
      loop: false,
      lazyLoad: true,
      dots: true
    });
  }
  if ($(".owl-carousel.slider_block").length > 0) {
    $(".owl-carousel.slider_block").each(function(index) {
      // Set Default values for the responsive items
      var xs_items = 1;
      var sm_items = 2;
      var xs_items = 3;
      var lg_items = 4;
      var seconds_per_slide = 5000;
      var dots = false;
      var nav = true;

      if (typeof $(this).data("xs-number") !== "undefined") {
        var xs_items = $(this).data("xs-number");
      }
      if (typeof $(this).data("sm-number") !== "undefined") {
        var sm_items = $(this).data("sm-number");
      }
      if (typeof $(this).data("md-number") !== "undefined") {
        var md_items = $(this).data("md-number");
      }
      if (typeof $(this).data("lg-number") !== "undefined") {
        var lg_items = $(this).data("lg-number");
      }
      if (typeof $(this).data("seconds-per-slide") !== "undefined") {
        var seconds_per_slide = $(this).data("seconds-per-slide") * 1000;
      }
      if (typeof $(this).data("dots") !== "undefined") {
        var dots = $(this).data("dots");
      }
      if (typeof $(this).data("nav") !== "undefined") {
        var nav = $(this).data("nav") * 1000;
      }

      $(this).owlCarousel({
        nav: nav,
        dots: dots,
        slideSpeed: 300,
        autoplayTimeout: seconds_per_slide,
        rewindSpeed: 500,
        rewind: true,
        autoplay: true,
        autoHeight: true,
        responsiveClass: true,
        lazyLoad: true,
        lazyLoadEager: 0,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: xs_items
          },
          // breakpoint from 480 up
          768: {
            items: sm_items
          },
          // breakpoint from 768 up
          992: {
            items: md_items
          },
          1200: {
            items: lg_items
          }
        }
      });
    });
  }

  // Double Scroll Plugin
  if ($(".double-scroll").length > 0) {
    $(".double-scroll").doubleScroll({
      resetOnWindowResize: true,
      onlyIfScroll: true
    });
  }
  // Theme navbar setup
  var wrapper = $("#wrapper");
  var universalNav = false;
  // Main Navigation Selector
  var main_nav = $("#main-navigation");
  var wrapper_margin_top = main_nav.height();
  if ($("#universal_nav").length > 0) {
    var universalNav = $("#universal_nav");
    wrapper_margin_top += universalNav.height();
  }
  var stickyOffset = $("#main-navigation").offset().top;
  var wrapper = $("#wrapper");

  function navbar() {
    // Scroll value
    var scroll = $(window).scrollTop();

    if (scroll > stickyOffset) {
      if (universalNav) {
        universalNav.hide();
      }
      wrapper.css("margin-top", wrapper_margin_top);
      main_nav.addClass("fixed-top");
    } else {
      main_nav.removeClass("fixed-top");
      wrapper.css("margin-top", "0px");

      if (universalNav) {
        universalNav.show();
      }
    }
  }
  navbar();
  $(window).scroll(function() {
    navbar();
  });

  //   Multi-level dropdowns
  $(".navbar .dropdown-menu > li:not(.dropdown-item)").on("click", function(e) {
    e.stopPropagation();
  });
  $(".navbar .dropdown-item").on("click", function(e) {
    var $el = $(this).children(".dropdown-toggle");
    var $parent = $el.offsetParent(".dropdown-menu");
    if (!$parent.parent().hasClass("navbar-nav")) {
      if ($parent.hasClass("show")) {
        $parent.removeClass("show");
        $el.next().removeClass("show");
        $el.next().css({ top: -999, left: -999 });
      } else {
        $parent
          .parent()
          .find(".show")
          .removeClass("show");
        $parent.addClass("show");
        $el.next().addClass("show");
        $el
          .next()
          .css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
      }
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Reset forms when bootstrap modal closes.
  $(".modal").on("hidden.bs.modal", function() {
    $(this)
      .find("form")[0]
      .reset();
  });
  // Stacked Navbar
  $("#stacked-nav-bar").on("hidden.bs.collapse", function() {
    $(".nav-pills").removeClass("nav-stacked");
  });
  // Scrolling sticking on IOS7 (Bug fix)
  if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)) {
    $("html").addClass("ios7");
  }
  // Open External links in a new tab
  $("a").each(function() {
    var a = new RegExp("/" + window.location.host + "/");
    if (!a.test(this.href)) {
      if ($(this).attr("target") != "_self") {
        $(this).attr("target", "_blank");
      }
    }
  });
  // Enabled permalinks to specific Bootstrap tabs
  var hash = document.location.hash;
  if (hash) {
    $('.nav-tabs a[href="' + hash + '"]').tab("show");
  }
  // Change hash for page-reload
  $(".nav-tabs a").on("shown", function(e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
  });

  // Cookie Consent Setup
  if ($("meta[name=analytics_code]")) {
    // Options for the Cookie Dialog
    var options = {
      title: "Cookies & Privacy Policy",
      link: "https://www.linaro.org/legal/#privacy",
      moreInfoLabel: "View our Privacy Policy",
      delay: 1000,
      acceptBtnLabel: "Accept all cookies",
      uncheckBoxes: false,
      message:
        "Cookies enable you to use this website to the full extent and to personalize your experience on our sites. They tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches and give us insights into user behavior so we can improve our communications with you.",
      cookieTypes: [
        {
          type: "Analytics",
          value: "analytics",
          description: "Cookies related to site visits, browser types, etc."
        }
      ],
      onAccept: function() {
        init_ga();
      }
    };
    // Enabled Google Analytics if cookie to allow us to collect is set.
    function init_ga() {
      if ($.fn.ihavecookies.preference("analytics")) {
        (function(i, s, o, g, r, a, m) {
          i["GoogleAnalyticsObject"] = r;
          (i[r] =
            i[r] ||
            function() {
              (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(
          window,
          document,
          "script",
          "https://www.google-analytics.com/analytics.js",
          "ga"
        );
        ga("create", "UA-XXXXX-Y", "auto");
        ga("send", "pageview");
        console.log("Google Analytics started");
      } else {
        console.log("Google analytics not started... :(");
      }
    }
    // Initialize
    init_ga();

    if ($(".cookie_manager").length > 0) {
      var analytics_toggle = $("#analytics_toggle");
      if ($.fn.ihavecookies.preference("analytics")) {
        analytics_toggle.addClass("active");
      }
      analytics_toggle.on("click", function() {
        $.removeCookie("_ga");
        $.removeCookie("_ga", { path: "/" });
        $.removeCookie("_gid");
        $.removeCookie("_gid", { path: "/" });
        $.removeCookie("_gat");
        $.removeCookie("_gat", { path: "/" });
        $.removeCookie("cookieControlPrefs");
        $.removeCookie("cookieControlPrefs", { path: "/" });
        $.removeCookie("cookieControl");
        $.removeCookie("cookieControl", { path: "/" });
        options["analyticsChecked"] = false;
        options["acceptBtnLabel"] = "Updated Cookies";
        $("body").ihavecookies(options);
      });
    }
    $("body").ihavecookies(options);
  }
});
