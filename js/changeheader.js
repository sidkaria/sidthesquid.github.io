var $header = $('#header');
var $firstlink = $('#firstlinklink');
$(document).ready(function() {
	$header.css({"color" : "white"});
});
$(document).scroll(function() {
	if($(this).scrollTop() > 0) {
    	$header.css({"background-color" : "white", "color" : "#212121",
    		"box-shadow" : "0 1px 5px rgba(0,0,0,0.16), 0 1px 5px rgba(0,0,0,0.23)"});
		$firstlink.addClass("blue");
	} else {
		$header.css({"background-color" : "transparent", "box-shadow" : "none",
			"color" : "white"})
    	$firstlink.removeClass("blue");
	}
});