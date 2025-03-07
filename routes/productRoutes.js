const express = require('express')
const router = express.Router()

const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controller/productController')

router.get('/getAllProducts', getAllProducts);

router.get('/getProductById/:id', getProductById);

router.post('/addProduct', addProduct);

router.put('/updateProduct/:id', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router;