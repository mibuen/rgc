import { logoGear } from '../../assets/logoGear';
import { btnMenu } from '../../assets/btnMenu';
export const LogoAndButton = () => {
	const $logo = `${logoGear}	<span>RGC Ingenieria</span>`;

	const $btnHamburger = `<button id="btnMenu" type="button" class="block rounded hover:text-indigo-700 hover:bg-indigo-200 focus:outline-none">${btnMenu}</button>`;

	const $logoAndButton = document.createElement('div');
	$logoAndButton.classList.add(
		'flex',
		'items-center',
		'justify-between',
		'px-4',
		'py-1'
	);
	$logoAndButton.innerHTML = `${$btnHamburger}<div class="flex items-center space-x-1">${$logo}</div>`;
	return $logoAndButton;
};
