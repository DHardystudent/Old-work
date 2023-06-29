$(document).ready(function(){
	$("#toggle").click(function(){
		$("table").toggle();
	});
});

$(document).ready(function(){
  $("#b1").click(function(){
    $("#p1").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $("#b2").click(function(){
    $("#p2").fadeToggle("slow");
  });
});

$(document).ready(function(){
  $("#b3").click(function(){
    $("#p3").fadeToggle("slow");
  });
});

function pic1() {
	var src = "image/games/dragonage.jpeg";
	show_image("image/games/dragonage.jpeg", 150, 150, "Dragon Age Box Art");
}

function pic2() {
	var src = "image/games/ff14.jpg";
	show_image("image/games/ff14.jpg", 150, 150, "Final Fantasy XIV Box Art");
	
}

function pic3() {
	var src = "image/games/deeprock.jpg";
	show_image("image/games/deeprock.jpg", 150, 150, "Deep Rock Box Art");
}

function pic4() {
	var src = "image/games/minecraft.jpg";
	show_image("image/games/minecraft.jpg", 150, 150, "Minecraft Box Art");
}

function pic5() {
	var src = "image/games/projectzomb.jpg";
	show_image("image/games/projectzomb.jpg", 150, 150, "Project Zomboid Box Art");
}

function show_image(src, width, height, alt) {
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
	var place = document.getElementById("placeholder");
	if (place.hasChildNodes()) {
		place.removeChild(place.firstChild);
	}
	place.appendChild(img);
}

