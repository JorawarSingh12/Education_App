var express = require('express'); 
var Router = express.Router(); 
   
Router.route('/:student_id') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.set({'Content-Type': 'text/html'} );
    next(); 
}) 
.get((req, res, next) => { 
    const con = require('../democonnection')
    let sql = "SELECT * FROM student WHERE id = ?";
    let assignments;
    con.query(sql,[req.params.student_id], function (err, result, fields) {
        if (err) throw err;
            res.render('student_dashboard',{student : result,assignments:assignments});
    });
     
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
