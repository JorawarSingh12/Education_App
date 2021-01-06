const express = require('express'); 
var router = express.Router(); 
const passport = require('passport');
const {  ensureAuthenticated } = require('../../config/auth');
const Institution = require("../../models/institution")
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: path.join(__dirname,'../../public/uploads/'),
    filename : function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now()+
        path.extname(file.originalname)
        )
    }
})
const upload = multer({
    storage: storage,

}).single('myImage')

router.get("/",ensureAuthenticated, (req, res,next) => { 
    
    if(req.user.institution === 'institution')
        res.redirect("/dashboard");

    Institution.findById(req.user.institution, (err, institution) => {
        if(req.user.type === 'student')
        {
            var students = institution.students;
            for(var i=0;i<students.length;i++)
            {
                if(students[i]._id.toString() === req.user._id.toString())
                {
                    res.render('auth/profile', { user: students[i]  })
                }
            }
            
        }
        else if(req.user.type === 'teacher')
        {
            var teachers = institution.teachers;
            for(var i=0;i<teachers.length;i++)
            {
                if(teachers[i]._id.toString() === req.user._id.toString())
                {
                    res.render('auth/profile', { user: teachers[i]  })
                }
            }
        }
        else{
            res.redirect("/dashboard")
        }

    })    

}) 

router.post("/",ensureAuthenticated, (req, res,next) => { 
    
    upload(req,res,(err)=>{
        if(err)
            console.log(err)
        console.log(req.file)
        res.redirect("/dashboard")
    }) 
}) 
      
module.exports = router; 
