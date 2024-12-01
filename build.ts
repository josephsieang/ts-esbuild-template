import { build } from 'esbuild';

const runBuild = async () => {
    try {
        await build({
            entryPoints: ['./src/index.ts'], // 入口文件
            bundle: true,                   // 打包成單一文件
            outfile: './dist/bundle.js',    // 輸出文件
            platform: 'node',               // 適用 Node.js 平台
            target: 'esnext',               // ES 版本目標
            sourcemap: true,                // 生成 source map
            minify: true,                   // 壓縮代碼
            loader: { '.ts': 'ts' },        // 指定 TypeScript 加載器
        });
        console.log('Build completed successfully.');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
};

runBuild();
