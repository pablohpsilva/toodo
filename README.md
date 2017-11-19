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
| DOMContentLoaded (average)  |   ms   |
| Load time (average)         |   ms   |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | ms   |
| Scripting (average)   | ms      |
| Rendering (average)   | ms    |
| Painting (average)    | ms    |
| Other (average)       | ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = []
var measuresLoadTimeMilliseconds         = []
var measuresLoadingMilliseconds          = []
var measuresScriptingMilliseconds        = []
var measuresRenderingMilliseconds        = []
var measuresPaintingMilliseconds         = []
var measuresOtherMilliseconds            = []


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
]

-->
