const url = `http://0.0.0.0:7001/modificar`;
export async function modifyProject(data) {
	const opts = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: data,
	};
	const res = await fetch(url, opts);
	return await res.json();
}
