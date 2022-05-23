function scrollFunction() {
	const navbar = document.querySelector(".mobile-navbar");
	if (document.documentElement.scrollTop > 20) {
		navbar.style.top = "0";
	} else {
		navbar.style.top = "-90px";
	}
}

window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", scrollFunction);
var slideout = new Slideout({
	panel: document.getElementById("panel"),
	menu: document.getElementById("menu"),
	padding: 256,
	tolerance: 70,
	easing: "cubic-bezier(.32,2,.55,.27)",
	side: "right",
	onClose: () => {
		overlay.style.display = "none";
	},
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
});
