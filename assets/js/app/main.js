


$(document).ready(function () {

    //Scrolling sticking on IOS7
    if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)){$('html').addClass('ios7');}


    $("#closeForm").click(function(){
        $("#searchDropdown").dropdown('toggle');
    });

    // //Close the bootstrap navigation bar by clicking another part of the current page.
    // $(document).on('click',function(){
    //     $('#navbar-collapse').collapse('hide');
    // });

    $('.main-navbar ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
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

    $("#searchDropdown").click(function() {
       $("#dlDropDown").dropdown("toggle");
    });

    $('body').css('zoom', '');



    $('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          $(this).attr("target","_blank");
       }
    });


    $("#searchform").show();

});

$('.main-navbar > nav').removeClass('no-js-navbar');

// $('.main-navbar .dropdown').on('show.bs.dropdown', function() {
//   $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
// });
//
// $('.main-navbar .dropdown').on('hide.bs.dropdown', function() {
//   $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
// });

$(function () {

    function closeSearch() {
        var $form = $('.navbar-collapse form[role="search"].active');
        $form.removeClass('active');
        $form.trigger('reset');

    }
    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input'),
            $resetForm = $(this).closest('.navbar-collapse form[role="search"]:not(.active) button[type="reset"]')


        $form.addClass('active');
        $input.focus();



    });

    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {

        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');


        $("input[type='hidden']").attr("value", "96Boards"); //Neeeded to stop the hidden input from being not included on second search.
        if($input.val().length !== 0){
            $form.submit();
            closeSearch();
        }

    });

    $(document).on('click', '.navbar-collapse form[role="search"].active button[type="reset"]', function(event)
    {
        closeSearch();
    });

});
