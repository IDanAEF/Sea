class ReviewsItem {
	constructor (parentSelector, text, name, date) {
		this.text = text;
		this.name = name;
		this.date = date;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const newItem = document.createElement('div');
		newItem.classList.add('reviews__slider-item');

		newItem.innerHTML = ` 
			<div class="text">${this.text}</div>
			<div class="reviews__slider-item-bott">${this.name}<span>${this.date}</span></div>
		`;

		this.parent.append(newItem);
	}
}

export default ReviewsItem;