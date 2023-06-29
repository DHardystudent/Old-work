var images=["Spring2023/Midterm/Relax.jpg", "Spring2023/Midterm/IslandAerial.jpg","Spring2023/Midterm/skierVT.jpg"], i = 0;

var imgState = 0;

var imgTag = document.getElementById("Mid");

imgTag.addEventListener("click", function (event) {
	imgState = (++imgState % 3);
	event.target.src = images[imgState];
});
