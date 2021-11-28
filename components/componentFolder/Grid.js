export function Grid(html) {
	const $grid = document.createElement('section');
	$grid.classList.add(
		'grid',
		'grid-cols-auto',
		'gap-2',
		'w-full',
		'md:grid-cols-2',
		'lg:grid-cols-3',
		'px-2'
	);
	$grid.id = 'grid';
	$grid.innerHTML = html;
	return $grid;
}
