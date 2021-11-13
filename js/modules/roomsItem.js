class RoomsItem {
	constructor(parentSelector, type, sides, promo, fitting, price) {
		this.parent = document.querySelector(parentSelector);
		this.type = type;
		this.sides = sides;
		this.promo = promo;
		this.fitting = fitting;
		this.price = price;
	}

	addDevices() {
		let newDevice = "";

		this.fitting.forEach(({alt, img, gray}) => {
			newDevice += `
				<div class="rooms__item-device">
					<div class="rooms__item-device-img${gray}"><img src=${img} alt=${alt}></div>
					<div class="rooms__item-device-info">${alt}</div>
				</div>\n
			`;
		});

		return newDevice;
	}

	render() {
		const newItem = document.createElement('div');
		newItem.classList.add('rooms__item');

		const {May, June, Jule, August, September} = this.price;

		let promoImg = "";

		this.promo.forEach(item => {
			promoImg += `
				<img data-img class="promoImg" src=${item} alt=${this.type}>\n
			`;
		});

		if (this.promo.length > 1) {
			promoImg = '<img data-left class="left" src="icons/left.png" alt="Влево">\n<img data-right class="right" src="icons/right.png" alt="Вправо">\n' + promoImg;
		}

		newItem.innerHTML = `
			<div class="rooms__item-img">
				<div class="rooms__item-head">
					<div class="title title_fz18 title_caseunset">${this.type}</div>
					<div class="sides">${this.sides}</div>
				</div>
				${promoImg}
			</div>
			<div class="rooms__item-info">
				<div class="rooms__item-equipment">
					<div class="rooms__item-equipment-title title title_fz18 title_caseunset">Оснащение номера:</div>
					<div class="rooms__item-fitting">
						${this.addDevices()}
					</div>
				</div>
				<div class="rooms__item-price">
					<div class="rooms__item-price-title title title_fz18 title_caseunset">Цена за человека:</div>
					<div class="rooms__item-price-undertitle">(цена варьируется от даты заезда)</div>
					<table cellspacing="0">
						<tr class="month">
							<td>Май</td>
							<td>Июнь</td>
							<td>Июль</td>
							<td>Август</td>
							<td>Сентябрь</td>
						</tr>
						<tr class="price">
							<td>${May}</td>
							<td>${June}</td>
							<td>${Jule}</td>
							<td>${August}</td>
							<td>${September}</td>
						</tr>
					</table>
				</div>
				<button class="rooms__item-button button">
					забронировать номер
				</button>
			</div>
		`;

		this.parent.append(newItem);
	}
}

export default RoomsItem;