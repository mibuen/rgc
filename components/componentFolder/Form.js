export function Form(html) {
	const $form = document.createElement('form');
	$form.id = 'main-form';
	$form.classList.add('space-y-4', 'mx-2', 'mt-4');
	$form.innerHTML = html;
	return $form;
}
