import { AlertSuccess } from './componentFolder/AlertSucces';
import { CotizacionCard } from './componentFolder/CotizacionCard';
import { QuotteForm } from './componentFolder/QuotteForm';
import { Loader } from './componentFolder/Loader';
import { Header } from './componentFolder/Header';
import { DivQuotteForm } from './componentFolder/DivQuotteForm';
import { QuotteTitle } from './componentFolder/QuotteTitle';
import { ErrorMsg } from './componentFolder/ErrorMsg';
import { Grid } from './componentFolder/Grid';
import { Content } from './componentFolder/Content';
import { Form } from './componentFolder/Form';
import { Proyects } from './componentFolder/Proyect';
import { FormGridProyects } from './componentFolder/FormGridProyects';
import { FotosInicio } from './componentFolder/FotosInicio';
import { FotosFinales } from './FinalFotos/FotosFinales';
import { FotoGrid } from './FinalFotos/FotoGrid';

export function componentIndex() {
	return {
		AlertSuccess,
		CotizacionCard,
		QuotteForm,
		Loader,
		Header,
		DivQuotteForm,
		QuotteTitle,
		ErrorMsg,
		Grid,
		Content,
		Form,
		Proyects,
		FormGridProyects,
		FotosInicio,
		FotosFinales,
		FotoGrid,
	};
}
