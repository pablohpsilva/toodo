# Quasar App

> A Quasar project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```


## Environment
* Macbook Pro late 2013, macOS High Sierra (10.13.1), Intel i7 2.7GHz, 16Gb RAM, 256Gb SSD;
* Using Google Chrome Canary v64.0.3273.0 (Official Build) canary (64-bit);
* Web app hosted at: https://pablohpsilva.github.io/toodo ;
* Internet hired: 60Mb Brazil;
* Internet speed (average): 6 Mbps;
* Internet latency (average): 29.8ms;

## Changes (newest first)

* Converted woff fonts to woff2, reducing size of them in general;
* updated the ServiceWorker to cache woff2 files;
* Copied the contents of *.css and place it at the end of the html outputted file;
* Deleted the *.css file and importing script in outputted html file;
* Using the webpack ImageminPlugin reduced the size of SVG images;
* Using the webpack ImageminPlugin reduced the size of JPG images by making quality 50% less than original;
* Using the webpack ImageminPlugin reduced the size of PNG images by making quality 50% less than original;
* [[measure-5](https://github.com/pablohpsilva/toodo/tree/measure-5)] Decided to make the app work offline. So I used SWPrecacheWebpackPlugin to cache the application code and assets;
* [[measure-5](https://github.com/pablohpsilva/toodo/tree/measure-5)] I used the [vue-cli pwa template ServiceWorker configuration](https://github.com/vuejs-templates/pwa/blob/master/template/build/service-worker-prod.js) in order to have this up and running fast;
* [[measure-4](https://github.com/pablohpsilva/toodo/tree/measure-4)] I've decided and prepared my application to work with HTTP2. After reading a bunch of things about it, I realised I could use the chrome parallelism in my favor (Google chrome can download up to 6 files in parallel);
* [[measure-4](https://github.com/pablohpsilva/toodo/tree/measure-4)] Since HTTP2 is the goal, I'll take advantage on parallelism using PreloadWebpackPlugin to download the files: `app.js, manifest.js, vendor.js, used-twice.js` at the same time as the first thing chrome should download.
* [[measure-3](https://github.com/pablohpsilva/toodo/tree/measure-3)] Used CommonsChunkPlugin to place in a file every "used-twice" code and share it across the application;
* [[measure-3](https://github.com/pablohpsilva/toodo/tree/measure-3)] Since my bundle app.js file is quite large, I've decided to extract the quasar code from it, creating two files: quasar.js and app.js (with no quasar code). I used CommonsChunkPlugin to do the trick;
* [[measure-2](https://github.com/pablohpsilva/toodo/tree/measure-2)] Added new rules to UglifyJsPlugin in order to make app run faster on browser;
* [[measure-2](https://github.com/pablohpsilva/toodo/tree/measure-2)] Added new rules to HtmlWebpackPlugin in order to clean up the HTML file and compressed it;

## Measurements

### App build output
```
  statics/img/icons/apple-touch-icon-120x120.png    2.52 kB
       fonts/MaterialIcons-Regular.012cf6a.woff2    46.3 kB
                fonts/Roboto-Light.37fbbba.woff2    62.8 kB
              fonts/Roboto-Regular.081b11e.woff2    62.8 kB
               fonts/Roboto-Medium.303ded6.woff2    63.4 kB
                 fonts/Roboto-Bold.ad140ff.woff2    62.2 kB
                    js/0.95aedc007c727e037959.js    24.3 kB
                    js/1.3ae311ee644d8961a15d.js    1.86 kB
                                       js/app.js    86.1 kB
                                    js/quasar.js     183 kB
                                js/used-twice.js    1.44 kB
                                      index.html     129 kB
    statics/img/icons/android-chrome-192x192.png    7.07 kB
    statics/img/icons/android-chrome-512x512.png    28.1 kB
                 fonts/Roboto-Thin.90d3804.woff2    61.2 kB
  statics/img/icons/apple-touch-icon-152x152.png    3.17 kB
  statics/img/icons/apple-touch-icon-180x180.png    3.78 kB
    statics/img/icons/apple-touch-icon-60x60.png    1.18 kB
    statics/img/icons/apple-touch-icon-76x76.png    1.48 kB
          statics/img/icons/apple-touch-icon.png    3.78 kB
             statics/img/icons/favicon-16x16.png  477 bytes
             statics/img/icons/favicon-32x32.png  929 bytes
                   statics/img/icons/favicon.ico    15.1 kB
