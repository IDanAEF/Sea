function modals() {
	const modals = document.querySelector('.modals'),
		  modalClose = document.querySelectorAll('.modal__close');

	modalClose.forEach(btn => {
		btn.addEventListener('click', () => {
			modals.classList.remove('active');
			btn.parentElement.classList.remove('active');
			document.body.style.overflow = "";
		});
	});

	function overClose(modal) {
		modals.addEventListener('click', (e) => {
			if (e.target == modals) {
				modals.classList.remove('active');
				modal.classList.remove('active');
				document.body.style.overflow = "";
			}
		});
	}

	function openModal(modal) {
		modals.classList.add('active');
		modal.classList.add('active');
		document.body.style.overflow = "hidden";
	}

	//reviews
	const btnReview = document.querySelector('.reviews__button'),
		  modalReview = document.querySelector('.modal__review');

	btnReview.addEventListener('click', () => {
		openModal(modalReview);
	});

	overClose(modalReview);

	//rooms
	const modalRoom = document.querySelector('.modal__room');

	window.addEventListener('click', (e) => {
		if (e.target.getAttribute("data-roombtn") == "") {
			openModal(modalRoom);
		}
	});

	overClose(modalRoom);
}

export default modals;