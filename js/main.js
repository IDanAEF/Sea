import rooms from "./modules/rooms";
import sliderRooms from "./modules/sliderRooms";
import reviews from './modules/reviews';
import sliderReviews from "./modules/sliderReviews.js";
import modals from "./modules/modals.js";

window.addEventListener('DOMContentLoaded', () => {
	rooms();
	sliderRooms();
	reviews();
	sliderReviews();
	modals();
});