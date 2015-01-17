

$(document).ready(function(){

	//document.setTimeout(function(){}, 1000);

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