import ReviewsItem from './reviewsItem.js';

function reviews() {
	const getData = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getData('db.json')
	.then(res => {
		const {reviews} = res;

		reviews.forEach(({text, name, date}) => {
			new ReviewsItem(".reviews__slider-items", text, name, date).render();
		});
	});
}

export default reviews;