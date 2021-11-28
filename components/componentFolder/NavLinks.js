export const NavLinks = () => {
	const $nav = document.createElement('nav');
	$nav.id = 'drawer';
	$nav.classList.add('hidden', 'px-2', 'pt-2', 'pb-4', 'space-y-2');
	$nav.innerHTML = `<a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#/form-quotte"
  >Cotizacion Nueva</a
>
<a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#/cotizaciones"
  >Listado Cotizaciones</a
>
<a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#/subir"
  >Fotos Iniciales</a
>
<a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#/finales"
  >Fotos Finales</a
>

<a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#"
  >Reporte Proyecto</a
>`;
	return $nav;
};

{
	/* <a
  class="block px-2 py-1 font-semibold text-indigo-100 rounded hover:bg-indigo-900 w-48"
  href="#/listaproyectos"
  >Listado de Proyectos</a
> */
}
