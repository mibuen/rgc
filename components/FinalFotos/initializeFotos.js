import { browse } from './browse.js';
import { htmlGridFotos } from './htmlGridFotos.js';
const awsUrl = 'https://leonada-de-monterrey.s3.amazonaws.com';
export function InitializeFotos($form, proyecto) {
	const { vistas } = proyecto;
	const gridFotos = $form.querySelector('#foto-grid');
	gridFotos.innerHTML = htmlGridFotos();
	const btnNext = $form.querySelector('#btn-next');
	const btnPrevious = $form.querySelector('#btn-previous');
	const $sitio = $form.querySelector('#title-sitio');
	const $fotoInicial = $form.querySelector('#foto-inicial');
	const $fotoFinal = $form.querySelector('#foto-final');
	const $itemTitle = $form.querySelector(`#title-item`);
	$sitio.innerHTML = proyecto.sitio;
	$itemTitle.innerHTML = `${vistas[0].item}`;
	$fotoInicial.src = `${awsUrl}/${vistas[0].inicio}`;
	$fotoFinal.src = vistas[0].final.includes('tbd')
		? '../../assets/camera.png'
		: `${awsUrl}/${vistas[0].final}`;
	btnNext.addEventListener('click', () => browse(1, vistas, awsUrl));
	btnPrevious.addEventListener('click', () => browse(-1, vistas, awsUrl));
	return;
}
