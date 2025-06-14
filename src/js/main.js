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

// toggle for button
const serviceBtn = document.querySelectorAll('.main__central button');
for (let btn of serviceBtn) {
	btn.addEventListener('click', () => {
		serviceBtn.forEach(userBtn => {
			if (userBtn === btn) {
				btn.classList.remove('js-btnNoActive');
				btn.classList.add('js-btnActive');
			} else {
				userBtn.classList.remove('js-btnActive');
				userBtn.classList.add('js-btnNoActive');
			}
		});
	});
}
