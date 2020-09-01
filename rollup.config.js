import postcss from 'rollup-plugin-postcss';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: {
    main: "src/main.js",
  },
  output: {
    format: "iife",
    dir: "public/out/",
		sourcemap: true,
  },
  plugins: [
    postcss({ extract: true }),
    !production && livereload('public'),
  ],
}
