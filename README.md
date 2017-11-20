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

* I've decided and prepared my application to work with HTTP2. After reading a bunch of things about it, I realised I could use the chrome parallelism in my favor (Google chrome can download up to 6 files in parallel);
* Since HTTP2 is the goal, I'll take advantage on parallelism using PreloadWebpackPlugin to download the files: `app.js, manifest.js, vendor.js, used-twice.js` at the same time as the first thing chrome should download.
* [[measure-3](https://github.com/pablohpsilva/toodo/tree/measure-3)] Used CommonsChunkPlugin to place in a file every "used-twice" code and share it across the application;
* [[measure-3](https://github.com/pablohpsilva/toodo/tree/measure-3)] Since my bundle app.js file is quite large, I've decided to extract the quasar code from it, creating two files: quasar.js and app.js (with no quasar code). I used CommonsChunkPlugin to do the trick;
* [[measure-2](https://github.com/pablohpsilva/toodo/tree/measure-2)] Added new rules to UglifyJsPlugin in order to make app run faster on browser;
* [[measure-2](https://github.com/pablohpsilva/toodo/tree/measure-2)] Added new rules to HtmlWebpackPlugin in order to clean up the HTML file and compressed it;

## Measurements

### App build output
```
            js/0.4473108481bbf6322437.js      24 kB
fonts/MaterialIcons-Regular.012cf6a.woff    57.6 kB
         fonts/Roboto-Light.37fbbba.woff    89.2 kB
       fonts/Roboto-Regular.081b11e.woff    89.4 kB
        fonts/Roboto-Medium.303ded6.woff    89.7 kB
          fonts/Roboto-Bold.ad140ff.woff    89.2 kB
          fonts/Roboto-Thin.90d3804.woff    87.8 kB
            js/1.3ae311ee644d8961a15d.js    1.86 kB
                               js/app.js    86.1 kB
                            js/quasar.js     183 kB
                        js/used-twice.js    1.44 kB
app.4c805a02ed26becdba812fc011640591.css     127 kB
                              index.html  702 bytes
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      8      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   264.4ms   |
| Load time (average)         |   554.4ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 8.3ms     |
| Scripting (average)   | 97.82ms   |
| Rendering (average)   | 33.83ms   |
| Painting (average)    | 6.56ms    |
| Other (average)       | 95.38ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [563, 158, 181, 241, 179]
var measuresLoadTimeMilliseconds         = [1100, 355, 359, 577, 381]
var measuresLoadingMilliseconds          = [8.2, 7.9, 8, 8.2, 9.2]
var measuresScriptingMilliseconds        = [107.3, 89, 102.1, 92.5, 98.2]
var measuresRenderingMilliseconds        = [35, 28, 36.5, 36.1, 33.6]
var measuresPaintingMilliseconds         = [7, 5.3, 7.1, 7.2, 6.2]
var measuresOtherMilliseconds            = [97.7, 88.6, 100.1, 95, 95.5]


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
  264.4,
  554.4,
  8.3,
  97.82,
  33.83,
  6.56,
  95.38
]

-->
