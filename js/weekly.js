function updateSignups() {
    var timenow = moment().tz("Europe/London");
    if(timenow.format("E") >= 2 && timenow.format("E") <= 5) {
        weeklynum = (timenow.week() + 42).toString();
        var matchlink = "https://smash.gg/tournament/rg-3v3-weekly-" + weeklynum + "-eu-pc-ps4/register/embed";
        $("#weeklylink").html("<p>This week's tournament page can be found <a href='https://smash.gg/RGw" + weeklynum + "'>here</a> if you need it.")
    }
    else {
        var matchlink = "/deliberatelyunwieldydocumentnametoavoidpeoplefindingthisaccidentally.html";
    }
    $("#signup-wrapper").html('<iframe id="signup-frame" src="' + matchlink + '" frameborder="0" height="100%" width="100%" vspace="0" scrolling="auto" hspace="0" allowtransparency="true"></iframe>');
    setTimeout(updateSignups, 600000);
}
updateSignups();
