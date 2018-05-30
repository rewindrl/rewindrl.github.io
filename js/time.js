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
    if (timenow.day() == 5) {
        if (timenow.hour() < 18 || (timenow.hour() == 18 && timenow.minute() < 30)) {
            $("#countwrap").html("(That's  " + countdown(moment().hour(18).minute(30).second(0).millisecond(500).tz("Europe/London")).toString() + " until tonight's 3v3 Weekly.)");
        }
        else {
            $("#countwrap").html("Tonight's 3v3 Weekly has begun!");
        }
    }
    else if (timenow.day() > 5) {
        $("#countwrap").html("");
    }
    else {
        $("#countwrap").html("(That's  " + countdown(moment().day("Friday").hour(18).minute(30).second(0).millisecond(500).tz("Europe/London")).toString() + " until the next 3v3 Weekly on " + moment().day("Friday").format("dddd [the] Do [of] MMMM.)"));
    }
    setTimeout(updateTime, 500);
}
updateTime();
