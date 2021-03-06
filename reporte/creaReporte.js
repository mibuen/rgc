import { htmlForma } from './htmlForma.js';
import { componentIndex } from '../components/components.index';
import { helpersIndex } from '../helpers/helpers.index.js';
const { getProyectosInCot, loaderFunc } = helpersIndex();

const { Content, Form } = componentIndex();
export function creaReporte() {
	const $form = Form(htmlForma);
	const generaPdf = $form.querySelector('#genera-pdf');

	generaPdf.addEventListener('click', async () => {
		loaderFunc();
		const cotizacionId = $form.cotizacionId.value;
		const proyectoId = $form.proyectoId.value;

		const proyectos = await getProyectosInCot(cotizacionId);

		const [proyecto] = proyectos.filter(
			(item) => item.proyectoId === parseInt(proyectoId, 10)
		);
		localStorage.setItem('proyecto', JSON.stringify(proyecto));
		loaderFunc();
		return window.open('/reporte/index.html', '_blank');
	});
	return Content($form);
}
