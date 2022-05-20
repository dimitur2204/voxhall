function scrollFunction() {
	const navbar = document.querySelector(".mobile-navbar");
	console.log(document.documentElement.scrollTop);
	if (document.documentElement.scrollTop > 20) {
		console.log("show");
		navbar.style.top = "0";
		navbar.style.position = "sticky";
	} else {
		console.log("hide");
		navbar.style.position = "fixed";
		navbar.style.top = "-50px";
	}
}

window.addEventListener("scroll", scrollFunction);
var slideout = new Slideout({
	panel: document.getElementById("panel"),
	menu: document.getElementById("menu"),
	padding: 256,
	tolerance: 70,
	easing: "cubic-bezier(.32,2,.55,.27)",
	side: "right",
});

const overlay = document.getElementById("overlay");
// Toggle button
document.querySelector("#nav-toggle").addEventListener("click", function () {
	slideout.toggle();
	const panel = document.getElementById("panel");
	if (slideout.isOpen()) {
		overlay.style.display = "block";
	}
});
document.querySelector("#nav-close").addEventListener("click", function () {
	slideout.close();
	overlay.style.display = "none";
});
