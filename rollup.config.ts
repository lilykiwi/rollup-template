import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import nodeResolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'output',
    format: 'umd',
    sourcemap: false,
  },
  watch: {
    include: "src/**",
    exclude: "node_modules/**",
    chokidar: {
      usePolling: true
    }
  },
  plugins: [
    typescript(),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
      ]
    }),
    nodeResolve(),
    scss({
      fileName: 'bundle.css'
    }),
    html({
      title: 'Preact App',
    }),
  ],
};