const bar = new Swiper(".beers", {
	initialSlide: 1,
	centeredSlides: true,
	grabCursor: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 500,
		modifier: 1,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	slidesPerView: 1,
	breakpoints: {
		460: {
			slidesPerView: 2,
		},
		720: {
			slidesPerView: 3,
		},
	},
});
