

var viewing = false;

function main(){
  var toggle = false;
  $('.projects-button').on('click', function() {
	if(toggle){
		$(this).next().fadeIn(800);
		toggle = false;
	} else {
		$(this).next().fadeOut(800);
		toggle = true;
	}
  });
  
}
$(document).ready(main);