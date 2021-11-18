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
		for (let i = 0; i < count; i++) {
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

		if (document.documentElement.scrollWidth <= 575) {
			count = reviews.length;
		} else {
			count = Math.ceil(reviews.length / 2);
		}

		console.log(count);

		addDots();

		for (let node of dots.childNodes) {
			if (node.nodeName != "#text" && node.nodeName != "#comment") {
				elements.push(node);
			}
		}

		sliderUpdate.style.width = (count * 100) + "%";

		elements.forEach((item, i) => {
			item.addEventListener('click', () => {
				removeActive()
				item.classList.add('active');
				curr = i;
				translate = i * width;
				sliderUpdate.style.transform = `translateX(-${translate}px)`;
			});
		});

		rightSlide.addEventListener('click', () => {
			if (translate >= (count - 1) * width) {
				curr = 0;
				translate = 0;
			} else {
				curr++;
				translate = curr * width;
			}

			removeActive();
			elements[curr].classList.add('active');
			sliderUpdate.style.transform = `translateX(-${translate}px)`;
		});

		leftSlide.addEventListener('click', () => {
			if (translate <= 0) {
				curr = elements.length - 1;
				translate = (count - 1) * width;
			} else {
				curr--;
				translate = curr * width;
			}

			removeActive();
			elements[curr].classList.add('active');
			sliderUpdate.style.transform = `translateX(-${translate}px)`;
		});
	});
}

export default sliderReviews;