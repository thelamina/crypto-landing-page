module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'gradient-radial-at-t':
					'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'gradient-radial-at-b':
					'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
				'gradient-radial-at-l':
					'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'gradient-radial-at-r':
					'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'gradient-radial-at-tl':
					'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'gradient-radial-at-tr':
					'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'gradient-radial-at-bl':
					'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'gradient-radial-at-br':
					'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
			},
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '800px',
					},
					'@screen md': {
						maxWidth: '800px',
					},
					'@screen lg': {
						maxWidth: '1024px',
					},
					'@screen xl': {
						maxWidth: '1024px',
					},
				},
			});
		},
	],
};
