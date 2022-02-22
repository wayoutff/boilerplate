module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'project': ['./tsconfig.json'],
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks',
		'@typescript-eslint',
	],
	'rules': {
		'prettier/prettier': 0,
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'curly': [ 'error', 'multi-line' ],
		'semi': [ 'error', 'always' ],
		'jsx-quotes': [ 'error', 'prefer-single' ],
		'no-unneeded-ternary': 'error',
		'no-nested-ternary': 0,
		'indent': [ 'error', 2 ],
		'no-undef': 'off',
		'react/jsx-curly-brace-presence': [ 'error', { props: 'never', children: 'never' } ],
		'@typescript-eslint/no-var-requires': 0,
		'no-empty-function': [ 'error', { 'allow': [ 'arrowFunctions' ] } ],
		'@typescript-eslint/no-empty-function': [ 'error', { 'allow': [ 'arrowFunctions' ] } ],
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
	}
};


