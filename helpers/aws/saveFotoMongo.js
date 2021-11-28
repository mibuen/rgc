import { mainUrl } from '../../components/init';
export async function saveFotoMongo(cotizacionId, proyectoId, tipo, seq, key) {
	//console.log(tipo, key);
	const data = { cotizacionId, proyectoId, tipo, seq, key };
	if (seq === '') delete data.seq;
	//console.log('DATA', data);
	const postOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	const res = await fetch(`${mainUrl}/agregarfoto`, postOptions);
	if (!res.ok) return res.json();
	return await res.json();
}
