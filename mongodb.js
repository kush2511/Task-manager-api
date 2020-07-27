// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp().toLocaleTimeString());

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error,client) => {
    if(error){
        return console.log("unable to connect to db " + error);
    }

    const db = client.db(databaseName);

    //******insert*****//

    // db.collection("users").insertOne({
    //     name: "Kush Mehta",
    //     age: 24
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert data");
    //     }
    //     console.log(result.ops);
    // });

    // db.collection("users").insertMany([
    //     {
    //         name: "Raj",
    //         age: 25
    //     },
    //     {
    //         name: "Sonal",
    //         age: 47
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert data");
    //     }
    //     console.log(result.ops);
    // });

    // db.collection("tasks").insertMany([
    //     {
    //         description: "This is first task description which is fully completed",
    //         completed: true
    //     },
    //     {
    //         description: "This is second task description which is incompleted",
    //         completed: false
    //     },
    //     {
    //         description: "This is third task description which is also fully completed",
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert data");
    //     }
    //     console.log(result.ops);
    // });

    //******find*****//
    // db.collection("users").findOne({name : "Raj"}, (error,user) => {
    //     if(error){
    //         return console.log("Unable to find data");
    //     }
    //     console.log(user);
    // })

    // db.collection("tasks").find({completed: true}).toArray((error,tasks) => {
    //     console.log(tasks);
    // });

    // db.collection("tasks").find({completed: true}).count((error,count) => {
    //     console.log(count);
    // });

    //******update*****//
    // db.collection("users").updateOne({
    //     _id : ObjectID("5f157f795aa8dd3704b2f806")
    // },{
    //     $set: {
    //         name: "Node"
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection("tasks").updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //******delete*****//
    // db.collection("users").deleteMany({
    //     age: 47
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })
    
    // db.collection("tasks").deleteOne({
    //     description: "This is third task description which is also fully completed"
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

});