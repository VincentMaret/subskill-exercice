module.exports = {
  pages: [
    'index'
  ],
  paths: {
    output: './dist/',
    styles: {
      src: './src/less/**/*.less',
      name: 'style.min.css'
    },
    scripts: {
      src: './src/js/**/*.js',
      name: 'main.min.js'
    },
    php: {
      src: './src/php/'
    }
  }
}