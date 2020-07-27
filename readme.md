##----> This is just basic CRUD(create read update delete) operation <----##

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Please enter a valid email id");
//                 //console.log("Please enter a valid email id");
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
        // lowercase: true,
        // validate(value){
        //     if(!validator.isLength(value, {min: 6}) || validator.equals(value,"password") == true){
        //         throw new Error("min length must be greater then 6");
        //         //console.log("min length must be greater then 6");
        //     }
        // }
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error("Password can not contain 'password'");
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 18,
//         validate(value){
//             if(value < 0){
//                 throw new Error("You must born first.");
//             }
//         }
//     }
// })

// const user = new User({
//     name: "   Kush     ",
//     email: "  kush@gmail.com ",
//     password: "  password123 ",
//     age: 20
// })

// user.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log("Error", error);
// })

// const Task = mongoose.model("Task", {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: "This is task manager",
//     completed: false
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log("Error", error);
// })


####--->routes witout using async & await<---####

//save
//    user.save().then((result) => {
//        res.status(201).send(result);
//    }).catch((error) => {
//        res.status(400).send(error);
//    })

//findAll
    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });

//find one
    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });

//save
    // task.save().then((result) => {
    //     res.status(201).send(result);
    // }).catch((error) => {
    //     res.status(400).send(error);
    // })

//find
    // Task.find({}).then((tasks) => {
    //     res.send(tasks);
    // }).catch((error) => {
    //     res.status(500).send(error);
    // });

//find one
    // Task.findById(_id).then((task) => {
    //     if(!task){
    //         return res.status(404).send()
    //     }

    //     res.send(task);
    // }).catch((error) => {
    //     res.status(500).send(error)
    // });

//this is second method to validate in user model for password
        // lowercase: true,
        // validate(value){
        //     if(!validator.isLength(value, {min: 6}) || validator.equals(value,"password") == true){
        //         throw new Error("min length must be greater then 6");
        //     }
        // }