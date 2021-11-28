import { componentIndex } from './components/components.index';
const { Loader, Header } = componentIndex();

import { Router } from './components/Router';

export async function App() {
	const $root = document.getElementById('root');
	$root.innerHTML = null;
	$root.appendChild(Header());
	$root.appendChild(Loader());
	return Router(window.location.hash);
}
