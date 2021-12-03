import { mainUrl } from '../../components/init';

export async function getProyectosInCot(cot) {
	//e.preventDefault();
	const url = `${mainUrl}/proyectos/${cot}`;
	const data = await fetch(url);
	const proyectos = await data.json();
	return proyectos;
}
