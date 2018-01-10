$(document).ready(function(){
        
        var entryTemp = '<li class="list-unstyled"><a href="{url}">{title}</a><small class="rss-date">{date}</small><br/><img class="img-responsive lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="{teaserImageUrl}"/>{shortBodyPlain}</li> <hr>';
        var layoutTemp = '<div class="feed-container"><ul class="list-unstyled">{entries}</ul></div>';

        $("#rss-feed-1").rss("https://linux.codehelp.co.uk/blog.xml",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: true,
        });
        $("#rss-feed-2").rss("http://fullshovel.wordpress.com/category/linaro/feed/",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        
        $("#rss-feed-4").rss("https://translatedcode.wordpress.com/feed/",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: true,
        });

        $("#rss-feed-5").rss("http://suihkulokki.blogspot.com/feeds/posts/default/-/linaro",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        
        $("#rss-feed-6").rss("http://blog.einval.com/linaro/index.rss",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        
        $("#rss-feed-7").rss("http://nerdrambles.wordpress.com/category/Linaro/feed/",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        $("#rss-feed-8").rss("https://www.stylesen.org/taxonomy/term/50/0/feed",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: true,
        });
        $("#rss-feed-9").rss("http://www.bennee.com/~alex/blog/tag/linaro/feed/",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        $("#rss-feed-10").rss("http://blog.eciton.net/index.rss",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        $("#rss-feed-11").rss("http://www.workofard.com/category/linaro/feed/",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });
        $("#rss-feed-12").rss("https://blog.duraffort.fr/feed/tag/linaro/rss",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: true,
        });
        $("#rss-feed-13").rss("http://feeds.launchpad.net/linaro/announcements.atom",
        {
        entryTemplate: entryTemp,
        layoutTemplate: layoutTemp,
        dateFormat: 'MMMM Do, YYYY',
        ssl: false,
        });


});