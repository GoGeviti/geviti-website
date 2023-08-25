export const handleScroll = (e: string) => {
  
	const targetId = e.replace(/.*\#/, '');
	const elem = document.getElementById(targetId);

	if (window) {
		window.scrollTo({
			top: elem?.offsetTop || 0,
			behavior: 'smooth',
		});
	}
};