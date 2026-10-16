/**
 * Scroll reveal: content blocks fade and rise into place as they enter the
 * viewport, and items in a row follow one another with a short stagger.
 *
 * The hidden starting state comes from CSS that BaseLayout builds from
 * reveal-targets.ts, so nothing flashes before this runs. Without JS, or
 * with reduced motion, nothing is hidden at all.
 */
import { revealSelector, revealStaggered } from './reveal-targets';

const STEP_MS = 90;
const MAX_STEPS = 4;

const root = document.documentElement;

/** How many items share a row in this container */
function columnCount(parent: HTMLElement | null, total: number) {
	if (!parent) return 1;
	const style = getComputedStyle(parent);
	if (style.display.includes('grid')) {
		return Math.max(1, style.gridTemplateColumns.split(' ').filter(Boolean).length);
	}
	if (style.display.includes('flex') && !style.flexDirection.startsWith('column')) {
		return total;
	}
	return 1;
}

if (root.classList.contains('reveal-ready')) {
	// Tells the fail-safe in BaseLayout that reveal is running
	(window as Window & { __reveal?: boolean }).__reveal = true;

	for (const el of document.querySelectorAll<HTMLElement>(revealStaggered.join(','))) {
		const siblings = el.parentElement ? [...el.parentElement.children] : [el];
		const step = Math.min(siblings.indexOf(el) % columnCount(el.parentElement, siblings.length), MAX_STEPS);
		el.style.setProperty('--reveal-delay', `${step * STEP_MS}ms`);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				el.classList.add('is-revealed');
				observer.unobserve(el);
				// Hand transitions back to the element (hover effects etc.)
				// once the reveal has played, so they aren't delayed
				const done = (e: TransitionEvent) => {
					if (e.target !== el) return;
					el.classList.add('reveal-done');
					el.removeEventListener('transitionend', done);
				};
				el.addEventListener('transitionend', done);
			}
		},
		{ threshold: 0.1 },
	);

	for (const el of document.querySelectorAll<HTMLElement>(revealSelector)) {
		observer.observe(el);
	}
}
