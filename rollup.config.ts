import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.jsx',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [typescript()]
};