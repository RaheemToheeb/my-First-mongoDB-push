/*
Using data javascript Object

const Citizens=[{
         id: 1,
        name:"Victor",
        Tribe:"Igbo",
        Food:"Amala",
        Interest:"Software Engineer"
    },
    
    {    id:2,
        name:"Raheem",
        Tribe:"Hausa",
        Food:"Tuwo",
        Interest:"Backend Engineer"
    },
    {   id:3,
        name:"Nelson",
        Tribe:"Yoruba",
        Food:"Semolina",
        Interest:"FrontEnd Developer"
    }
]*/
const Citizens=require ("./citizen.json")
const express = require("express")
const port = 2022;
const app= express()
app.use(express.json())

app.get("/Citizens", (req,res)=>{
    //  check if the content is empty
     try {
         if(Citizens.length<1){
             res.json({message:"No citizen found"})
         }else{
             res.json({message:"We have citizens present",data:Citizens})
         }
         
     } catch (error) {
         console.log(error.message)
     }
 })

//  app.listen(port,()=>{
//         console.log(`I am available on ${port}`)})



//Targeting one student

// 1. Targetting by indext positions 
app.get("/Citizen", (req,res)=>{
    //  check if the content is empty
     try {
         if(Citizens.length<1){
             res.json({message:"No citizen found"})
         }else{
             res.json({message:"We have citizens present",data:Citizens[1]})
         }
         
     } catch (error) {
         console.log(error.message)
     }
 })


//2. Targetting one Citizen by mapping to Id

app.get("/Citizen/:id",(req,res)=>{
    // declare id
    id = parseInt(req.params.id);
    Citizen=Citizens.find((Citi)=>Citi.id===id)

    // check if id is valid
    if(!id){
        res.json({message:"Id not available in data base"})
    }else{
        res.status(200).json({message:"This Citizen hold the Id",data:Citizen})
    }
})

// Post or create Citizen in data base

app.post("/Citizens",(req,res)=>{
    try{
        // create new citizen 
        const newCitizen={
            id:Citizens.length+1,
            name:req.body.name,
            Tribe:req.body.Tribe,
            Food:req.body.Food,
            Interest:req.body.Interest 
        }
        Citizens.push(newCitizen)
        res.status(201).json({message:"new Citizen created",data:newCitizen})

    }catch(error){
        console.log(error.message)
    }
})

// update function

app.patch("/Citizens/:id",(req,res)=>{
    try{
        const id =parseInt(req.params.id)
      const  CitizenId=Citizens.find((Citi)=>Citi.id===id);

            CitizenId.name=req.body.name,
            CitizenId.Tribe=req.body.Tribe,
            CitizenId.Food=req.body.Food,
            CitizenId.Interest=req.body.Interest 

            res.status(200).json({message:"Data updated",data:CitizenId})
        


    }catch(error){
        console.log(error.message)
    }
})

// Delete Function in data base

app.delete("/Citizens/:id",(req,res)=>{
    try {
        id=parseInt(req.params.id);
       const  CitizenId=Citizens.find((Citi)=>Citi.id===id);
        if(!id){
            res.status(404).json({message:`This Id is not valid ${req.params.id}`})
        }else{

            // check for the index position of the id we want to deleted

            const index=Citizens.indexOf(CitizenId);
            Citizens.splice(index, 1)
            res.status(200).json({message:`Citizen with Id ${req.params.id} was deleted succesfully`})

        }
        
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(port,()=>{
    console.log(`I am available on ${port}`)})
