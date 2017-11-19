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
          fonts/Roboto-Bold.ad140ff.woff    89.2 kB
fonts/MaterialIcons-Regular.012cf6a.woff    57.6 kB
         fonts/Roboto-Light.37fbbba.woff    89.2 kB
       fonts/Roboto-Regular.081b11e.woff    89.4 kB
        fonts/Roboto-Medium.303ded6.woff    89.7 kB
          fonts/Roboto-Thin.90d3804.woff    87.8 kB
            js/0.4473108481bbf6322437.js      24 kB
            js/1.3ae311ee644d8961a15d.js    1.83 kB
                               js/app.js     261 kB  [big]
app.4c805a02ed26becdba812fc011640591.css     127 kB
                              index.html  649 bytes
```

### Network:

|    What                     |   Measure   |
|:----------------------------|:------------|
|    Requests                 |      6      |
| KB transferred              |    291KB    |
| DOMContentLoaded (average)  |    747ms    |
| Load time (average)         |   1904ms    |


### Performance:

|      What             |   Time    |
|:----------------------|:----------|
| Loading (average)     | 8.940ms   |
| Scripting (average)   | 83.22ms   |
| Rendering (average)   | 44.78ms   |
| Painting (average)    | 21.32ms   |
| Other (average)       | 91.64ms   |

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc, 0)

// Measures:
var measuresDOMContentLoadedMilliseconds = [702, 745, 800, 755, 733]
var measuresLoadTimeMilliseconds         = [1480, 1700, 2200, 2150, 1990]
var measuresLoadingMilliseconds          = [6.9, 8.7, 10.4, 9.5, 9.2]
var measuresScriptingMilliseconds        = [90.6, 66.5, 90.2, 85.1, 83.7]
var measuresRenderingMilliseconds        = [34.7, 34, 54.5, 52.3, 48.4]
var measuresPaintingMilliseconds         = [7.1, 26.4, 27.2, 25.7, 20.2]
var measuresOtherMilliseconds            = [105.4, 91.3, 96.6, 85.1, 79.8]


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
  747,
  1904,
  8.940,
  83.22,
  44.78,
  21.32,
  91.64
]

-->
