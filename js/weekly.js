if(moment().tz("Europe/London").format("E") >= 3 && moment().tz("Europe/London").format("E") <= 5) {
    var matchlink = "https://smash.gg/tournament/rg-3v3-weekly-" + (parseInt(moment().tz("Europe/London").format("WW")) + 44).toString() + "-eu-pc-ps4/register/embed";
    $("#signup-frame").attr("src", matchlink);
}
