import { mainUrl } from '../../components/init';

export async function awsSignedPost(cotizacionId, proyectoId, key) {
	const data = { cotizacionId, proyectoId, key };
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	try {
		const res = await fetch(`${mainUrl}/gets3post`, options);
		if (!res.ok) {
			const { message } = await res.json();
			throw `${message}`;
		}
		return res.json();
	} catch (error) {
		throw error;
	}
}
