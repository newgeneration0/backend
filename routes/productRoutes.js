const express = require('express')
const router = express.Router()

router.get('/getAllProduct', (req, res)=>{
    res.send('all product fetched')
})

router.get('/getProductById', (req, res)=>{
    res.send('product fetched by ID')
})

module.exports = router;