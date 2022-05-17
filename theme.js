// Get the root element
const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);
const themeSwitch = document.getElementById("theme-switch");
let theme = "dark";
const dark = {
	"--body-color": "var(--primary-white)",
	"--body-text": "var(--primary-black)",
};
const light = {
	"--body-color": "var(--primary-black)",
	"--body-text": "var(--primary-white)",
};

function setVariable(variable, value) {
	root.style.setProperty(variable, value);
}

themeSwitch.addEventListener("click", () => {
	if (theme === "dark") {
		theme = "light";
		Object.keys(light).map((variable) => {
			setVariable(variable, light[variable]);
		});
		return;
	}
	theme = "dark";
	Object.keys(dark).map((variable) => {
		setVariable(variable, dark[variable]);
	});
});
