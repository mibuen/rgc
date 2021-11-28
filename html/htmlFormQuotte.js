import { Good } from '../assets/Good.js';
import { Cancel } from '../assets/Cancel.js';
export const htmlFormQuotte = (data) => {
	return `<div>
  <label class="lab" for="trabajo">Descripcion del Trabajo:</label>
  <input type="text" id="trabajo" name="trabajo" value="${data.trabajo || ''}"/>
</div>
<div class="sm:flex sm:justify-between sm:space-x-2">
  <div class="w-1/2">
    <label class="lab" for="cliente">Cliente:</label>
    <input type="text" id="cliente" name="cliente" value="${
			data.cliente || ''
		}" />
  </div>
  <div class="w-1/2">
    <label class="lab" for="contacto">Contacto:</label>
    <input type="text" id="contacto" name="contacto" value="${
			data.contacto || ''
		}"/>
  </div>
</div>

<div class="sm:flex sm:justify-between sm:space-x-2">
<div>
  <label class="lab" for="quien_cotiza">Preparado por:</label>
  <input type="text" id="quien_cotiza" name="quien_cotiza" value="${
		data.quien_cotiza || ''
	}" />
</div>
<div>
  <label class="lab" for="monto">Monto Cotizado $:</label>
  <input type="number" id="monto" name="monto" value="${data.monto || ''}" />
</div>
<div>
  <label class="lab" for="sitios">Numero de Sitios:</label>
  <input type="text" id="sitios" name="sitios" value="${data.sitios || ''}" />
</div>
</div>
<div class="flex justify-between space-x-2">
  <div class="w-1/2">
  <label class="lab" for="status">Status</label>
    <select type="text" name="status" id="status">
      <option value="pendiente"  ${
				data.status === 'pendiente' ? 'selected' : ''
			}>Pendiente</option>
      <option value="presentada"  ${
				data.status === 'presentada' ? 'selected' : ''
			}>Presentada</option>
      <option value="ganada"  ${
				data.status === 'ganada' ? 'selected' : ''
			}>Ganada</option>
      <option value="perdida"  ${
				data.status === 'perdida' ? 'selected' : ''
			}>Perdida</option>
      <option value="cancelada"  ${
				data.status === 'cancelada' ? 'selected' : ''
			}>Cancelada</option>
    </select>
  </div>
  <div id="emitida"  class="w-1/2 ${
		data.status === 'pendiente' || data === 'Nueva' ? 'hidden' : 'block'
	}">
    <label class="lab" for="emision">Presentada a Cliente:</label>
    <input type="date" id="emision" name="emision" value="${
			data.emision ? new Date(data.emision).toISOString().slice(0, 10) : ''
		}"/>
  </div>
</div>

<div id='resuelta' class="flex justify-between space-x-2 ${
		data.status === 'pendiente' ||
		data.status === 'presentada' ||
		data === 'Nueva'
			? 'hidden'
			: 'block'
	}">
  <div  class="w-1/2" id="fieldPedido">
      <label class="lab" for="pedido">Pedido de el Cliente:</label>
      <input type="text" id="pedido" name="pedido" value="${
				data.pedido || ''
			}" />
  </div>
  <div class="w-1/2" id="fieldResuelta">
    <label class="lab" for="resuelta">Fecha Resolucion:</label>
    <input
      type="date"
      id="resuelta"
      name="resuelta"
      value="${
				data.resuelta ? new Date(data.resuelta).toISOString().slice(0, 10) : ''
			}"/>
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
</div>`;
};
