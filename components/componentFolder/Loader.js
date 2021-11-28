export function Loader() {
	const $loader = document.createElement('div');
	$loader.id = 'loader';

	$loader.innerHTML = `<svg
	class="w-12 h-12 p-1 mx-auto mt-24 text-indigo-400 bg-indigo-700 border-2 border-indigo-400 rounded-full  animate-spin"
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
	/>
</svg>`;
	return $loader;
}
