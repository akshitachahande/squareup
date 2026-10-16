/**
 * Soft green glow that follows the pointer across the grid cards. The
 * script only passes the pointer position into --mx / --my; the glow itself
 * is drawn and faded in global.css (.spotlight).
 */
export const spotlightCards = [
	'.service',
	'.reason',
	'.testimonial',
	'.item',
	'.step',
	'.work',
	'.benefit',
	'.job',
];

if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
	for (const card of document.querySelectorAll<HTMLElement>(spotlightCards.join(','))) {
		card.classList.add('spotlight');
		card.addEventListener('pointermove', (e) => {
			const box = card.getBoundingClientRect();
			card.style.setProperty('--mx', `${e.clientX - box.left}px`);
			card.style.setProperty('--my', `${e.clientY - box.top}px`);
		});
	}
}
