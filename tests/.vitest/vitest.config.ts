import VitePluginTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig, UserConfig } from 'vitest/config';

type CoverageReporter = UserConfig['test']['coverage']['reporter'];

const coverageReporter: CoverageReporter = (process.env.COV_REPORTER as CoverageReporter) ?? 'lcov';
const coverageDirectory: string = process.env.COV_DIRECTORY ?? `./coverage`;

const vitestBaseConfig = defineConfig({
	plugins: [VitePluginTsConfigPaths({ loose: true })],
	test: {
		testTimeout: 30000,
		passWithNoTests: true,
		coverage: {
			reportsDirectory: coverageDirectory,
			reporter: coverageReporter,
			clean: false,
			include: ['**/*.ts'],
			exclude: ['**/*.d.ts', '.graphqlrc.ts', 'gulpfile.ts', '**/_generated/**', '**/prisma/**', '**/dist/**', '**/fixtures/**'],
		},
	},
});

export default vitestBaseConfig;
