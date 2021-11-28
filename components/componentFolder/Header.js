import { helpersIndex } from '../../helpers/helpers.index';
const { menuActions, closeDrawer } = helpersIndex();
import { LogoAndButton } from './LogoAndButton';
import { NavLinks } from './NavLinks';

export function Header() {
	const $header = document.createElement('header');
	$header.classList.add(
		'text-indigo-100',
		'bg-indigo-700',
		'fixed',
		'inset-x-0',
		'top-0',
		'mx-1',
		'z-10'
	);
	$header.appendChild(LogoAndButton());
	$header.appendChild(NavLinks());
	menuActions($header);
	closeDrawer();
	return $header;
}
