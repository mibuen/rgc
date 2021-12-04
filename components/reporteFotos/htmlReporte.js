export async function htmlReporte(data) {
	const awsUrl = 'https://leonada-de-monterrey.s3.amazonaws.com';

	const { cliente, trabajo, pedido } = data.proyectos_ready;
	const { vistas, sitio, factura } = data;

	const pictures = vistas.map((item) => {
		return `<figure class="object-none bg-blue-500 w-48">
      <figcaption>Condicion Inicial</figcaption>
      <img class="" src="${awsUrl}/${item.inicio}" alt="Ya Chingamos" />
    </figure>
    <figure class="object-none bg-red-500 w-48">
      <figcaption>Condicion Final</figcaption>
      <img class=""  src="${awsUrl}/${item.final}" alt="Ya Chingamos" />
    </figure>`;
	});
	const allPictures = pictures.join('');
	const reporte = `
  <link rel="stylesheet" href="tailwind.css" />
  <title>Reporte</title>
<section id="topdf">
  <header class="px-2 mx-2 space-y-1 bg-indigo-200 border-2 border-black">
    <div class="flex justify-between text-center">
      <h2>Logo RGC Ingenieria</h2>
      <p>Direccion y tel rgc</p>
    </div>

    <div class="flex justify-between">
      <h4>Cliente: ${cliente}</h4>
      <h4>Sitio:${sitio}</h4>
      <h4>Trabajo:${trabajo}</h4>
    </div>
    <div class="flex justify-between pb-2 text-sm">
      <h4>Pedido: ${pedido}</h4>
      <h4>Factura:${factura}</h4>
    </div>
  </header>
  <section class="grid grid-cols-2 place-items-center gap-2 m-2 text-center">
    ${allPictures}
  </section>
</section>`;
	return reporte;
}
