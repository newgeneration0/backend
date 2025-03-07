const Product = require('../model/productModel')

exports.getAllProducts = async (req, res)=>{
    try {
        const products = await Product.find();
        res.status(200).send({message: 'Product Fetched', products : products})
    } catch (error) {
        res.status(500).send({message: 'error', error : error})
    }
};

exports.getProductById = async(req, res)=>{
    try {
        const product = await Product.findByid(req.params.id);
        res.status(200).send({message: 'product fetched by id', data : product})
    } catch (error) {
        res.status(500).send({message : 'error', error : error})
    }
};

exports.addProduct = async(req, res)=>{
    try{
        let body = req.body;
        // console.log(body);
        let keys = Object.keys(body);
        if(!keys.length){
        return res.send({message: 'error', error: "body is required"})
        }
        // const user = user.createUser
        const product = new Product(body);
        // console.log(user)
        await product.save()
        // res.send("This is the controller for create user");
        res.send({message: "product Created", data: product})
    } catch (error){
        console.log(error)
        res.send({message: "error", error: error.message})
    }
};

exports.updateProduct = async(req, res)=>{
     try {
        const id = req.params.id;
        const body = req.body;
        const user = await Product.findByIdAndUpdate(id, body, {new: true});
        res.status(202).send({message : 'product updated', data: product})
    } catch (error) {
        res.status(500).send({message : 'error'})
    }
};
 
exports.deleteProduct = async(req, res)=>{
     try {
            const id = req.params.id;
            const user = await Product.findByIdAndDelete(id);
            res.status(202).send({message: "product deleted", data: product})
        } catch (error) {
            res.status(500).send({message: "error", error: error})
        }
};