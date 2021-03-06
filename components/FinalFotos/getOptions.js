export function getOptions(data) {
	if (!data) return;
	const proyectos = data
		.filter((proyecto) => 'vistas' in proyecto)
		.map(
			(proyecto) =>
				`<option value="${proyecto.proyectoId}">${proyecto.proyectoId}</option>`
		);
	return `<option value="...">....</option>${proyectos.join('')}`;
}
