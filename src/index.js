require("./db/mongoose");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// app.use((req,res,next) => {
//     if(req.method){
//         res.status(503).send("site is under mainteance");
//     }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up on port " + port);
})