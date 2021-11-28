export const htmlSubirForm = `
<h4 class="text-center">Captura de Fotos Inicio</h4>
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

<div id="foto-name" class="border-b-2 h-6 border-indigo-100"></div>

<div class="flex justify-between">
	<label
		for="tomar"
		class="w-12 h-12 pt-3 text-center text-yellow-800 transform bg-yellow-200 rounded-full cursor-pointer  sm:px-2 sm:w-auto sm:block sm:rounded-xl hover:scale-y-105 ring-yellow-400 ring-4 "
		><span class="hidden sm:inline-block">Tomar Foto</span
		><span
			><svg
				xmlns="http://www.w3.org/2000/svg"
				class="inline-block w-6 h-6 sm:ml-12"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
				/></svg
		></span>
	</label>
	<input class="hidden" type="file" name="" id="tomar" />
	<button
		id="subir"
		class="w-12 h-12 text-center text-indigo-800 transform bg-purple-200 rounded-full  sm:w-1/3 sm:block sm:rounded-xl hover:scale-y-105 ring-indigo-400 ring-2"
	>
		<span class="hidden sm:inline-block">Subir</span>
		<svg
			class="inline-block w-6 h-6 sm:ml-12"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
			></path>
		</svg>
	</button>
</div>
`;
