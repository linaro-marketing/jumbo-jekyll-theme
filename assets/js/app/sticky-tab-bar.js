$(document).ready(function() {
  // Check to see if the tabbed nav bar is in use.
  if ($("#tabbed-nav-bar").length > 0) {
    // Set the sub nav text
    var text = $("#tabbed-nav-bar ul.nav-tabs li.active a").text();
    $("#sub-navigation-header").text(text);
    console.log(text);
    // Menu selector
    var menu = $("#tabbed-nav-bar");
    // Get sub nav offset from the page top
    var origOffsetY = menu.offset().top;
    if ($("#universal-nav").length > 0) {
      origOffsetY = origOffsetY - 20;
    }
    // Instantiate Bootstrap 3 Affix plugin
    $("#tabbed-nav-bar").affix({
      offset: {
        top: origOffsetY
      }
    });
    // Event listeners
    $("#tabbed-nav-bar").on("affixed.bs.affix", function() {
      affixed();
    });
    $("#tabbed-nav-bar").on("affixed-top.bs.affix	", function() {
      affixTop();
    });
    function scroll() {
      if ($("#tabbed-nav-bar.affix-top").length > 0) {
        affixTop();
      }
      if ($("#tabbed-nav-bar.affix").length > 0) {
        affixed();
      }
    }
    function affixTop() {
      $("#tabbed-nav-bar").addClass("non-sticky-nav");
      $("#tabbed-nav-bar").removeClass("sticky-nav");
      $("nav#main-navigation").show();
      if ($(window).width() < 1000) {
        $("#tabbed-nav-bar ul.nav-tabs").addClass("nav-stacked");
        $("#sub-navigation-header").show();
      } else {
        $("#tabbed-nav-bar ul.nav-tabs").removeClass("nav-stacked");
        $("#sub-navigation-header").hide();
      }
    }
    function affixed() {
      // Set thge sticky-nav clas
      $("#tabbed-nav-bar").removeClass("non-sticky-nav");
      $("#tabbed-nav-bar").addClass("sticky-nav");
      // Hide the main navigation bar
      $("nav#main-navigation").hide();
      if ($(window).width() < 768) {
        $("#tabbed-nav-bar ul.nav-tabs").addClass("nav-stacked");
        $("#sub-navigation-header").show();
      } else {
        $("#tabbed-nav-bar ul.nav-tabs").removeClass("nav-stacked");
        $("#sub-navigation-header").hide();
      }
    }
    scroll();
    $(window).scroll(function() {
      scroll();
    });
    $(window).resize(scroll);
  }
});
