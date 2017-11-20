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

* Used CommonsChunkPlugin to place in a file every "used-twice" code and share it across the application;
* Since my bundle app.js file is quite large, I've decided to extract the quasar code from it, creating two files: quasar.js and app.js (with no quasar code). I used CommonsChunkPlugin to do the trick;
* [measure-1] Added new rules to UglifyJsPlugin in order to make app run faster on browser;
* [measure-1] Added new rules to HtmlWebpackPlugin in order to clean up the HTML file and compressed it;

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
                              index.html  598 bytes
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      8      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   520.6ms   |
| Load time (average)         |   904.6ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 8.54ms    |
| Scripting (average)   | 97.94ms   |
| Rendering (average)   | 33.67ms   |
| Painting (average)    | 6.42ms    |
| Other (average)       | 94.64ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [544, 181, 258, 190, 1430]
var measuresLoadTimeMilliseconds         = [1120, 449, 628, 376, 1950]
var measuresLoadingMilliseconds          = [8.5, 8.6, 8.6, 8.7, 8.3]
var measuresScriptingMilliseconds        = [101.8, 92.3, 96.2, 102.4, 97]
var measuresRenderingMilliseconds        = [33, 33.8, 31.9, 37.1, 32.6]
var measuresPaintingMilliseconds         = [6.8, 6.2, 6, 7.3, 5.8]
var measuresOtherMilliseconds            = [92.2, 93.3, 99.4, 98.3, 90]


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
  520.6,
  904.6,
  8.54,
  97.94,
  33.67,
  6.42,
  94.64
]

-->
