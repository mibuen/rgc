import { htmlForma } from './htmlForma';
import { htmlReporte } from './htmlReporte';
import { componentIndex } from '../components.index';

import { getProyectosInCot } from '../../helpers/helpersFolder/getProyectsInCot';
const { Content, Form } = componentIndex();
export function creaReporte() {
	const $form = Form(htmlForma);
	const generaPdf = $form.querySelector('#genera-pdf');

	generaPdf.addEventListener('click', async () => {
		const cotizacionId = $form.cotizacionId.value;
		const proyectoId = $form.proyectoId.value;

		const proyectos = await getProyectosInCot(cotizacionId);
		const [proyecto] = proyectos.filter(
			(item) => item.proyectoId === parseInt(proyectoId, 10)
		);
		const reporteHtml = await htmlReporte(proyecto);

		const thereport = window.open('', '_blank');
		thereport.document.write(`${reporteHtml}`);
	});
	return Content($form);
}
