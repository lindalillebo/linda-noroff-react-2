module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		React: "writable"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "prettier"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"prettier/prettier": [
			"error",
			{
				printWidth: 140,
				semi: true,
				useTabs: true,
				tabWidth: 4
			}
		]
	}
}
