import { htmlFotoFinal } from './htmlFormFotoFinal.js';
import { componentIndex } from '../components.index';

const { Content, Form, FotoGrid } = componentIndex();
import { getOptions } from './getOptions';

import { getProyectosInCot } from '../../helpers/helpersFolder/getProyectsInCot';
import { InitializeFotos } from './initializeFotos.js';
import { awsFileUploadHandler } from '../../helpers/aws/awsFileUploadHandler.js';

export function FotosFinales() {
	const $form = Form(htmlFotoFinal);
	const cotInp = $form.cotizacionId;
	const prjSel = $form.querySelector('#proyectoId');
	let rawData = [];
	$form.appendChild(FotoGrid());

	cotInp.addEventListener('input', async (e) => {
		$form.querySelector('#foto-grid').innerHTML = null;
		rawData = await getProyectosInCot(e.target.value);
		prjSel.innerHTML = getOptions(rawData);
	});
	prjSel.addEventListener('input', () => {
		const [proyecto] = rawData.filter(
			(item) => item.proyectoId === parseInt(prjSel.value, 10)
		);
		//console.log(proyecto);
		//const { vistas } = proyecto;
		//console.log(vistas);
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
					//get AWS signed post
					const seq = $form.querySelector('#title-item').innerText;
					const msg = await awsFileUploadHandler(
						parseInt(cotInp.value, 10),
						parseInt(prjSel.value, 10),
						'final',
						parseInt(seq, 10),
						foto
					);
					if (msg.modified === 1) location.reload();
				});
			}
		});
	});

	return Content($form);
}
