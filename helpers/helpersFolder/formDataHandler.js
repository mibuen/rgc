export const formDataHandler = (theForm, other) => {
	const objForm = {};

	const myForm = theForm;
	const formData = new FormData(myForm);
	if (formData) {
		for (const key of formData.keys()) {
			//console.log(key);
			objForm[key] = formData.get(key);
		}
	}
	const obj = { ...objForm, ...other };
	return JSON.stringify(obj);
};
