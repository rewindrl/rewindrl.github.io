if(moment().tz("Europe/London").format("E") >= 2 && moment().tz("Europe/London").format("E") <= 4) {
    var matchlink = "https://smash.gg/tournament/rg-2v2-showdown-" + (parseInt(moment().tz("Europe/London").format("WW")) + 13).toString() + "-eu-pc-ps4/register/embed";
    $("#signup-frame").attr("src", matchlink);
}
