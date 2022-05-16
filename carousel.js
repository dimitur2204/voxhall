const homepageCarousel = new Swiper(".concerts", {
	slidesPerView: 4,
	initialSlide: 3,
	spaceBetween: 30,
	centeredSlides: true,
	grabCursor: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 500,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
