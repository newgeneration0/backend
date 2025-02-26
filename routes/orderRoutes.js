const express = require('express')
const router = express.Router();

router.get('/createOrder', (req, res)=>{
    res.send('create order please')
})


module.exports = router