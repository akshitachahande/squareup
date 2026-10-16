import type { IconName } from '../components/Icon.astro';

export const benefits = [
	{
		title: 'Innovative and Impactful Projects',
		text: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
	},
	{
		title: 'Supportive Environment',
		// The template reuses the first card's copy here
		text: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
	},
	{
		title: 'Continuous Learning and Growth',
		text: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
	},
	{
		title: 'Challenging and Rewarding Work',
		text: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
	},
];

export type Job = { icon: IconName; title: string; text: string };
export type JobGroup = { title: string; jobs: Job[] };

/*
 * Icons are Lucide stand-ins for the SF Symbols in Figma.
 * TODO: "Apply Now" opens the job application flow (Supabase) once it exists.
 */
export const jobGroups: JobGroup[] = [
	{
		title: 'Design Job Openings',
		jobs: [
			{
				icon: 'mouse-pointer-click',
				title: 'UI Designer',
				text: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.',
			},
			{
				icon: 'scroll-text',
				title: 'UX Designer',
				text: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.',
			},
			{
				icon: 'brush',
				title: 'Design Head',
				text: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.',
			},
		],
	},
	{
		title: 'Development Job Openings',
		jobs: [
			{
				icon: 'code-xml',
				title: 'Front - End Developer',
				text: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.',
			},
			{
				icon: 'square-terminal',
				title: 'Back - End  Developer',
				text: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.',
			},
			{
				icon: 'cog',
				title: 'Full Stack Developer',
				text: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.',
			},
		],
	},
	{
		title: 'Management Job Openings',
		jobs: [
			{
				icon: 'briefcase-business',
				title: 'BA Manager',
				text: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.',
			},
			{
				icon: 'coins',
				title: 'Project Manager',
				text: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.',
			},
			{
				icon: 'users',
				title: 'HR Manager',
				text: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.',
			},
		],
	},
	{
		title: 'QA Job Openings',
		jobs: [
			{
				icon: 'wrench',
				title: 'QA Tester',
				text: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.',
			},
			{
				icon: 'chart-line',
				title: 'SQL Tester',
				text: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.',
			},
			{
				icon: 'shield-half',
				title: 'Manual Tester',
				text: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.',
			},
		],
	},
];
