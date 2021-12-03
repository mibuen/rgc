import { next } from '../../assets/next';
import { previous } from '../../assets/previous.js';
import { upload } from '../../assets/upload';
export function htmlGridFotos() {
	return `
  <div

    id="grid-header"
    class="flex justify-center space-x-4 text-2xl bg-indigo-300 border-2 border-black  col-span-2"
  >
    <h4 id="title-sitio"></h4>
    <h4 id="title-item"></h4>
  </div>
  <div class="border-2 border-black rounded">
  <h4>Foto al Iniciar</h4>
    <img
      id="foto-inicial"
      class="object-cover w-full"
      src=""
      alt="Ni Madres"
    />
    <div class="flex justify-center my-4 space-x-4">
      <button
        id="btn-previous"
        type="button"
        class="w-12 h-12 text-indigo-200 bg-indigo-700 rounded-full"
      >
        ${previous}
      </button>
      <button
        id="btn-next"
        type="button"
        class="w-12 h-12 text-indigo-200 bg-indigo-700 rounded-full"
      >
        ${next}
      </button>
    </div>
  </div>
  <div class="border-2 border-black rounded">
  <h4>Foto al Terminar</h4>
    <label for="final"
      ><img
        id="foto-final"
        class="object-cover w-full cursor-pointer"
        src=""
        alt="Ni Madres"
      />
      <input class="hidden" type="file" name="final" id="final" />
    </label>
    <div class="flex justify-center my-4 space-x-4">
      <button id="cancell"
        type="button"
        class="w-12 h-12 text-indigo-200 bg-indigo-700 rounded-full"
      >
        C
      </button>
      <button id="upload"
        type="button"
        class="w-12 h-12 text-indigo-200 bg-indigo-700 rounded-full"
      >
        ${upload}
      </button>
    </div>
  </div>`;
}
