
const express=require("express");
const mysql=require("mysql");
const cors =require("cors");


const app=express();
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"contactus"
})
app.post('/contactus',(req,res)=>{
    // const contact=new Contactus(req.body);
    const sql="INSERT INTO senddata(`email`,`name`,`subject`,`message`) VALUES (?)";
    const values=[
        req.body.email,
        req.body.name,
        req.body.subject,
        req.body.message
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            // return res.json("ERROR");
            console.log("error")
        }
        return res.json(data);
    })
})

app.listen(8082,()=>{
    console.log("listening");
})