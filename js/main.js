import rooms from "./modules/rooms";
import sliderRooms from "./modules/sliderRooms";
import reviews from './modules/reviews';
import sliderReviews from "./modules/sliderReviews.js";

window.addEventListener('DOMContentLoaded', () => {
	rooms();
	sliderRooms();
	reviews();
	sliderReviews();
});