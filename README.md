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
            js/0.4473108481bbf6322437.js    24 kB
fonts/MaterialIcons-Regular.012cf6a.woff  57.6 kB
         fonts/Roboto-Light.37fbbba.woff  89.2 kB
       fonts/Roboto-Regular.081b11e.woff  89.4 kB
        fonts/Roboto-Medium.303ded6.woff  89.7 kB
          fonts/Roboto-Bold.ad140ff.woff  89.2 kB
          fonts/Roboto-Thin.90d3804.woff  87.8 kB
            js/1.3ae311ee644d8961a15d.js  1.86 kB
                               js/app.js  86.1 kB
                            js/quasar.js   183 kB
                        js/used-twice.js  1.44 kB
app.4c805a02ed26becdba812fc011640591.css   127 kB
                              index.html   1.5 kB
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |   134.8ms   |
| Load time (average)         |   267ms     |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 9.95ms    |
| Scripting (average)   | 106.8ms   |
| Rendering (average)   | 29.22ms   |
| Painting (average)    | 6.64ms    |
| Other (average)       | 95.4ms    |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [340, 61, 88, 84, 101]
var measuresLoadTimeMilliseconds         = [769, 108, 151, 142, 165]
var measuresLoadingMilliseconds          = [8.6, 9.2, 10.5, 10.2, 11.3]
var measuresScriptingMilliseconds        = [102, 90.4, 114.8, 111.3, 115.5]
var measuresRenderingMilliseconds        = [36.1, 23.2, 28.4, 27.5, 30.9]
var measuresPaintingMilliseconds         = [10.4, 5.8, 5.4, 6, 5.6]
var measuresOtherMilliseconds            = [124.9, 79.2, 85.8, 90.2, 96.9]


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
  134.8,
  267,
  9.959999999999999,
  106.8,
  29.22,
  6.640000000000001,
  95.4
]

-->
