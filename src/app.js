const express=require("express");
const app=express();
const path =require("path");
const hbs=require("hbs");
const port=process.env.PORT || 3000;
const User=require("../models/usermsg");
require("../db/conn");


//Setting path

const staticpath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");


app.use(express.urlencoded({extended:false}));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));

//setting view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
   res.render("index");
})

 app.post("/contact",async(req,res)=>{

    try{
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    }
    catch(error){
        res.status(500).send(error);
    }
     
 })

app.listen(port,()=>{
    console.log("server is runiing");
})