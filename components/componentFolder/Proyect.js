import { htmlProyectoCard } from '../../html/htmlProyectoCard';
export function Proyects(res) {
	const proyectCards = res.map((card) => {
		return htmlProyectoCard(card);
	});
	return proyectCards.join('');
}
