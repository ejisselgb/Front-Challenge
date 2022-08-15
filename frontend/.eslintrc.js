module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: { camelcase: 'off' },
	globals: {
		JSX: 'readonly',
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
		},
	],
}
