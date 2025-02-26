const User = require("../model/userModel")

exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.find();
        // res.send("all user fetched")
        res.send({message: 'user fetched', data : users})
    } catch (error) {
        res.send({message: 'error', error : error})
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

exports.getAllUserBYId = (req, res)=>{
    res.send("all user fetched by id ")
}

//sign up
exports.signUp = async (req, res)=>{
    try {
        let body = req.body;
        let keys = Object.keys(body)
        if(!keys.length){
            return res.status(400).send({message: 'error', error:'all fields are required'})
        }
        const userDetails = new User(body);
        await userDetails.save()
        res.status(202).send({message: "user created", data: userDetails})
    } catch (error) {
        res.status(500).send({message: 'error', error: error.message});
    }
}

exports.logIn = async (req, res) =>{
    try{
        const body = req.body;
        const user = await User.findByUserName()
        if(!user){
            return res.status(401).send({message: 'wrong details, input correct details or register in the signup link'})
        }
        res.status(200).send({message: 'login successfully'})
    } catch(error) {
        res.status(500).send({message:'error', error: error.message})
    }
}
