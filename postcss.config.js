const production = !process.env.ROLLUP_WATCH;

module.exports = {
  plugins: [
    require('tailwindcss'),
		require('autoprefixer'), // moz-, etc.
		production && require('cssnano'), // Minifier
  ]
}
