$.get('https://api.twitch.tv/kraken/streams/RewindRL?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm', function(data) { // This is a seemingly public Twitch API key.
	if(data.indexOf("viewers") !== -1) {
		$("#twitch-banner").html("<p>We're streaming a tournament LIVE on <a href='http://twitch.tv/RewindRL'>Twitch</a>!</p>");
	}
}, 'text');
