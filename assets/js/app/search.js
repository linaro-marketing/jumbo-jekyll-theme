// JS file for main search bar
$(document).ready(function(){
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
    
    $("button#search_close").click(function() {
        search_form.trigger('reset');
        search_bar.css('display','none');
    });
});
$(document).mouseup(function(e) 
{
    var search_container = $("div#search_bar");    
    // if the target of the click isn't the container nor a descendant of the container
    if (!search_container.is(e.target) && search_container.has(e.target).length === 0) 
    {
        search_container.hide();
    }
});