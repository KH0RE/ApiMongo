const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/GuiEcu'

const app =  express()

mongoose.connect(url, {useNewUrlParser: true})
const con =  mongoose.connection

con.on('open', function(){
    console.log('turned on....')

})

app.use(express.json())

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(9000, ()=>{
    console.log('Server started....')
})