import { helpersIndex } from '../../helpers/helpers.index';
const { formDataHandler, modifyProject, proyectStatusChange } = helpersIndex();
import { componentIndex } from '../components.index';
const { Grid, Proyects } = componentIndex();

export function FormGridProyects(data) {
	const $grid = Grid(Proyects(data));
	$grid.addEventListener('submit', async (e) => {
		e.preventDefault();
		const $form = e.target;
		const btns = $form.querySelectorAll('button');
		btns.forEach((btn) => {
			btn.classList.remove('sm:block');
			btn.classList.add('hidden');
		});
		$form.querySelector('#alert-saved').classList.remove('hidden');
		const jsonData = formDataHandler(e.target);
		const savePrj = await modifyProject(jsonData);
		return savePrj;
	});
	$grid.addEventListener('change', proyectStatusChange);
	return $grid;
}
