export function FotoGrid() {
	const $grid = document.createElement('section');
	$grid.id = 'foto-grid';
	$grid.classList.add(
		'grid',
		'w-full',
		'grid-cols-2',
		'gap-4',
		'py-2',
		'text-center'
	);

	return $grid;
}
