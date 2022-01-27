const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/NotebookDB'

const app =express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected')
})

app.use(express.json())

const notebookRouter = require('./routes/notebook')
app.use('/notebook',notebookRouter)

app.listen(9000,() => {
    console.log('Server started')
})