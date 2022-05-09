import VitePluginTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const vitestBaseConfig = defineConfig({
	plugins: [VitePluginTsConfigPaths({ loose: true })],
	test: {
		testTimeout: 30000,
		// environment: 'happy-dom',
		coverage: {
			reportsDirectory: `./coverage`,
			reporter: 'lcov',
			include: ['**/*.ts'],
			exclude: ['**/*.d.ts', '.graphqlrc.ts', 'gulpfile.ts', '**/_generated/**', '**/prisma/**', '**/dist/**', '**/fixtures/**'],
		},
	},
});

export default vitestBaseConfig;
