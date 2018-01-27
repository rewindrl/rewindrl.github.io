if(moment().format("E") >= 3 && moment().format("E") <= 5) {
    var matchlink = "https://smash.gg/tournament/rg-3v3-weekly-" + (parseInt(moment().format("WW")) + 44).toString() + "-eu-pc-ps4/register/embed";
    $("#signup-frame").attr("src", matchlink);
}
