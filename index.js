/* 1.Mongoose is javascript object oriented programming library that creates a connection between express and MogoDB web application framework. 
N.B : Mongoose is just like a postman which handle the frontEnd to Data Base
   2. Express is a backEnd web application for Node.js usually for building API
   3. Api: This is backEnd application design to handle (req,res) between the server and the client
   4. MongoDB: This is a NO-SQL data base program which uses Json like document with an optional schemas
*/


// const express=require('express')
// const port = 2121
// const app = express();
// // This is acting as a frontend to MogoDb
// const mongoose= require("mongoose")
// const url = "mongodb://localhost/set05"

// // This allows mongoose to connect mongoDB data base
// mongoose.connect(url).then(()=>{
//     console.log("data base connected successfully")
// }).catch((error)=>{
//     console.log("something is wrong with this connection")
// })

// app.get("/",(req,res)=>{
// res.status(200).json({message:"My API is active"})
// })
// app.listen(port,()=>{
//     console.log(`I am listening on port ${port}`)
// })

// const express = require('express')
// const port = 2121;
// const app = express()
// const mongoose = require('mongoose')
// const url ="mongodb://localhost/Cars"
// mongoose.connect(url).then(()=>{
//     console.log("Data base activated sussefully")
// }).catch((error)=>{
//     console.log("Failed to connect")
// })
//  app.get("/",(req,res)=>{
//      res.status(200).json({message:"Welcome to MongoDB class"})
//  })

//  app.listen(port,()=>{
//      console.log(`I am active on ${port}`)
//  })

const express = require('express')
const port = 2121;
const app = express();
// Import the router from Router module
const myRoute=require("./Router/Router")
const mongoose=require('mongoose')
const url = "mongodb://Localhost/set05"


mongoose.connect(url).then(()=>{
    console.log("Data base successfully created")
}).catch((error)=>{
    console.log("URL not recognised")
})
app.get("/",((req,res)=>{
res.status(200).json({message:"Data available is okay"})

}))
//  Help conver to Json format
app.use(express.json())
// Middleware
app.use("/api",myRoute)

app.listen(port,()=>{
    console.log(`I am active on ${port}`)
})
