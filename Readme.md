# health-app

  A simple express subapp for simple load balancer health checks. Returns `200 OK` for `GET /health`. 

## Installation

    $ npm install health-app

## Example

```js
var express = require('express');
var Health = require('health-app');

var subapp = new Health();

express()
  .use('/', subapp.app())
  .listen(8000);
```

## API

### Health()

  Generate an express subapp that serves `200 OK` for `GET /health`.

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```