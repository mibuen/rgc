import { mainUrl } from '../../components/init';

export async function getProyectosInCot(cot) {
	if (isNaN(cot) || cot === '') return;
	const data = await fetch(`${mainUrl}/proyectos/${cot}`);
	return await data.json();
}
