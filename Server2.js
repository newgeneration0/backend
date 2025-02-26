const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const connectDb = require('./config/db')

const app = express();

let data = [];

connectDb()

app.use(cors());
app.use(express.json());



app.use('/users', userRoutes)

app.use('/products', productRoutes)

app.use('/order', orderRoutes)

// app.get('/user', (req, res)=>{
//     res.send(data)
// })

// app.post('/createUser', (req, res)=>{
//     let userData = req.body
//     data.push(userData)
//     res.json('user created')
// })


app.listen(4000, ()=>{
    console.log('server is running on port 4000')
})





// const express = require('express')
// const cors = require('cors')

// const app = express();

// app.use(cors());
// app.use(express.json())

// let data = [];

// app.get('/user', (req, res)=>{
//     // res.status(200).send('server from user')
//     // res.send({
//     //     data: ' hello'
//     // })
//     res.send(data);
// })

// app.post('/createUser', (req, res)=>{
//     // res.status(200).send('server from create user')
//     let userData = req.body;
//     data.push(userData)
//     res.json('user created')
   
// })


// app.listen(4000, ()=>[
//     console.log('server is running on port 4000')
// ])