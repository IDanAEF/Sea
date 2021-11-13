import RoomsItem from './roomsItem';

function rooms() {
	const getData = async (url) => {
		const res = await fetch(url);

		if (!res.ok) {
            throw new Error(`Could not fetch ${url}, satus: ${res.status}`);
        }

        return await res.json();
	}

	getData('db.json')
	.then(res => {
		const {rooms} = res;

		rooms.forEach(({type, sides, promo, fitting, price}) => {
			new RoomsItem('.rooms__info', type, sides, promo, fitting, price).render();
		});
	});
}

export default rooms;