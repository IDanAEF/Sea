function postData() {
	const forms = document.querySelectorAll("form"),
		  message = {
		  	success: "Отправлено успешно!",
		  	failed: "Что-то пошло не так...",
		  	loading: "Загрузка..."
		  },
		  modals = document.querySelector('.modals');

	forms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMassage = document.createElement('div'),
				  statusLoading = document.createElement('div');
			statusLoading.textContent = message.loading;
			statusMassage.classList.add('modal', 'modal_message', 'active');
			e.target.append(statusLoading);

			const formData = new FormData(form);

			const object = {};
			formData.forEach((value, key) => {
				object[key] = value;
			});

			fetch("server.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(object)
			})
			.then(() => {
				statusMassage.textContent = message.success;
				modals.append(statusMassage);
			})
			.catch(() => {
				statusMassage.textContent = message.failed;
				modals.append(statusMassage);
			})
			.finally(() => {
				statusLoading.remove();
				form.reset();
				form.parentElement.classList.remove('active');
				setTimeout(() => {
					form.parentElement.classList.add('active');
					statusMassage.remove();
				}, 3000)
			});
		});
	});
}

export default postData;