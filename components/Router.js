import { componentIndex } from '../components/components.index';
import { helpersIndex } from '../helpers/helpers.index';
const { ErrorMsg, Content } = componentIndex();
const { findRoute, ajax } = helpersIndex();
import { mainUrl } from './init';

export async function Router(loc) {
	//console.log('LOC', loc);
	const [hash, dir, end] = loc.split('/');
	const x = !dir ? 'home' : dir;
	//console.log(x);
	const route = findRoute(x);
	//console.log('ROUTe', route);
	if (!route) {
		Content(ErrorMsg({ statusCode: 404, message: 'ruta no existe' }));
	}
	if (x !== 'home' && route.url !== '') {
		route.url = !end
			? encodeURI(`${mainUrl}/${route.terminacion}`)
			: encodeURI(`${mainUrl}/${route.terminacion}${end}`);
	}
	await ajax(route);

	return document.getElementById('loader').classList.toggle('hidden');
}
