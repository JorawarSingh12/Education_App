const express = require('express')
const port = 3000
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", 'ejs')
app.use(express.static('public'))

var login = require('./routes/login')
var signup = require('./routes/signup')
var student_dashboard = require('./routes/student_dashboard')
var teacher_dashboard = require('./routes/teacher_dashboard')
var homepage = require('./routes/homepage')
app.use("/",homepage)
app.use("/login",login)
app.use("/signup",signup)
app.use("/student_dashboard",student_dashboard)
app.use("/teacher_dashboard",teacher_dashboard);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });