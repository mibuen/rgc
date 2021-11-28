export function statusChange(change) {
	const $quotteForm = document.querySelector('form');
	switch (change) {
		case 'presentada':
			$quotteForm.querySelector('#emitida').classList.remove('hidden');
			$quotteForm.querySelector('#resuelta').classList.add('hidden');
			break;
		case 'ganada':
			$quotteForm.querySelector('#emitida').classList.remove('hidden');
			$quotteForm.querySelector('#resuelta').classList.remove('hidden');
			break;
		case 'perdida':
			$quotteForm.querySelector('#emitida').classList.remove('hidden');
			$quotteForm.querySelector('#resuelta').classList.remove('hidden');
			break;
		case 'cancelada':
			$quotteForm.querySelector('#emitida').classList.remove('hidden');
			$quotteForm.querySelector('#resuelta').classList.remove('hidden');
			break;
		default:
			$quotteForm.querySelector('#emitida').classList.add('hidden');
			$quotteForm.querySelector('#resuelta').classList.add('hidden');
			break;
	}
	return;
}
