import { findRoute } from './helpersFolder/findRoute';
import { formDataHandler } from './helpersFolder/formDataHandler';
import { ajax } from './helpersFolder/ajax';
import { toggleMenu } from './helpersFolder/toggleMenu';
import { hideToggle } from './helpersFolder/hideToggle';
import { menuActions } from './helpersFolder/menuActions';
import { statusChange } from './helpersFolder/statusChange';
import { duration } from './helpersFolder/duration';
import { saveProject } from './helpersFolder/saveProject';
import { modifyProject } from './helpersFolder/modifyProject';
import { proyectStatusChange } from './helpersFolder/proyectStatusChange';
import { closeDrawer } from './helpersFolder/closedrawer';
import { awsSignedPost } from './aws/awsSignedPost';
import { getData } from './helpersFolder/getData';
import { loaderFunc } from './helpersFolder/loaderFunc';
import { getProyectosInCot } from './helpersFolder/getProyectsInCot';
import { awsFileUploadHandler } from './aws/awsFileUploadHandler';

export function helpersIndex() {
	return {
		findRoute,
		formDataHandler,
		ajax,
		toggleMenu,
		hideToggle,
		menuActions,
		statusChange,
		duration,
		saveProject,
		modifyProject,
		proyectStatusChange,
		closeDrawer,
		awsSignedPost,
		getData,
		loaderFunc,
		getProyectosInCot,
		awsFileUploadHandler,
	};
}
