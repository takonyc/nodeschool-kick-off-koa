

var koa = require('koa');
    var app = koa();
    
    // handlers here
    // app.use(handlers);
    
    app.listen(port);


var port = process.argv[2];


app.use(function *() {
  // you can set the response body in handler like this
      this.body = 'hello';
    });