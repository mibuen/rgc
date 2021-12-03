export const topdf = () => {
	const genPdf = document.querySelector('#genpdf');
	genPdf.addEventListener('click', () => {
		const reporte = document.querySelector('#topdf');

		const opt = {
			margin: 0,
			filename: 'prj8-1-item1.pdf',
			jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
			//pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
		};
		console.log('SIJALA');
		html2pdf(reporte);
		//html2pdf().set(opt).from(reporte).save();
	});
};
