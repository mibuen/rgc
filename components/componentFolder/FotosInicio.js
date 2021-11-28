import { componentIndex } from '../components.index';
import { htmlSubirForm } from '../../html/htmlSubirForm';
import { awsFileUploadHandler } from '../../helpers/aws/awsFileUploadHandler';
const { Form, Content, DivQuotteForm } = componentIndex();

export function FotosInicio() {
	console.log('FOT');
	const div = DivQuotteForm();
	const $formSubir = Form(htmlSubirForm);
	div.appendChild($formSubir);
	const subirBtn = $formSubir.querySelector('#subir');
	const tomar = $formSubir.querySelector('#tomar');
	const msgField = $formSubir.querySelector('#foto-name');
	tomar.addEventListener('change', async (e) => {
		const { name } = e.target.files[0];
		msgField.textContent = name;
	});
	subirBtn.addEventListener('click', async (e) => {
		e.preventDefault();
		const cotizacionId = $formSubir.cotizacionId.value;
		const proyectoId = $formSubir.proyectoId.value;
		const fotoFile = tomar.files[0];
		const tipo = 'inicio';
		const seq = 'NA';
		const result = await awsFileUploadHandler(
			cotizacionId,
			proyectoId,
			tipo,
			seq,
			fotoFile
		);
		if (result.modified === 1) {
			msgField.classList.add('bg-green-300', 'rounded');
			msgField.textContent = `${result.message}`;
		} else {
			msgField.classList.add('bg-red-300', 'rounded');
			msgField.textContent = `error: ${result}`;
		}
	});

	return Content(div);
}
