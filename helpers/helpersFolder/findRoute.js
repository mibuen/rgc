import { init } from '../../components/init';

export const findRoute = (loc) => {
	const route = init.filter((item) => loc === item.page);
	return route[0];
};
