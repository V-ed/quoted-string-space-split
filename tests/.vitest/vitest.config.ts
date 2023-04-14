import VitePluginTsConfigPaths from 'vite-tsconfig-paths';
import type { CoverageC8Options } from 'vitest';
import { defineConfig } from 'vitest/config';

type CoverageReporter = CoverageC8Options['reporter'];

const coverageReporter = (process.env.COV_REPORTER ?? 'lcov') as NonNullable<CoverageReporter>;
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
