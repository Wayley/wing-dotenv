import { terser } from 'rollup-plugin-terser';
export default {
  input: 'src/wing-dotenv.js',
  output: [
    {
      file: 'dist/wing-dotenv.js',
      name: 'wing-dotenv',
      format: 'umd',
    },
    {
      file: 'dist/wing-dotenv.es.js',
      format: 'es',
    },
    {
      file: 'dist/wing-dotenv.amd.js',
      format: 'amd',
    },
    {
      file: 'dist/wing-dotenv.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [terser()],
};
