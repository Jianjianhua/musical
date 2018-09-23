const path = require('path')
module.exports = {

  plugins: {
    'postcss-assets': {
      loadPaths: [path.resolve(__dirname, './src/assets/img')],
      baseUrl: '/'
    },

    'postcss-sprites': {
      spritePath: path.resolve(__dirname, './src/assets/img'),
      spritesmith:{
        padding:10
      },
      filterBy(image) {
        if (!image.url.match(/(?:\/icon?|\/sprite?)/)) {
          return Promise.reject()
        }
        return Promise.resolve()
      }
    },

    autoprefixer: {},
    'postcss-px2rem': {
      remUnit: 75
    }
  },

}