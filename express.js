const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/user', (req, res)=>{
    // res.send('hello from server')
    res.status(200).json({
        data: 'hello'
    })
})



app.listen(4000, ()=>{
    console.log('server is running')
}) 