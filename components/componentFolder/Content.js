const $root = document.getElementById('root');
export function Content(html) {
	const $content = document.createElement('section');
	$content.id = 'content';
	$content.classList.add('pt-12', 'z-0');
	if (typeof html === 'object') {
		$content.appendChild(html);
	} else {
		$content.innerHTML = html;
	}
	return $root.appendChild($content);
}
