/**
 * Soft green glow that follows the pointer across the grid cards. The
 * script only passes the pointer position into --mx / --my; the glow itself
 * is drawn and faded in global.css (.spotlight).
 *
 * Touch screens can't hover, so there the card crossing the middle of the
 * screen gets .is-active instead, which plays the same effects as hover
 * (glow, tile lift, image zoom, arrow nudge) as the page scrolls.
 */
export const spotlightCards = [
	'.service',
	'.showcase__card',
	'.stat',
	'.reason',
	'.testimonial',
	'.item',
	'.step',
	'.work',
	'.benefit',
	'.job',
];

/* Other hover effects that also play mid-screen on touch */
const activeOnTouch = [...spotlightCards, '.about__image'];

const cards = document.querySelectorAll<HTMLElement>(spotlightCards.join(','));

if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
	for (const card of cards) {
		card.classList.add('spotlight');
		card.addEventListener('pointermove', (e) => {
			const box = card.getBoundingClientRect();
			card.style.setProperty('--mx', `${e.clientX - box.left}px`);
			card.style.setProperty('--my', `${e.clientY - box.top}px`);
		});
	}
} else {
	for (const card of cards) card.classList.add('spotlight');

	// Only a thin line across the middle of the viewport counts as "hovered"
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				entry.target.classList.toggle('is-active', entry.isIntersecting);
			}
		},
		{ rootMargin: '-49% 0px -50% 0px' },
	);

	for (const el of document.querySelectorAll<HTMLElement>(activeOnTouch.join(','))) {
		observer.observe(el);
	}
}
