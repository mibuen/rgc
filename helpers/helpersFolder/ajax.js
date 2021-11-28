import { componentIndex } from '../../components/components.index';
const { ErrorMsg, Content } = componentIndex();

export async function ajax(props) {
	//console.log(props);
	if (!props)
		return Content(
			ErrorMsg({
				url: 'URL invalido',
				status: '404',
				statusText: 'url no se encuentra',
			})
		);
	const { url, options, cbSuccess } = props;

	if (url === '') return cbSuccess();
	const res = await fetch(url, options);
	if (res.ok) {
		return cbSuccess(await res.json());
	} else {
		return Content(ErrorMsg(await res.json()));
	}
}
