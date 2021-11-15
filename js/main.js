import rooms from "./modules/rooms";
import sliderRooms from "./modules/sliderRooms";
import reviews from './modules/reviews';
import sliderReviews from "./modules/sliderReviews";
import modals from "./modules/modals";
import postData from "./modules/postData";

window.addEventListener('DOMContentLoaded', () => {
	rooms();
	sliderRooms();
	reviews();
	sliderReviews();
	modals();
	postData();
});