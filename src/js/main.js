const openMenuIcon = document.querySelector('.js-menuIcon');
const openMenuUse = document.querySelector('.js-menuIcon use');
const menu = document.querySelector('.js-menu');

openMenuIcon.addEventListener('click', () => {
	console.log('click');

	if (menu.classList.contains('h-0')) {
		menu.classList.add('pt-[36px]', 'pb-[36px]', 'h-auto');
		menu.classList.remove('h-0');
		openMenuUse.setAttribute(
			'xlink:href',
			'./assets/icons/sprite/symbol-defs.svg#icon-close'
		);
	} else {
		menu.classList.remove('pt-[36px]', 'pb-[36px]', 'h-auto');
		menu.classList.add('h-0');
		openMenuUse.setAttribute(
			'xlink:href',
			'./assets/icons/sprite/symbol-defs.svg#icon-menu'
		);
	}
});

// setActive attribute for customButton
const serviceBtn = document.querySelectorAll('.main__central custom-Buttons');
for (let btn of serviceBtn) {
	btn.addEventListener('click', () => {
		const currentAttribute = btn.getAttribute('isActive');
		console.log(currentAttribute);

		if (currentAttribute === 'false') {
			const text = btn.getAttribute('text');
			btn.setAttribute('isActive', 'true');

			// set attribut "isActive" as false for active btn
			serviceBtn.forEach(btn => {
				if (btn.getAttribute('text') !== text) {
					if (btn.getAttribute('isActive') === 'true') {
						btn.setAttribute('isActive', 'false');
					}
				}
			});
		} else return;
	});
}
