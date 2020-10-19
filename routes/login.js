var express = require('express'); 
var Router = express.Router(); 
   
Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.set({'Content-Type': 'text/html'} ); 
    next(); 
}) 
.get((req, res, next) => { 
    res.render('login') 
}) 
.post((req, res, next) => { 
    res.end('When a POST request is made, then this is the response sent to the client!'); 
}) 
.put((req, res, next) => { 
    res.end('When a PUT request is made, then this is the response sent to the client!'); 
}) 
.delete((req, res, next) => { 
    res.end('When a DELETE request is made, then is the response sent to the client!'); 
}); 
      
module.exports = Router; 
