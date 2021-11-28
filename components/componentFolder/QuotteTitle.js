export function QuotteTitle(text) {
	const $quotteTitle = document.createElement('h4');
	$quotteTitle.classList.add('my-4', 'text-2xl', 'text-center');
	$quotteTitle.innerText = `Cotizacion ${text}`;
	return $quotteTitle;
}
