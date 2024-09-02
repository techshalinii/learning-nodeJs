import express from 'express';
import path from 'path';
const app = express();

app.get("/getproducts",(req, res) =>{


    res.send("Hi");     //send message

   res.statusCode(400);     //send status code

    // send JSON
    res.json({
    success:true,
    products: []
   }) 

    res.status(400).send("Hii");    //message in the page and status in the console


   //send file
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation, "index.html"));


})
app.listen(5000,() =>{
    console.log("Server is working");
});