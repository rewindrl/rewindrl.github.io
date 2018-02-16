function updateTime() {
    var timenow = moment().tz("Europe/London");
    $("#livetime").html(timenow.format("dddd, H:mm:ss"));
    if (timenow.format("d") == 4) {
        $("#countwrap").html("(That's  " + countdown(new Date(timenow.year(), timenow.month(), timenow.date(), 18, 00, 00)).toString() + " until tonight's 2v2 Showdown.)");
    }
    else if (timenow.format("d") == 5) {
        $("#countwrap").html("(That's  " + countdown(new Date(timenow.year(), timenow.month(), timenow.date(), 18, 30, 00)).toString() + " until tonight's 3v3 Weekly.)");
    }
    setTimeout(updateTime, 500);
}
updateTime();
