export async function awsForm(fields, file) {
	const awsForm = new FormData();
	Object.keys(fields).forEach((key) => awsForm.append(key, fields[key]));
	awsForm.append('Content-type', file.type);
	awsForm.append('file', file);
	return awsForm;
}
