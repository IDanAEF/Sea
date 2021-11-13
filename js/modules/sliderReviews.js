function sliderReviews() {
	const sliderUpdate = document.querySelector('.reviews__slider-items'),
		  rightSlide = document.querySelector('.reviews__slider-right'),
		  leftSlide = document.querySelector('.reviews__slider-left'),
		  sliderLine = document.querySelector('.reviews__slider-line'),
		  width = +window.getComputedStyle(sliderLine).width.replace(/\D/g, ""),
		  dots = document.querySelector('.reviews__dots');

	let translate = 0,
		curr = 0,
		elements = [],
		count = 0;

	function addDots() {
		for (let i = 0; i < Math.ceil(count / 2); i++) {
			if (i == 0) {
				dots.innerHTML += `
					<div class="reviews__dots-dot active"></div>
				`;
				continue;
			}
			dots.innerHTML += `
				<div class="reviews__dots-dot"></div>
			`;
		}
	}

	function removeActive() {
		elements.forEach(item => item.classList.remove('active'));
	}

	const getData = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
            throw new Error(`Could not fetch ${url}, satus: ${res.status}`);
        }

        return await res.json();
	}

	getData('db.json')
	.then(res => {
		const {reviews} = res;

		count = reviews.length;

		addDots();

		for (let node of dots.childNodes) {
			if (node.nodeName != "#text" && node.nodeName != "#comment") {
				elements.push(node);
			}
		}

		sliderUpdate.style.width = (Math.ceil(count / 2) * 100) + "%";

		elements.forEach((item, i) => {
			item.addEventListener('click', () => {
				removeActive()
				item.classList.add('active');
				translate = i * width;
				sliderUpdate.style.transform = `translateX(-${translate}px)`;
			});
		});

		rightSlide.addEventListener('click', () => {
			if (translate >= (Math.ceil(count / 2) - 1) * width) {
				curr = 0;
				translate = 0;
			} else {
				curr++;
				translate += width;
			}

			removeActive();
			elements[curr].classList.add('active');
			sliderUpdate.style.transform = `translateX(-${translate}px)`;
		});

		leftSlide.addEventListener('click', () => {
			if (translate <= 0) {
				curr = elements.length - 1;
				translate = (Math.ceil(count / 2) - 1) * width;
			} else {
				curr--;
				translate -= width;
			}

			removeActive();
			elements[curr].classList.add('active');
			sliderUpdate.style.transform = `translateX(-${translate}px)`;
		});
	});
}

export default sliderReviews;