$.get('https://api.twitch.tv/kraken/streams/rewindrl?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm', function(data) {
	if(data.indexOf("viewers") !== -1) {
		$("#twitch-banner").append("<p>We're streaming a tournament LIVE on <a href='http://twitch.tv/RewindRL'>Twitch</a>!</p>");
	}
}, 'text');
