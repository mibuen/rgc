export const toggleMenu = (imgs) => {
	const svgs = Array.from(imgs.querySelectorAll('path'));
	return svgs.forEach((svg) => {
		svg.classList.toggle('hidden');
	});
};
