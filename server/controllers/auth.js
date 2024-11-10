const db = require('../config/db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10;

exports.signUp = async (req, res) => {
     
    const { email, name, password } = req.body;

    try {
        const userExist = await db.user.findFirst({
            where: {
                email
            }
        })
        if(userExist){
            throw new Error("User Already Exists")
        }
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const user = await db.user.create({
            data: {
                email,
                name,
                password: hashPassword
            }
        })
        
        return res.json({
            message: "User Created Successfully",
            email,
            name
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

exports.signIn = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await db.user.findFirst({
            where: {
                email
            }
        })
        if(!user){
            throw new Error("User Does Not Exist")
        }
        if(!bcrypt.compareSync(password, user.password)){
            throw new Error("Incorrect Password")
        }
        const {password: newPassword, ...userWithOutPassword} = user;
        const token = jwt.sign(userWithOutPassword, process.env.JWT_SECRET_KEY);
        return res.json({
            message: "User logged in successfully",
            userWithOutPassword,
            token
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

exports.getMe = async(req, res) => {
    try {
         return res.json({
            user: req.user
         })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}