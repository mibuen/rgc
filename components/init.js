import { componentIndex } from '../components/components.index';

const {
	AlertSuccess,
	CotizacionCard,
	QuotteForm,
	Grid,
	Content,
	FormGridProyects,
	FotosInicio,
	FotosFinales,
} = componentIndex();
//export const mainUrl = 'http://0.0.0.0:7001';
export const mainUrl = `https://rgcingenieria.herokuapp.com`;
export const init = [
	{
		page: 'home' || '' || '#/',
		url: '',
		options: {},
		cbSuccess: () => {
			Content(
				`<h1 class="text-4xl text-indigo-500 text-center">This is Home</h1>`
			);
		},
	},
	{
		coments: 'render grid con cotizaciones',
		page: 'cotizaciones',
		url: `${mainUrl}`,
		terminacion: 'cotizaciones/',
		options: {},
		cbSuccess: async (res) => {
			//console.log(res);
			Content(Grid(await CotizacionCard(res)));
		},
	},
	{
		coments: 'render grid con proyectos',
		page: 'listaproyectos',
		url: `${mainUrl}`,
		terminacion: 'proyectos/',
		options: {},
		cbSuccess: async (res) => {
			Content(FormGridProyects(res));
		},
	},
	{
		coments: 'render forma cotizacion nueva o para actualizar',
		page: 'form-quotte',
		url: `${mainUrl}`,
		terminacion: 'cotizaciones/',
		options: {},
		cbSuccess: (res) => {
			//console.log('RES', res);
			return res.length === 1
				? Content(QuotteForm(res[0]))
				: Content(QuotteForm());
		},
	},
	{
		coments: 'save cotizacion nueva en mongo',
		page: 'cotizacion-nueva',
		url: `${mainUrl}/cotizacion-nueva`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		},
		cbSuccess: (res) => {
			return Content(AlertSuccess(`Cotizacion # ${res.cotizacionId} agregada`));
		},
	},
	{
		comments: 'actualiza cotizacion',
		page: 'modifica-cotizacion',
		url: `${mainUrl}/modifica-cotizacion/`,
		options: {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		},
		cbSuccess: (res) => {
			return Content(
				AlertSuccess(
					`${
						res.modifiedCount > 0
							? `la cotizacion ${res.cotizacionId} se actualizo`
							: ''
					}`
				)
			);
		},
	},
	{
		comments: 'post new proyect in to mongo',
		page: 'proyecto',
		url: `${mainUrl}`,
		terminacion: '/proyecto',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: '',
		},
		cbSuccess: (res) => {
			return Content(AlertSuccess(res));
		},
	},
	{
		comments: 'render form SUBIR FOTOS INICIO',
		page: 'subir',
		url: '',
		terminacion: 'subir',
		options: {},
		cbSuccess: () => {
			//return console.log('YA Chingamos');
			return FotosInicio();
		},
	},
	{
		comments: 'render form SUBIR FOTOS INICIO',
		page: 'finales',
		url: '',
		terminacion: 'finales',
		options: {},
		cbSuccess: () => {
			//console.log('QUE PASARA');
			return FotosFinales();
		},
	},
];
