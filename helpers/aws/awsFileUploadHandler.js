import { awsForm } from './awsForm';
import { awsSignedPost } from './awsSignedPost';
import { awsUpload } from './awsUpload';
import { saveFotoMongo } from './saveFotoMongo';
import { Loader } from '../../components/componentFolder/Loader';
export async function awsFileUploadHandler(
	cotizacionId,
	proyectoId,
	tipo,
	seq,
	file
) {
	try {
		//get signed post
		const $loader = document.querySelector('#loader');
		$loader.classList.toggle('hidden');
		const signedPost = await awsSignedPost(cotizacionId, proyectoId, file.name);

		const { url, fields } = signedPost;
		//	console.log(url, fields);

		const data = await awsForm(fields, file);

		const fotoInAws = await awsUpload(url, data);
		if (fotoInAws.ok) {
			const addToMongo = await saveFotoMongo(
				cotizacionId,
				proyectoId,
				tipo,
				seq,
				fields.key
			);
			$loader.classList.toggle('hidden');
			return addToMongo;
		}
	} catch (error) {
		console.log(error);
		return error;
	}
}
