if(moment().tz("Europe/London").format("E") >= 2 && moment().tz("Europe/London").format("E") <= 4) {
    var matchlink = "https://smash.gg/tournament/rg-2v2-showdown-" + (parseInt(moment().tz("Europe/London").format("WW")) + 13).toString() + "-eu-pc-ps4/register/embed";
}
else {
    var matchlink = "/deliberatelyunwieldydocumentnametoavoidpeoplefindingthisaccidentally.html";
}
$("#signup-wrapper").html('<iframe id="signup-frame" src=' + matchlink + ' frameborder="0" height="100%" width="100%" vspace="0" scrolling="auto" hspace="0" allowtransparency="true"></iframe>')
