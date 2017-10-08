var code;
function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}
if (param("id") != "") {
	code = param("id");
}
else {
	code = "8324";
}
$(".matchlink").attr("href", "https://matcherino.com/tournaments/" + code);
$.get('https://zori3d.com/code.php?matcherinoid=' + code, function(data) {
	$("#matchcode").html(jQuery.parseJSON(data)['body']);
}, 'text');
