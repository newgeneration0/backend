const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/users', (req, res)=>{
    // res.send('hello from server')
    res.status(200).json({
        data: 'hello'
    })
})

app.listen(3000, ()=>{
    console.log('server is running')
})