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

* Added new rules to UglifyJsPlugin in order to make app run faster on browser;
* Added new rules to HtmlWebpackPlugin in order to clean up the HTML file and compressed it;

## Measurements

### App build output
```
          fonts/Roboto-Bold.ad140ff.woff    89.2 kB
fonts/MaterialIcons-Regular.012cf6a.woff    57.6 kB
         fonts/Roboto-Light.37fbbba.woff    89.2 kB
       fonts/Roboto-Regular.081b11e.woff    89.4 kB
        fonts/Roboto-Medium.303ded6.woff    89.7 kB
          fonts/Roboto-Thin.90d3804.woff    87.8 kB
            js/0.4473108481bbf6322437.js      24 kB
            js/1.3ae311ee644d8961a15d.js    1.86 kB
                               js/app.js     270 kB  [big]
app.4c805a02ed26becdba812fc011640591.css     127 kB
                              index.html  522 bytes
```

### Network:

|    What           |   Measure   |
|:------------------|:------------|
|    Requests       |      6      |
| KB transferred    |    291KB    |
| DOMContentLoaded  |   541.3ms   |
| Load time         |  1241.7ms   |


### Performance:

|      What   |   Time    |
|:------------|:----------|
|  Loading    | 6.839ms   |
| Scripting   | 91ms      |
| Rendering   | 39.1ms    |
| Painting    | 14.8ms    |
|   Other     | 100.5ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc; return acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [493, 608, 974, 304, 347, 680, 755, 532, 405, 315]
var measuresLoadTimeMilliseconds         = [1160, 1560, 977, 1010, 615, 2080, 2020, 1190, 1020, 785]
var measuresLoadingMilliseconds          = [6.7, 7, 7.5, 6.6, 6.4]
var measuresScriptingMilliseconds = [90.7, 87.4, 94.8, 91.8, 90.3]
var measuresRenderingMilliseconds        = [37.6, 40.9, 37.2, 40.1, 39.7]
var measuresPaintingMilliseconds         = [25.7, 20.5, 7, 12.8, 8]
var measuresOtherMilliseconds            = [99.8, 111.2, 97.5, 95.4, 100.9]


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
  541.3,
  1241.7,
  6.839999999999999,
  91.00000000000001,
  39.1,
  14.8,
  100.96
]

-->
