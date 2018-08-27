function updateTime() {
    var timenow = moment().tz("Europe/London");
    $("#livetime").html(timenow.format("dddd, HH:mm:ss zz"));
    // if (timenow.format("d") == 4) {
    //     if (timenow.format("H") < 18) {
    //         $("#countwrap").html("(That's  " + countdown(moment(new Date(timenow.year(), timenow.month(), timenow.date(), 18, 00, 00, 500)).tz("Europe/London")).toString() + " until tonight's 2v2 Showdown.)");
    //     }
    //     else {
    //         $("#countwrap").html("Tonight's 2v2 Showdown has begun!");
    //     }
    // }
    // if (timenow.day() == 5) {
    //     if (timenow.hour() < 18 || (timenow.hour() == 18 && timenow.minute() < 30)) {
    //         $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(18).minute(30).second(0).millisecond(500)).toString() + " until tonight's 3v3 Weekly.)");
    //     }
    //     else {
    //         $("#countwrap").html("Tonight's 3v3 Weekly has begun!");
    //     }
    // }
    // else if (timenow.day() > 5) {
    //     $("#countwrap").html("");
    // }
    // else {
    //     $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").day("Friday").hour(18).minute(30).second(0).millisecond(500)).toString() + " until the next 3v3 Weekly on " + moment().day("Friday").format("dddd [the] Do [of] MMMM.)"));
    // }
    if (timenow.day() == 1) {
        if (timenow.hour() < 16 || (timenow.hour() == 16 && timenow.minute() < 30)) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(16).minute(30).second(0).millisecond(500)).toString() + " until signups close for the first qualifier of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a>.)");
        }
        else if (timenow.hour() < 18) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(18).minute(00).second(0).millisecond(500)).toString() + " until the first qualifier of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> begins!)");
        }
        else {
            $("#countwrap").html("The first qualifier for <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> has begun!");
        }
    }
    else if (timenow.day() == 2) {
        if (timenow.hour() < 16 || (timenow.hour() == 16 && timenow.minute() < 30)) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(16).minute(30).second(0).millisecond(500)).toString() + " until the second qualifier of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a>.)");
        }
        else if (timenow.hour() < 18) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(18).minute(00).second(0).millisecond(500)).toString() + " until the second qualifier of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> begins!)");
        }
        else {
            $("#countwrap").html("The second qualifier for <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> has begun!");
        }
    }
    else if (timenow.day() > 2 && timenow.day() < 5) {
        $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").day("Friday").hour(16).minute(30).second(0).millisecond(500)).toString() + " until the first day of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a>.)");
    }
    else if (timenow.day() == 5) {
        if(timenow.hour() < 18) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(16).minute(30).second(0).millisecond(500)).toString() + " until the first day of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a>.)");
        }
        else {
            $("#countwrap").html("The first day of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> has begun!");
        }
    }
    else if (timenow.day() == 6) {
        if(timenow.hour() < 18) {
            $("#countwrap").html("(That's  " + countdown(moment().tz("Europe/London").hour(16).minute(30).second(0).millisecond(500)).toString() + " until the final day of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a>.)");
        }
        else {
            $("#countwrap").html("The final day of <a href='https://smash.gg/tournament/rewind-gaming-presents-the-colosseum/details' target='_blank'>The Colosseum</a> has begun!");
        }
    }
    else {
        $("#countwrap").html("");
    }
    setTimeout(updateTime, 500);
}
updateTime();
