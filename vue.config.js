const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    },
  },

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'],
      }),

      new ImageminPlugin({
        disable: process.env.NODE_ENV !== 'production', // Disable during development
        pngquant: {
          quality: '95-100',
        },

        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true,
          }),
        ],
      }),
    ],
  },
}
