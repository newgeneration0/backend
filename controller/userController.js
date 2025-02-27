const User = require("../model/userModel")
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.find();
        // res.send("all user fetched")
        res.send({message: 'user fetched', data : users})
    } catch (error) {
        res.send({message: 'error', error : error})
    }
}

exports.getUserById = async (req, res)=>{
    try{
        // console.log(req.params.id)
        const user = await User.findById(req.params.id)
        res.status(200).send({message: 'User fetched', data: user})
    } catch (error) {
        res.status(500).send({message: 'error', error: error.message})
    }
}

exports.createUser = async (req, res)=>{
    try{
        let body = req.body;
        // console.log(body);
       let keys = Object.keys(body);
       if(!keys.length){
        return res.send({message: 'error', error: "body is required"})
       }
        // const user = user.createUser
        const user = new User(body);
        // console.log(user)
        await user.save()
        // res.send("This is the controller for create user");
        res.send({message: "User Created", data: user})
    } catch (error){
        console.log(error)
        res.send({message: "error", error: error.message})
    }
   
}

exports.updateUser = async (req, res)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        const user = await User.findByIdAndUpdate(id, body, {new: true});
        res.status(202).send({message : 'user updated', data: user})
    } catch (error) {
        res.status(500).send({message : 'error'})
    }
}

exports.deleteUser =async (req, res)=>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(202).send({message: "user deleted", data: user})
    } catch (error) {
        res.status(500).send({message: "error", error: error})
    }
}

exports.signup =async (req, res)=>{
    // console.log(req.body)
    try {
        let body = req.body;
        let userKeys = Object.keys(body)
        if(!userKeys) return res.status(400).send({error:"All field are required"})
        const user = await User.findOne({email: req.body.email})
        // console.log(user)
        if(user) return res.status(400).send({error:" User already exist"})
        const updatedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(updatedPassword)
        const newUser = new User({...req.body, password: updatedPassword})
        await newUser.save()
        res.status(201).send({message: "account created", data : newUser})
    } catch (error) {
        
    }
}

exports.login = async (req, res)=>{
    try {
        const existingUser = await User.findOne({email : req.body.email}); 
        if(!existingUser) return res.status(404).send({error: 'account not found, sign up to create an account'})
        console.log(existingUser)
        // if(req.body.password !== existingUser.password) return res.status(401).send({error:" incorrect password"})
        const isMatch = await bcrypt.compare(req.body.password, existingUser.password);
        // console.log(isMatch)
        if(!isMatch) return res.status(401).send({error: 'incorrect Password'})
        res.status(202).send({message: "Login sucessful"})
    } catch (error) {
        
    }
}

// exports.getUserBYId = (req, res)=>{
//     res.send("all user fetched by id ")
// }

//sign up
// exports.signUp = async (req, res)=>{
//     try {
//         let body = req.body;
//         let keys = Object.keys(body)
//         if(!keys.length){
//             return res.status(400).send({message: 'error', error:'all fields are required'})
//         }
//         const userDetails = new User(body);
//         await userDetails.save()
//         res.status(202).send({message: "user created", data: userDetails})
//     } catch (error) {
//         res.status(500).send({message: 'error', error: error.message});
//     }
// }

// exports.logIn = async (req, res) =>{
//     try{
//         const body = req.body;
//         const user = await User.findByUserName()
//         if(!user){
//             return res.status(401).send({message: 'wrong details, input correct details or register in the signup link'})
//         }
//         res.status(200).send({message: 'login successfully'})
//     } catch(error) {
//         res.status(500).send({message:'error', error: error.message})
//     }
// }
