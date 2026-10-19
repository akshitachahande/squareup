/**
 * What fades in on scroll, picked by existing classes so new pages get the
 * effect by reusing the shared components. BaseLayout turns this list into
 * the CSS that hides these elements from the first paint, and reveal.ts
 * shows them as they scroll into view.
 */

/* Single blocks */
export const revealBlocks = [
	'.banner__title',
	'.banner__text',
	'.faq__intro',
	'.cta__cube',
	'.cta__start',
	'.hero__title',
	'.hero__for',
	'.hero__actions',
	'.brands__marquee',
	'.intro',
	'.area__intro',
	'.works__intro',
	'.about__copy',
	'.about__image',
	'.story__title',
	'.group__title',
	'.today__intro',
	'.today__bar',
	'.form__submit',
];

/* Siblings that stagger: each delay grows with its position in the row */
export const revealStaggered = [
	'.service',
	'.showcase__card',
	'.stat',
	'.reason',
	'.testimonial',
	'.faq__item',
	'.form > :not(.form__submit)',
	'.step',
	'.item',
	'.work',
	'.benefit',
	'.job',
	'.channels > li',
	'.info > *',
];

/* Headings that also come into focus from a soft blur */
export const revealBlur = [
	'.banner__title',
	'.hero__title',
	'.intro',
	'.area__intro',
	'.works__intro',
	'.about__copy',
	'.story__title',
	'.group__title',
];

/* Images that grow into place instead of rising */
export const revealZoom = ['.about__image', '.cta__cube'];

export const revealSelector = [...revealBlocks, ...revealStaggered].join(',');
