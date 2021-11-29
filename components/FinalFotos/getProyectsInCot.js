import { mainUrl } from '../init';

export async function getProyectosInCot(e) {
	//e.preventDefault();
	const url = `${mainUrl}/proyectos/${e.target.value}`;
	const data = await fetch(url);
	const proyectos = await data.json();
	return proyectos;
}
