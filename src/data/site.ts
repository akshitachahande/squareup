export const site = {
	name: 'SquareUp',
	description:
		'SquareUp is a digital product studio for startups, enterprise leaders, media & publishers and social good.',
	email: 'hello@squareup.com',
	phone: '+91 91813 23 2309',
	location: 'Somewhere in the World',
	copyright: '© 2023 SquareUp. All rights reserved.',
};

export type NavLink = { label: string; href: string };

/** Header navigation. "Contact" is rendered separately as the CTA button. */
export const navLinks: NavLink[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services' },
	{ label: 'Work', href: '/work' },
	{ label: 'Process', href: '/process' },
	{ label: 'About', href: '/about' },
	{ label: 'Careers', href: '/careers' },
];

export const contactLink: NavLink = { label: 'Contact', href: '/contact' };

export const footerLinks: NavLink[] = [...navLinks, contactLink];

export const socialLinks = [
	{ label: 'Facebook', icon: 'facebook', href: '#' },
	{ label: 'Twitter', icon: 'twitter', href: '#' },
	{ label: 'LinkedIn', icon: 'linkedin', href: '#' },
] as const;
