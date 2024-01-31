import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'src/dt_with_buttons.js',
	output: {
		file: 'dt_bundle.js',
		format: 'es'
	},
	plugins: [resolve()]
};