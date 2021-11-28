export const CotizacionCard = async (res) => {
	const cards = res.map((data) => {
		return `<div class="px-4 bg-white border-2 border-indigo-300 rounded-lg">
		<div class="flex justify-between my-2 border-b border-indigo-200 py-3">
			<div class="transform hover:scale-125 w-auto px-4 py-1 text-sm text-indigo-700 bg-indigo-200 rounded">
				<a id="tocotizacion" data-cotid=${data.cotizacionId}
					href="#/form-quotte/${data.cotizacionId}">Cotizacion: ${data.cotizacionId}</a>
			</div>
			<div class="transform hover:scale-125 w-auto px-4 py-1 text-sm text-indigo-700 bg-indigo-200 rounded">
				<a href="#/listaproyectos/${data.cotizacionId}" >Sitios: ${data.sitios}</a>
			</div>
		</div>
		<div class="border-b border-indigo-200 pb-3">
		<p >Trabajo: <span>${data.trabajo}</span></p>
		</div>
	
			<div class="flex justify-between border-b-2 py-2 border-indigo-200">
				<p class="">Cliente: <span>${data.cliente}</span></p>
				<p class="">Contacto: <span>${data.contacto}</span></p>
			</div>
			<div class=" flex justify-between  py-2">
				<p class="">Cotizo: <span>${data.quien_cotiza}</span></p>
				<p class="">Status: <span>${data.status}</span></p>
			</div>
			<div class="flex justify-between py-2 border-t-2 border-indigo-100">
				<p class="">Emitida: <span>${new Intl.DateTimeFormat('en-US').format(
					new Date(data.emision)
				)}</span></p>
				<p class="">Monto$: <span>${data.monto}</span></p>
			</div>
			<div class="flex justify-between py-2 border-t-2 border-indigo-100 ">
			<p class="">Pedido: <span>${data.pedido}</span></p>
				<p class="">Fecha: <span>${
					data.resuelta
						? new Intl.DateTimeFormat('en-US').format(new Date(data.resuelta))
						: 'NA'
				}</span></p>
			</div>
	</div>
	`;
	});

	return cards.join('');
};
