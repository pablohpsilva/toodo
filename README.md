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

### Network:
* Requests                  : 6;
* KB transferred            : 291KB;
* DOMContentLoaded (average): 541.3ms;
* Load time        (average): 1241.7ms;

<!--
  var measuresDOMContentLoadedMilliseconds = [493, 608, 974, 304, 347, 680, 755, 532, 405, 315]
  var measuresLoadTimeMilliseconds         = [1160, 1560, 977, 1010, 615, 2080, 2020, 1190, 1020, 785]
-->

### Performance:
* Loading  : 6.839ms;
* Scripting: 91ms;
* Rendering: 39.1ms;
* Painting : 14.8ms;
* Other    : 100.5ms;

<!-- var measuresLoadingMilliseconds   = [6.7, 7, 7.5, 6.6, 6.4]  -->
<!-- var measuresScriptingMilliseconds = [90.7, 87.4, 94.8, 91.8, 90.3]  -->
<!-- var measuresRenderingMilliseconds = [37.6, 40.9, 37.2, 40.1, 39.7]  -->
<!-- var measuresPaintingMilliseconds  = [25.7, 20.5, 7, 12.8, 8]  -->
<!-- var measuresOtherMilliseconds     = [99.8, 111.2, 97.5, 95.4, 100.9]  -->

<!--
var sum = (arr) => arr.reduce((acc, curr) => curr + acc; return acc, 0)

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
