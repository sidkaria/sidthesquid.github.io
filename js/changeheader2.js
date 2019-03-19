var $header = $('#header');
var $firstlink = $('#firstlinklink');
$(document).scroll(function() {
	if($(this).scrollTop() > 0) {
    	$header.css({"background-color" : "white",
    		"box-shadow" : "0 1px 5px rgba(0,0,0,0.16), 0 1px 5px rgba(0,0,0,0.23)"});
	} else {
		$header.css({"background-color" : "transparent", "box-shadow" : "none"});
	}
});