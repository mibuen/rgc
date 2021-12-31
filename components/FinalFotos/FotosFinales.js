import { htmlFotoFinal } from './htmlFormFotoFinal.js';
import { componentIndex } from '../components.index';
import { helpersIndex } from '../../helpers/helpers.index.js';
import { getOptions } from './getOptions';
import { InitializeFotos } from './initializeFotos.js';

const { Content, Form, FotoGrid, ErrorMsg } = componentIndex();
const { getProyectosInCot, loaderFunc, awsFileUploadHandler } = helpersIndex();

export function FotosFinales() {
	const $form = Form(htmlFotoFinal);
	const cotInp = $form.cotizacionId;
	const prjSel = $form.querySelector('#proyectoId');
	let rawData = [];
	$form.appendChild(FotoGrid());

	cotInp.addEventListener('input', async (e) => {
		$form.querySelector('#foto-grid').innerHTML = null;
		prjSel.innerHTML = null;
		const err = document.querySelector('#err-msg');
		if (err) err.remove();
		if (e.target.value === '') return;
		rawData = await getProyectosInCot(e.target.value);
		if (rawData.statusCode > 400) return Content(ErrorMsg(rawData));
		prjSel.innerHTML = getOptions(rawData);
	});
	prjSel.addEventListener('input', () => {
		const [proyecto] = rawData.filter(
			(item) => item.proyectoId === parseInt(prjSel.value, 10)
		);
		localStorage.setItem('index', 0);
		InitializeFotos($form, proyecto);

		// load final fotos
		const final = $form.querySelector('#final');
		final.addEventListener('change', (e) => {
			const foto = e.target.files[0];
			if (foto) {
				const reader = new FileReader();
				reader.readAsDataURL(foto);
				reader.addEventListener('load', (event) => {
					$form.querySelector('#foto-final').src = event.target.result;
				});
				const uploadBtn = $form.querySelector('#upload');
				uploadBtn.addEventListener('click', async () => {
					const seq = $form
						.querySelector('#title-item')
						.innerText.split(':')[1];
					loaderFunc();
					const msg = await awsFileUploadHandler(
						parseInt(cotInp.value, 10),
						parseInt(prjSel.value, 10),
						'final',
						parseInt(seq, 10),
						foto
					);
					if (msg.modified === 1) {
						loaderFunc();
						location.reload();
					}
				});
			}
		});
	});

	return Content($form);
}
