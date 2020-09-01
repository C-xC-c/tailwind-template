const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: ['./public/**/*.html', './src/**/*.js'],
  },
  variants: {},
  plugins: [],
}
