function sliderRooms() {
	const slider = document.querySelector('.rooms__info');

	function getElem(elem) {
		const right = elem;

		while(elem.nextElementSibling) {
			elem = elem.nextElementSibling;
		}

		right.after(elem);
	}

	slider.addEventListener('click', (e) => {
		if (e.target.getAttribute("data-right") == "") {
			e.target.parentElement.append(e.target.nextElementSibling);
		}

		if (e.target.getAttribute("data-left") == "") {
			getElem(e.target.nextElementSibling)
		}
	});
}

export default sliderRooms;