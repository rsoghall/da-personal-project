require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require ('./controller/authCtrl')

const app = express()
const{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
app.use(express.json())

massive(CONNECTION_STRING)
    .then((db) => {
        app.set('db', db)
        console.log('DB Set')
app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))
    })

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

app.post('/auth/register', authCtrl.register)
// app.post('/auth/login', authCtrl.login)
// app.post('/api/staff', authCtrl.createStaff)
// app.get('/api/staff', authCtrl.viewStaff)
// app.put('/api/staff/:id', authCtrl.editStaff)
// app.delete('/api/staff/:id', authCtrl.delStaff)