const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter a valid email id");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes("password")){
                throw new Error("Password can not contain 'password'");
            }
        }
    },
    age: {
        type: Number,
        default: 18,
        validate(value){
            if(value < 0){
                throw new Error("You must born first.");
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
});

userSchema.virtual("tasks", {
    ref: "Task",
    localField: "_id",
    foreignField: "owner"
})

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;
    return userObject;
}

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = await jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET);
    user.tokens = user.tokens.concat({token: token});
    await user.save();
    return token;
}

userSchema.statics.findByCredentials= async (email,password) => {
    const user = await User.findOne({email: email});
    if(!user){
        throw new Error("This email is not registered");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error("Invalid password");
    }
    return user;
}

//converts the plain text password to hash
userSchema.pre("save", async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

//deletes all the tasks of user when that user is deleted
userSchema.pre("remove", async function(next) {
    const user = this;
    await Task.deleteMany({owner: user._id});
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;