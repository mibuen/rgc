import { helpersIndex } from '../helpers.index';
const { toggleMenu, hideToggle } = helpersIndex();

export function menuActions(component) {
	const main = document.querySelector('#root');
	const btn = component.querySelector('#btnMenu');
	const nav = component.querySelector('nav');

	main.addEventListener(
		'click',
		(e) => {
			if (
				!nav.classList.contains('hidden') ||
				(e.target.closest('#btnMenu') && !e.target.closest('a'))
			) {
				hideToggle(nav);
				toggleMenu(btn);
			}
		},
		true
	);
	return;
}
