const openMenuIcon = document.querySelector('.js-menuIcon');
const openMenuUse = document.querySelector('.js-menuIcon use');
const menu = document.querySelector('.js-menu');

openMenuIcon.addEventListener('click', () => {
	console.log('click');

	if (menu.classList.contains('h-0')) {
		menu.classList.add('pt-[36px]', 'pb-[36px]', 'h-auto');
		menu.classList.remove('h-0');
		openMenuUse.setAttribute('xlink:href', '#icon-close');
	} else {
		menu.classList.remove('pt-[36px]', 'pb-[36px]', 'h-auto');
		menu.classList.add('h-0');
		openMenuUse.setAttribute('xlink:href', '#icon-menu');
	}
});
