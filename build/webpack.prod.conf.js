var
  path = require('path'),
  config = require('../config'),
  cssUtils = require('./css-utils'),
  glob = require('glob'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
  PreloadWebpackPlugin = require('preload-webpack-plugin'),
  OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  // PurifyCSSPlugin = require('purifycss-webpack'),
  loadMinified = require('./load-minified'),
  ImageminPlugin = require('imagemin-webpack-plugin').default,
  StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const publicUrl = publicPath.slice(0, -1);

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: cssUtils.styleRules({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      postcss: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: config.build.productionSourceMap,
      minimize: true,
      compress: {
        warnings: false, // warn about potentially dangerous optimizations/code
        sequences: true,  // join consecutive statemets with the “comma operator”
        properties: true,  // optimize property access: a["foo"] → a.foo
        dead_code: true,  // discard unreachable code
        drop_debugger: true,  // discard “debugger” statements
        unsafe: true, // some unsafe optimizations (see below)
        conditionals: true,  // optimize if-s and conditional expressions
        comparisons: true,  // optimize comparisons
        evaluate: true,  // evaluate constant expressions
        booleans: true,  // optimize boolean expressions
        loops: true,  // optimize loops
        unused: true,  // drop unused variables/functions
        hoist_funs: true,  // hoist function declarations
        hoist_vars: true, // hoist variable declarations
        if_return: true,  // optimize if-s followed by return/continue
        join_vars: true,  // join var declarations
        cascade: true,  // try to cascade `right` into `left` in sequences
        side_effects: true,  // drop side-effect-free statements
      }
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true }
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync(path.join(__dirname, 'build/*.html')),
    //   purifyOptions: {
    //     minify: true,
    //     info: true,
    //     whitelist: ['*q*', 'bg-grey-2', 'flex' , 'row', 'full-width', 'drag-wrapper', 'column', 'list-wrapper', 'drag-area', 'list-complete-item']
    //   }
    // }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'src/index.html',
      inject: true,
      minify: {
        html5: true,
        useShortDoctype: true,
        decodeEntities: true,
        removeTagWhitespace: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        preserveLineBreaks: false,
        sortAttributes: true,
        sortClassName: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      serviceWorkerLoader: `<script>${loadMinified(path.join(__dirname,
        './service-worker-prod.js'))}</script>`
    }),
    new StyleExtHtmlWebpackPlugin({
      minify: true,
      position: 'body-bottom'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: config.build.publicPath + 'statics',
        ignore: ['.*']
      }
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      maxConcurrency: 5,
      optipng: 5,
      gifsicle: 5,
      jpegtran: {
        progressive: true
      },
      svgo: {
        cleanupAttrs: true,
        removeDoctype: true,
        removeXMLProcInst: true,
        removeComments: true,
        removeMetadata: true,
        removeTitle: true,
        removeDesc: true,
        removeUselessDefs: true,
        removeXMLNS: true,
        removeEditorsNSData: true,
        removeEmptyAttrs: true,
        removeHiddenElems: true,
        removeEmptyText: true,
        removeEmptyContainers: true,
        removeViewBox: true,
        cleanupEnableBackground: true,
        minifyStyles: true,
        convertStyleToAttrs: true,
        convertColors: true,
        convertPathData: true,
        convertTransform: true,
        removeUnknownsAndDefaults: true,
        removeNonInheritableGroupAttrs: true,
        removeUselessStrokeAndFill: true,
        removeUnusedNS: true,
        cleanupIDs: true,
        cleanupNumericValues: true,
        cleanupListOfValues: true,
        moveElemsAttrsToGroup: true,
        moveGroupAttrsToElems: true,
        collapseGroups: true,
        removeRasterImages: true,
        mergePaths: true,
        convertShapeToPath: true,
        sortAttrs: true,
        transformsWithOnePath: true,
        removeDimensions: true,
        removeAttrs: true,
        removeElementsByAttr: true,
        addClassesToSVGElement: true,
        addAttributesToSVGElement: true,
        removeStyleElement: true,
        removeScriptElement: true
      }
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          (
            module.resource.indexOf('quasar') > -1 ||
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      async: true,
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          (
            module.resource.indexOf('quasar') === -1 ||
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'quasar',
      minChunks(module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('quasar') > -1
        )
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'used-twice',
      async: false,
      children: false,
      minChunks: function (module, count) {
        return count >= 2;
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: ['manifest', 'vendor', 'quasar']
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'toodo-app-v1',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,json,html,css,json,png,svg,woff}'],
      minify: true,
      stripPrefix: 'dist/'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
  ]
})
