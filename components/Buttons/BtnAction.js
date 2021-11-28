export function BtnAction(params) {
	const $btnAction = document.createElement('button');
	$btnAction.type = params.type;
	$btnAction.innerHTML = params.text;
	$btnAction.classList.add(
		'w-10',
		'h-10',
		'text-center',
		'rounded-full',
		'bg-indigo-700',
		'm-2'
	);
	$btnAction.addEventListener('click', (e) => {
		localStorage.removeItem('count');
		console.log('INC', params.inc);
		localStorage.setItem('count', params.inc);
	});
	return $btnAction;
}
