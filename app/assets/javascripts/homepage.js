/*
var showschedule = function(){
  $("#feab").removeClass("selected");
  $("#regb").removeClass("selected");
  $("#schb").addClass("selected");

  $("#homenavbox").empty();
  var topbar = $("<div></div>").addClass("htopbar");
  var tsearch = $("<input></input>").addClass("htopsearch").attr("placeholder", "Search Summoners");
  topbar.append(tsearch);
  $("#homenavbox").append(topbar);
}

var showregister =function(){
  $("#feab").removeClass("selected");
  $("#regb").addClass("selected");
  $("#schb").removeClass("selected");

  $("#homenavbox").empty();
  var topbar = $("<div></div>").addClass("htopbar");
  var tsearch = $("<input></input>").addClass("htopsearch").attr("placeholder", "Search Summoners");
  topbar.append(tsearch);
  $("#homenavbox").append(topbar);
}

var showfeature = function(){
  $("#feab").addClass("selected");
  $("#regb").removeClass("selected");
  $("#schb").removeClass("selected");

  $("#homenavbox").empty();
  var topbar = $("<div></div>").addClass("htopbar");
  var tsearch = $("<input></input>").addClass("htopsearch").attr("placeholder", "Search Summoners");
  topbar.append(tsearch);
  $("#homenavbox").append(topbar);

  var table = $('<table></table>').addClass('homestandings');
  var firstrow = $('<tr></tr>').addClass('toprow');;

  firstrow.append('<td>Rank</td>');
  firstrow.append('<td>Summoner Name</td>');
  firstrow.append('<td>Pledges</td>');
  table.append(firstrow);

  var sumdata = ["lol","faker","wildturtle", "madglory prime", "scarra", "doctor yang", "unblevable", "omniscience", "the odd one", "trick2g", "annie bot", "dyrus", "nightblue3"];

  for(i=1;i<11;i++){
    var row = $('<tr></tr>');
    var rank =$('<td>Rank</td>').text(i).addClass("frowd");
    row.append(rank);
    var sum=$('<td></td>').text(sumdata[i]).addClass("frowd");
    row.append(sum);

    var r = (11-i)*10;
    var pledge=$('<td>Pledges</td>').text("$"+r).addClass("frowd");

    var gdata = ["fff","fee","fdd","fcc","fbb","faa","f99","f88","f77","f66","f55", "f44"]
    var gradient = "#"+gdata[11-i];
    row.css("background-color", gradient);

    row.append(pledge);
    table.append(row);
  }

  $("#homenavbox").append(table);

}
*/

$(document).ready(function(){

	//document.setTimeout(function(){}, 1000);
  //showfeature();

	var donation = 19765;
	  $({someValue: 19000}).animate({someValue: donation}, {
      duration: 3000,
      easing:'linear', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#donationnumber').text(commaSeparateNumber(Math.round(this.someValue)));
      }
  });

 function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    val="$" + val;
    return val;
  }

})