import type { IconName } from '../components/Icon.astro';

export type ServiceItem = { icon: IconName; title: string };
export type ServiceGroup = { title: string; items: ServiceItem[] };
export type ServiceArea = {
	id: string;
	title: string;
	text: string;
	includes: string;
	groups: ServiceGroup[];
};

/*
 * Icons are Lucide stand-ins for the SF Symbols in Figma, picked by meaning
 * rather than shape where no close match exists.
 */
export const serviceAreas: ServiceArea[] = [
	{
		id: 'design',
		title: 'Design',
		text: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
		includes: 'Our design services include:',
		groups: [
			{
				title: 'User Experience (UX) Design',
				items: [
					{ icon: 'square-dashed-mouse-pointer', title: 'User Research and Persona Development' },
					{ icon: 'list-tree', title: 'Information Architecture and Wireframing' },
					{ icon: 'mouse-pointer-click', title: 'Interactive Prototyping and User Testing' },
					{ icon: 'sparkles', title: 'UI Design and Visual Branding' },
				],
			},
			{
				title: 'User Interface (UI) Design',
				items: [
					{ icon: 'mouse-pointer-2', title: 'Intuitive and Visually Appealing Interface Design' },
					{ icon: 'shapes', title: 'Custom Iconography and Illustration' },
					{ icon: 'type', title: 'Typography and Color Palette Selection' },
					{ icon: 'monitor-smartphone', title: 'Responsive Design for Various Devices' },
				],
			},
			{
				title: 'Branding and Identity',
				items: [
					{ icon: 'circle-dashed', title: 'Logo Design and Visual Identity Development' },
					{ icon: 'target', title: 'Brand Strategy and Positioning' },
					{ icon: 'book-open', title: 'Brand Guidelines and Style Guides' },
					{ icon: 'newspaper', title: 'Marketing Collateral Design (Brochures, Business Cards, etc.)' },
				],
			},
		],
	},
	{
		id: 'engineering',
		title: 'Engineering',
		text: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.',
		includes: 'Our engineering services include:',
		groups: [
			{
				title: 'Web Development',
				items: [
					{ icon: 'code', title: 'Front-End Development (HTML, CSS, JavaScript)' },
					{ icon: 'square-terminal', title: 'Back-End Development (PHP, Python, Ruby)' },
					{ icon: 'cog', title: 'Content Management System (CMS) Development (WordPress, Drupal)' },
					{ icon: 'shopping-cart', title: 'E-Commerce Platform Development (Magento, Shopify)' },
				],
			},
			{
				title: 'Mobile App Development',
				items: [
					{ icon: 'smartphone', title: 'Native iOS and Android App Development' },
					{ icon: 'tablet-smartphone', title: 'Cross-Platform App Development (React Native, Flutter)' },
					{ icon: 'layers', title: 'App Prototyping and UI/UX Design Integration' },
					{ icon: 'rocket', title: 'App Testing, Deployment, and Maintenance' },
				],
			},
			{
				title: 'Custom Software Development',
				items: [
					{ icon: 'building', title: 'Enterprise Software Development' },
					{ icon: 'app-window', title: 'Custom Web Application Development' },
					{ icon: 'blocks', title: 'Integration with Third-Party APIs and Systems' },
					{ icon: 'refresh-cw', title: 'Legacy System Modernization and Migration' },
				],
			},
		],
	},
	{
		id: 'project-management',
		title: 'Project Management',
		text: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.',
		includes: 'Our project management services include:',
		groups: [
			{
				title: 'Project Planning and Scoping',
				items: [
					{ icon: 'clipboard-list', title: 'Requirements Gathering and Analysis' },
					{ icon: 'milestone', title: 'Project Roadmap and Timeline Development' },
					{ icon: 'users', title: 'Resource Allocation and Task Assignment' },
					{ icon: 'shield-alert', title: 'Risk Assessment and Mitigation Strategies' },
				],
			},
			{
				title: 'Agile Development',
				items: [
					{ icon: 'repeat', title: 'Iterative Development and Sprints' },
					{ icon: 'square-kanban', title: 'Scrum or Kanban Methodology Implementation' },
					{ icon: 'presentation', title: 'Regular Progress Updates and Demos' },
					{ icon: 'trending-up', title: 'Continuous Improvement and Feedback Incorporation' },
				],
			},
			{
				title: 'Quality Assurance and Testing',
				items: [
					{ icon: 'list-checks', title: 'Test Planning and Execution' },
					{ icon: 'shield-check', title: 'Functional and Usability Testing' },
					{ icon: 'gauge', title: 'Performance and Security Testing' },
					{ icon: 'bug', title: 'Bug Tracking and Issue Resolution' },
				],
			},
		],
	},
];
