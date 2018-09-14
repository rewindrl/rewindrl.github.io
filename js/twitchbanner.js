function updateBanner() {
    $.ajax({
     type: 'GET',
     url: 'https://api.twitch.tv/helix/streams?user_id=135462003',
     dataType: "json",
     headers: {
       'Client-ID': '5j0r5b7qb7kro03fvka3o8kbq262wwm' // this client ID is public as far as we know; misusing it will not affect us :)
     },
     success: function(data) {
    	 if(data["data"].length !== 0) {
    	    var streamdata = data["data"][0]
      	    $("#twitch-banner").html("<p>We're streaming the " + streamdata["title"].slice(0,17) + " LIVE on <a href='http://twitch.tv/RewindRL'>Twitch</a>!</p>");
         }
     }
    });
    setTimeout(updateBanner, 60000);
}
updateBanner();
