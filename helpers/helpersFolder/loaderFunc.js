export function loaderFunc() {
	const $loader = document.querySelector('#loader');
	return $loader.classList.toggle('hidden');
}
