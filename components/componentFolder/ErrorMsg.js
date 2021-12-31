export function ErrorMsg(msg) {
	return `<h4 id="err-msg" class="text-red-100 bg-red-700 m-2 py-2 text-center rounded ">Error status: ${msg.statusCode}-- msg: ${msg.message}</h4>`;
}
