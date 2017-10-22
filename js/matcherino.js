var code;
function param(name) {
    return (location.search.split(name + '=')[1] || '').split('&')[0];
}
if (param("id") != "") {
	code = param("id");
  $(".matchlink").attr("href", "https://matcherino.com/tournaments/" + code);
  $.get('https://zori3d.com/code.php?matcherinoid=' + code, function(data) {
  	$("#matchcode").html(jQuery.parseJSON(data)['body']);
  }, 'text');
}
else {
  setTimeout(function(){
    $("#matchcode").html("<p>Looks like you haven't got a tournament ID.</p><p>Check the link you were given, or contact an admin.</p>");
  }, 1000);
}
