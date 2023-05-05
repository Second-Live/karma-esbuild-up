const dns = require("node:dns");
dns.setDefaultResultOrder("ipv4first");

module.exports = {
	baseConfig: {
		plugins: [
			"karma-mocha",
			"karma-mocha-reporter",
			"karma-jsdom-launcher",
			require("../dist/index.js"),
		],

		browsers: ["jsdom"],

		frameworks: ["mocha"],
		reporters: ["mocha"],

		basePath: "",
		files: [{ pattern: "files/**/*main-*.js", watched: false }],
		exclude: [],

		preprocessors: {
			"files/**/*.{js,ts}": ["esbuild"],
		},
	},
};
