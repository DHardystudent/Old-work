$(document).ready(function(){
		function left(){
			$("#bounce").animate({left: "+=100px"}, 2500, "swing", right)
		}
		function right() {
			$("#bounce").animate({left: "-=100px"}, 2500, "swing", left)
		}
		left();
});
