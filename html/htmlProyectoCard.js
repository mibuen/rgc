import { Good } from '../assets/good';
import { Cancel } from '../assets/Cancel';
export const htmlProyectoCard = (data) => {
	const {
		sitio,
		supervisor,
		direccion,
		inicio,
		status,
		terminado,
		factura,
		cotizacionId,
		proyectoId,
	} = data;
	const { cliente, trabajo } = data.proyectos_ready;
	return `<section class="w-full p-4 mt-4 border-2 border-indigo-300 rounded-lg">
	<header class="border-b border-indigo-300 lab">
		<div class="sm:space-x-2 sm:flex sm:justify-between">
			<div class="sm:w-1/3">
				<h4>Cotizacion</h4>
				<a id="cotId" class="block titblock" href="/#">${cotizacionId}</a>
			</div>
			<div class="sm:w-1/3">
			<h4>Proyecto :</h4>
			<p id="prjId" class="titblock">${proyectoId}</p>
		</div>
			<div class="sm:w-1/3">
				<h4>Cliente:</h4>
				<p class="titblock">${cliente}</p>
			</div>
		</div>
		<div class="my-2">
			<h4>Trabajo:</h4>
			<p class="pl-2 text-left titblock">${trabajo}</p>
		</div>
	</header>
	<form data-prjid="${proyectoId}"class="mt-2 lab">
		<input class="hidden" type="text" name="cotizacionId" value=${cotizacionId} readonly> </>
		<input class="hidden" type="text" name="proyectoId" value="${proyectoId}"readonly></>
		<div class="space-x-2 sm:justify-between sm: sm:flex">
			<div class="sm:w-1/2">
				<label for="sitio">Sitio</label>
				<input type="text" name="sitio" value="${sitio || ''}"/>
			</div>
			<div class="sm:w-1/2">
				<label for="supervisor">Supervisor</label>
				<input type="text" name="supervisor" value="${supervisor || ''}" />
			</div>
		</div>

		<div>
			<label for="direccion">Direccion</label>
			<input type="text" name="direccion" value="${direccion || ''}"/>
		</div>
		<div class="sm:justify-between sm:space-x-2  sm:flex">
			<div class="sm:w-1/2">
				<label class="lab" for="status">Status</label>
				<select data-pr="${proyectoId}" type="text" name="status">
					<option value="espera" ${
						status === 'espera' ? 'selected' : ''
					}>Esperando</option>
					<option value="activo" ${status === 'activo' ? 'selected' : ''}>Activo</option>
					<option value="terminado" ${
						status === 'terminado' ? 'selected' : ''
					}>Terminado</option>
					<option value="facturado" ${
						status === 'facturado' ? 'selected' : ''
					}>Facturando</option>
					<option value="cancelado" ${
						status === 'cancelado' ? 'selected' : ''
					}>Cancelado</option>
				</select>
			</div>

			<div  id="inicio" class="${
				!status || status === 'espera' ? 'hidden' : ''
			} sm:w-1/2">
				<label for="inicio">Inicio</label>
				<input type="date" name="inicio" value="${
					inicio ? new Date(inicio).toISOString().slice(0, 10) : ''
				}"/>
			</div>	
		</div>
		<div  class="sm:flex sm:justify-between space-x-2">
		<div id="terminado"class="sm:w-1/2 ${
			status === 'facturado' || status === 'terminado' ? '' : 'hidden'
		}">
			<label for="terminado">Terminacion</label>
			<input type="date" name="terminado" value="${
				terminado ? new Date(inicio).toISOString().slice(0, 10) : ''
			}"/>
		</div>
			<div id="factura" class="sm:w-1/2 ${
				status === 'facturado' || status === 'terminado' ? '' : 'hidden'
			}">
				<label for="factura">Factura:</label>
				<input type="text" name="direccion" value="${factura || ''}"/>
			</div>
		</div>
		<div class="flex justify-between pt-8">
			<button
				id="cancel"
				type="reset"
				class="w-12 h-12 text-yellow-200 transform bg-yellow-500 rounded-full  sm:w-2/5 sm:block sm:rounded-xl hover:scale-y-105 ring-yellow-300 ring-2"
			>
				<span class="hidden sm:inline-block">Cancelar</span
				>${Cancel}
			</button>
			<button
			type="submit"
				id="save"
				class="w-12 h-12 text-green-200 transform bg-green-500 rounded-full  sm:w-2/5 sm:block sm:rounded-xl hover:scale-y-105 ring-green-300 ring-2"
			>
				<span class="hidden sm:inline-block">Guardar</span
				>${Good}
			</button>
		</div>
		<div id="alert-saved" class="h-12 bg-indigo-500 text-indigo-200 text-center py-3 mt-2 rounded-lg border-indigo-700 hidden">
		<h4>Datos Almacenados</h4>
		</div>
</form>
</section>
`;
};
