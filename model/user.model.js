const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
    name:{type:String},
    level:{type:String},
    score:{type:String}
},
{ timestamps: true }
)
const UserModel = model("user",UserSchema)

module.exports = UserModel