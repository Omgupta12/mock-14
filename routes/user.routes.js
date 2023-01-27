const express = require("express")
const UserModel = require("../model/user.model")
const app = express.Router()

app.get("/", async (req, res) => {
    try {
        const allusers = await UserModel.find()
        // console.log(allusers)
        res.send(allusers)
    }
    catch (e) {
        console.log("err", e)
        res.send({ message: e.message })
    }
})


app.post("/post", async (req, res) => {
    const { name, level, score } = req.body

    try {
        const newuser = new UserModel({ name, level, score })
        await newuser.save()
        console.log(newuser)
        return res.status(201).send({ message:"User Created" })
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})

app.post("/random", async (req, res) => {
    const {score} = req.body

    try {
        const newuser = new UserModel({score })
        await newuser.save()
        console.log(newuser)
        return res.status(201).send({ message:"User Created" })
    }
    catch (e) {
        return res.send({ message: e.message })
    }
})


app.get("/random", async(req, res) => {


    let char = "abcdefghijklmnopqrstuvwxyz" 
    let result = ''

    for(let i=0 ; i<4 ; i++){
        result += char[Math.floor(Math.random() * char.length)];
        console.log('result:', result)
    }
   return res.send({word:result})
});



module.exports = app