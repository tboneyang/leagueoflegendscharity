var champs =["Annie","Teemo", "Irelia","Brand", "Urgot", "Renekton", "Darius", "Ziggs", "Kassadin", "Ahri", "Xerath"];

var count = -1;
var cycle = function(){
	count +=1;
	var index = count%10;
	var newname = champs[index];
	$("#cyclingchampbox").empty();
	$("#cyclingchampbox").append(newname);
}
$(document).ready(function(){
	setInterval(cycle,2000);

})