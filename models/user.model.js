const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    userSchema:String,
    email:{type: String,required: true, unique : true },
    password:{type: String,required: true,},
    role:[type : string , enum : ['admin ', 'user'], default: 'user'],
    perf:String,
    phone:Number,
    actve:Boolean,
    photo:String,
});

userSchema.pre('save'async function () {
    //hash the password before saving the user 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
})
module.exports = mongoose.model('user',userSchema); 