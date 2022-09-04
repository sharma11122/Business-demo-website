const mongoose=require("mongoose");


//creating a database
mongoose.connect("mongodb://localhost:27017/abhidynamic").then(()=>{
    console.log("connection succesful");
}).catch((err)=>{
    console.log(err);
})