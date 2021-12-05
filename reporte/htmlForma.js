export const htmlForma = `<h4 class="text-center">Crear Reporte Con Fotos</h4>
<div class="flex justify-between">
  <div class="w-1/3">
    <label class="lab" for="cotizacionId">Cot. Id </label>
    <div class="mt-1">
      <input type="text" name="cotizacionId" id="cotizacionId" />
    </div>
  </div>
  <div class="w-1/3">
    <label class="lab" for="proyectoId">Proyecto Id</label>
    <div class="mt-1">
      <input type="text" name="proyectoId" id="proyectoId" />
    </div>
  </div>
  <input type="text" id="tipo" value="inicio" class="hidden" />
</div>
<div id="foto-name" class="h-6 border-b-2 border-indigo-100"></div>
<div class="flex justify-evenly">
  <button type="button" 
    id="genera-pdf"
    class="w-1/2 h-12 text-center text-indigo-800 transform bg-purple-200  rounded-xl sm:w-1/3 sm:block sm:rounded-xl hover:scale-y-105 ring-indigo-400 ring-2"
  >
    Crear PDF
</div>`;
