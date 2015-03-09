var openbox = function(){
	$("#entrybox").empty();
	//later add function to close box too if it's open
	$("#entrybox").append("<input placeholder='Enter Your Summoner Name'></input>">);
}

var regsummoner = function(){
	$("#afterreg").empty();

	$("#afterreg").append("That's it, you're done!");
	

	$("#afterreg").append(" You currently have raised 0 pledges.");

}