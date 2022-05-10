const { build } = require('esbuild');
const { Generator } = require('npm-dts');

// @ts-ignore
const { dependencies, peerDependencies } = require('./package.json');

const depKeys = dependencies ? Object.keys(dependencies) : [];
const peerDepKeys = peerDependencies ? Object.keys(peerDependencies) : [];
const deps = depKeys.concat(peerDepKeys);

const outDir = 'dist';

/** @type {import('esbuild').BuildOptions } */
const shared = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	sourcemap: true,
	// minify: true,
	external: deps,
	platform: 'node',
};

// Generate CommonJS code
build({
	...shared,
	outfile: `${outDir}/index.js`,
}).catch((err) => {
	process.stderr.write(err.stderr);
	process.exit(1);
});

// Generate ESM code
build({
	...shared,
	format: 'esm',
	outfile: `${outDir}/index.esm.js`,
}).catch((err) => {
	process.stderr.write(err.stderr);
	process.exit(1);
});

// Generate Types
new Generator({
	output: `${outDir}/types/index.d.ts`,
}).generate();
