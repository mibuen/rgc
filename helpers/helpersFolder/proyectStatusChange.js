export function proyectStatusChange(event) {
	const ele = event.target.closest('select');
	if (!ele) {
		return null;
	}
	const formNumber = `[data-prjid="${ele.dataset.pr}"]`;
	const $form = document.querySelector(formNumber);
	switch (ele.value) {
		case 'espera':
			$form.querySelector('#inicio').classList.add('hidden');
			$form.querySelector('#terminado').classList.add('hidden');
			$form.querySelector('#factura').classList.add('hidden');
			break;
		case 'activo':
			$form.querySelector('#inicio').classList.remove('hidden');
			break;
		case 'terminado':
			$form.querySelector('#inicio').classList.remove('hidden');
			$form.querySelector('#terminado').classList.remove('hidden');
			$form.querySelector('#factura').classList.remove('hidden');
			break;
		case 'facturado':
			$form.querySelector('#inicio').classList.remove('hidden');
			$form.querySelector('#terminado').classList.remove('hidden');
			$form.querySelector('#factura').classList.remove('hidden');
			break;

		default:
			return;
			break;
	}
}
