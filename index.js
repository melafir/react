const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT||5000

app.use(express.static(path.resolve(__dirname,'client','build')))

app.get('/api',(req,res)=>{
    res.send({message:'Hi from Express'})
})

app.get('*',(req,res)=>{
    res.sendFile(path.resolve('index.html'))
})

app.listen(PORT,()=>console.log(`Listening port ${PORT}`))