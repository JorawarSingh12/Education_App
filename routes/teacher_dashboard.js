var express = require('express'); 
var Router = express.Router(); 
   
Router.route('/:teacher_id') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get((req, res, next) => { 
    res.render('teacher_dashboard')  
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
