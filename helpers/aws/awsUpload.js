export async function awsUpload(url, data) {
	//console.log(url, data);
	const options = {
		method: 'POST',
		body: data,
	};
	try {
		const upload = await fetch(url, options);
		//console.log(upload);
		return upload;
	} catch (error) {
		return await error.json();
	}
}
