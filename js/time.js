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
    if (timenow.format("d") == 5) {
        if (timenow.format("H") < 18 || (timenow.format("H") == 18 && timenow.format("m") < 30)) {
            $("#countwrap").html("(That's  " + countdown(moment(timenow.format("YYYY-MM-DD") + " 18:30:00:500+00")).toString() + " until tonight's 3v3 Weekly.)");
        }
        else {
            $("#countwrap").html("Tonight's 3v3 Weekly has begun!");
        }
    }
    else if (timenow.format("d") > 5) {
        $("#countwrap").html("");
    }
    else {
        $("#countwrap").html("(That's  " + countdown(moment(timenow.format("YYYY-MM-") + (parseInt(timenow.format("DD")) + 5 - parseInt(timenow.format("d"))).toString() + " 18:30:00:500+00")).toString() + " until the next 3v3 Weekly on Friday.)");
    }
    setTimeout(updateTime, 500);
}
updateTime();
