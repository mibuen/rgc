export function browse(inc, vistas, url) {
	let index = parseInt(localStorage.getItem('index'), 10);
	const $fotoInicial = document.querySelector('#foto-inicial');
	const $fotoFinal = document.querySelector('#foto-final');
	const $itemTitle = document.querySelector('#title-item');
	const max = vistas.length;
	//console.log('COUNT', inc);
	index = index + inc;
	if (index === max) index = 0;
	if (index === -1) index = max - 1;
	localStorage.setItem('index', index);
	//	console.log(index);
	const { item, inicio, final } = vistas[index];
	//console.log({ inicio, final });
	$itemTitle.innerHTML = `Item: ${item}`;
	$fotoInicial.src = `${url}/${inicio}`;
	$fotoFinal.src = final.includes('tbd') ? '/camera.png' : `${url}/${final}`;
	return;
}
