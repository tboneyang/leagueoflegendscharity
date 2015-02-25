var open1 = function() {

	$("#zedcharitycontent").empty();

	if( $("#rivencharitycontent").is(":empty")){

		$("#rivencharitycontent").append("blurb <br> educating ppl <br> about <br> riven, <br> kevin's story <br> and crohn's disease <br> then <br> add <br> appropriate <br> picture <br> along with <br> more donation <br> and learnmore <br> buttons");
	}
	else{
		$("#rivencharitycontent").empty();
	}
}

var open2 = function() {
	$("#rivencharitycontent").empty();
	
	if( $("#zedcharitycontent").is(":empty")){
		$("#zedcharitycontent").append("blurb <br> educating ppl <br> about <br> zed, <br> kevin's story <br> and crohn's disease <br> then <br> add <br> appropriate <br> picture <br> along with <br> more donation <br> and learnmore <br> buttons");
	}
	else{
		$("#zedcharitycontent").empty();
	}
}

