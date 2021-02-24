const express = require('express')

const app = express()

const path = require('path')
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const { email,password } = require('./config.json')

app.use(express.static(path.join(__dirname, 'static')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

app.set('port', process.env.PORT || 3100)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.get('/',(req,res) => {
    return res.render('index')
})

app.get('/contact',(req,res) => {
    return res.render('contact',{error: req.params.error})
})

app.post('/send',(req,res) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: email,
            pass: password
        }
    })
    console.log(req.body.email);
    const options = {
        from: req.body.email,
        to: email,
        subject: req.body.name,
        text: req.body.content + " | from: " + req.body.email
    }
    transporter.sendMail(options,(err,response) => {
        if (err) {
            console.log(error);
            return res.redirect('/error-emal')
        } else {
            console.log(response);
            return res.redirect('/')
        }
    })
})

app.get('/error-email',(req,res) => {
    res.render('error')
})

app.listen(app.get('port'),() => {
    console.log("Server on port",app.get('port'));
    console.log("http://localhost:"+app.get('port'));
})