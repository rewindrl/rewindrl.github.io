function updateTime() {
    $("#livetime").html(moment().tz("Europe/London").format("HH:mm:ss") + ".");
    // const weeklyday = 4;
    // if (moment().tz("Europe/London").format("d") <== moment(weeklyday.toString() + " ").tz("Europe/London").) {
    //     var nextweekly = moment().tz("Europe/London")
    // }
    // $("#weeklycount").html(moment().tz("Europe/London").countdown("1982-05-25").toString());
    setTimeout(updateTime, 500);
}
updateTime();
