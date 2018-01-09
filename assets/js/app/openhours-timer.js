$(document).ready(function(){
    //Open Hours CountDown using FlipClick http://flipclockjs.com/
    // Need to update the nextDay function to recognize to reset the timer after the other has expired.
    function nextDay(x){
        var now = new Date();
        now.setDate(now.getDate() + (x+(7-now.getDay())) % 7);
        return now;
    }
    
    var nextOpenHours = nextDay(4);

    //The date of the open hours
    var openhours  = new Date(Date.UTC(2017, 09,  17, 16, 0, 0));
    
    var now   = new Date();
    var diff  = openhours.getTime()/1000 - now.getTime()/1000;

    var clock = $('.open-hours-clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });

});
