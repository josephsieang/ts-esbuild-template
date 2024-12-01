import { build } from 'esbuild';

const runBuild = async () => {
  try {
    await build({
      entryPoints: ['./src/index.ts'],
      bundle: true,
      outfile: './dist/bundle.js',
      platform: 'node',
      target: 'esnext',
      sourcemap: true,
      minify: true,
      loader: { '.ts': 'ts' }
    });
    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

runBuild();