statics/img/icons/msapplication-icon-144x144.png    1.15 kB
            statics/img/icons/mstile-150x150.png    3.27 kB
         statics/img/icons/safari-pinned-tab.svg    4.85 kB
                           statics/manifest.json  436 bytes
                    statics/quasar-logo-full.svg    4.02 kB
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   107.8ms   |
| Load time (average)         |   156.6ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 12.62ms   |
| Scripting (average)   | 109.94ms  |
| Rendering (average)   | 37.86ms   |
| Painting (average)    | 16.26ms   |
| Other (average)       | 91.84ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [187, 109, 81, 74, 88]
var measuresLoadTimeMilliseconds         = [257, 119, 145, 128, 134]
var measuresLoadingMilliseconds          = [12.7, 12.2, 12.7, 11.8, 13.7]
var measuresScriptingMilliseconds        = [107.2, 142.9, 105.8, 96.4, 97.4]
var measuresRenderingMilliseconds        = [46.7, 51.6, 32.4, 33.7, 24.9]
var measuresPaintingMilliseconds         = [28.1, 20.2, 10.1, 16.5, 6.4]
var measuresOtherMilliseconds            = [78.9, 105.6, 94, 92.2, 88.5]


var measures = [
  measuresDOMContentLoadedMilliseconds,
  measuresLoadTimeMilliseconds,
  measuresLoadingMilliseconds,
  measuresScriptingMilliseconds,
  measuresRenderingMilliseconds,
  measuresPaintingMilliseconds,
  measuresOtherMilliseconds
]

console.log(measures.map(el => sum(el) / el.length))

// console:
[
  107.8,
  156.6,
  12.62,
  109.94,
  37.86,
  16.26,
  91.84
]

-->


## All measurements

![Toodo web application - Network benchmark comparison: first and last](https://raw.githubusercontent.com/pablohpsilva/toodo/master/README/Screen%20Shot%202017-11-19%20at%205.28.22%20PM.png "Toodo web application - Network benchmark comparison: first and last")

![Toodo web application - Network benchmark comparison: first and last](https://raw.githubusercontent.com/pablohpsilva/toodo/master/README/Screen%20Shot%202017-11-19%20at%205.34.22%20PM.png "Toodo web application - Network benchmark comparison: first and last")

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|                   MEASURE #1              |
| Requests                    |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |    747ms    |
| Load time (average)         |   1904ms    |
|                                           |
|                   MEASURE #2              |
| Requests                    |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   541.3ms   |
| Load time (average)         |  1241.7ms   |
|                                           |
|                   MEASURE #3              |
| Requests                    |      8      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   520.6ms   |
| Load time (average)         |   904.6ms   |
|                                           |
|                   MEASURE #4              |
| Requests                    |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   264.4ms   |
| Load time (average)         |   554.4ms   |
|                                           |
|                   MEASURE #5              |
| Requests                    |      8      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   134.8ms   |
| Load time (average)         |   267ms     |
|                                           |
|                   MEASURE #6              |
| Requests                    |      8      |
| KB transferred              |    597KB    |
| DOMContentLoaded (average)  |   107.8ms   |
| Load time (average)         |   156.6ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
|            MEASURE #1             |
| Loading (average)     | 8.940ms   |
| Scripting (average)   | 83.22ms   |
| Rendering (average)   | 44.78ms   |
| Painting (average)    | 21.32ms   |
| Other (average)       | 91.64ms   |
|            MEASURE #2             |
| Loading (average)     | 6.839ms   |
| Scripting (average)   | 91ms      |
| Rendering (average)   | 39.1ms    |
| Painting (average)    | 14.8ms    |
| Other (average)       | 100.5ms   |
|            MEASURE #3             |
| Loading (average)     | 8.54ms    |
| Scripting (average)   | 97.94ms   |
| Rendering (average)   | 33.67ms   |
| Painting (average)    | 6.42ms    |
| Other (average)       | 94.64ms   |
|            MEASURE #4             |
| Loading (average)     | 8.3ms     |
| Scripting (average)   | 97.82ms   |
| Rendering (average)   | 33.83ms   |
| Painting (average)    | 6.56ms    |
| Other (average)       | 95.38ms   |
|            MEASURE #5             |
| Loading (average)     | 9.95ms    |
| Scripting (average)   | 106.8ms   |
| Rendering (average)   | 29.22ms   |
| Painting (average)    | 6.64ms    |
| Other (average)       | 95.4ms    |
|            MEASURE #6             |
| Loading (average)     | 12.62ms   |
| Scripting (average)   | 109.94ms  |
| Rendering (average)   | 37.86ms   |
| Painting (average)    | 16.26ms   |
| Other (average)       | 91.84ms   |
