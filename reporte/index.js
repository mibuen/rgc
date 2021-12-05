import '../tailwind.css';
import { htmlReporte } from './htmlReporte';
const page = document.querySelector('#pdf');
const reporte = async () => {
	const proyecto = JSON.parse(localStorage.getItem('proyecto'));

	//console.log(proyecto, typeof proyecto);
	page.innerHTML = await htmlReporte(proyecto);
};

reporte();
