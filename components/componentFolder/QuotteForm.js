import { mainUrl } from '../init';
import { htmlFormQuotte } from '../../html/htmlFormQuotte';
import { helpersIndex } from '../../helpers/helpers.index';
import { componentIndex } from '../components.index';

const {
	findRoute,
	formDataHandler,
	statusChange,
	duration,
	ajax,
	saveProject,
} = helpersIndex();

const { DivQuotteForm, Form, QuotteTitle } = componentIndex();

export function QuotteForm(x = 'Nueva') {
	const $divForQuotte = DivQuotteForm();
	const cotid = x === 'Nueva' ? x : x.cotizacionId;

	const $title = QuotteTitle(cotid);

	const $quotteForm = Form(htmlFormQuotte(x));
	$divForQuotte.append($title, $quotteForm);
	const hash = x === 'Nueva' ? 'cotizacion-nueva' : 'modifica-cotizacion';
	const props = findRoute(hash);
	if (cotid !== 'Nueva') props.url = `${mainUrl}/modifica-cotizacion/${cotid}`;

	const btnSave = $quotteForm.querySelector('#save');

	btnSave.addEventListener('click', async (e) => {
		e.preventDefault();
		props.options.body = formDataHandler($quotteForm);
		$divForQuotte.appendChild(await ajax(props));
		$divForQuotte.removeChild($title);
		$divForQuotte.removeChild($quotteForm);

		if ($quotteForm.status.value === 'ganada') {
			await saveProject(cotid, parseInt($quotteForm.sitios.value));
			location.hash = `/listaproyectos/${cotid}`;
		} else {
			duration(location.reload(), 2000);
		}
	});
	const status = $quotteForm.querySelector('#status');
	status.addEventListener('change', () => statusChange(status.value));
	$quotteForm
		.querySelector('#cancel')
		.addEventListener('click', () => statusChange(status.value));

	return $divForQuotte;
}
