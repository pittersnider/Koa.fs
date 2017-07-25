# Koa.fs
Send files using Koa2.  
Made using GNU Nano 2.8.5. :-)

### How to use
  
```javascript
// Retrieves the module
const koafs = require("koafs");

// Create a simple function to handle a route
const handle = (ctx) => {

    // Send the file to the client-side, A.K.A download.
    koafs(ctx, {
	"name": 'how-to-use.txt',
        "path": __dirname + '/README.md',
        "mimetype": 'text/markdown'
    });

};

/**
 * Let's create the koa2 route.
 * PS: this model of route definition is from koa-better-router,
 *    I use and recommend it for you use too.
 */
router.get("/download", handle);
```
