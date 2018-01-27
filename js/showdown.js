if(moment().format("E") >= 2 && moment().format("E") <= 4) {
    var matchlink = "https://smash.gg/tournament/rg-2v2-showdown-" + (parseInt(moment().format("WW")) + 14).toString() + "-eu-pc-ps4/register/embed";
    $("#signup-frame").attr("src", matchlink);
}
