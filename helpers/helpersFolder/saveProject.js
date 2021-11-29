import { mainUrl } from '../../components/init';
export async function saveProject(cot, nprj) {
	const opts = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: '',
	};

	const resp = await fetch(`${mainUrl}/proyectos/${cot}`);
	const prjs = await resp.json();

	if (prjs.length > nprj) return;
	let start = !prjs.length ? 1 : prjs.length + 1;
	const results = [];
	for (start; start < nprj + 1; start++) {
		opts.body = JSON.stringify({ cotizacionId: cot, proyectoId: start });
		const res = await fetch(`${mainUrl}/proyecto`, opts);
		results.push(await res.json());
	}
	return console.log(results);
}
