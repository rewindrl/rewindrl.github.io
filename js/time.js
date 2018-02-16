function updateTime() {
    var timenow = moment().tz("Europe/London");
    $("#livetime").html(timenow.format("dddd, HH:mm:ss"));
    if (timenow.format("d") == 4) {
        if (timenow.format("H") < 18) {
            $("#countwrap").html("(That's  " + countdown(moment(new Date(timenow.year(), timenow.month(), timenow.date(), 18, 00, 00)).tz("Europe/London")).toString() + " until tonight's 2v2 Showdown.)");
        }
        else {
            $("#countwrap").html("Tonight's 2v2 Showdown has begun!");
        }
    }
    else if (timenow.format("d") == 5) {
        if (timenow.format("H") <= 18 && timenow.format("m") < 30) {
            $("#countwrap").html("(That's  " + countdown(moment(new Date(timenow.year(), timenow.month(), timenow.date(), 18, 30, 00)).tz("Europe/London")).toString() + " until tonight's 3v3 Weekly.)");
        }
        else {
            $("#countwrap").html("Tonight's 3v3 Weekly has begun!");
        }
    }
    else {
        $("#countwrap").html("");
    }
    setTimeout(updateTime, 500);
}
updateTime();
