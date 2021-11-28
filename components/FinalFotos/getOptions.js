export function getOptions(data) {
	const proyectos = data
		.filter((proyecto) => 'vistas' in proyecto)
		.map(
			(proyecto) =>
				`<option value="${proyecto.proyectoId}">${proyecto.proyectoId}</option>`
		);
	// console.log(proyectos);
	return `<option value="...">....</option>${proyectos.join('')}`;
}
