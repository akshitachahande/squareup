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
	'.brands__list > li',
	'.service',
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

export const revealSelector = [...revealBlocks, ...revealStaggered].join(',');
