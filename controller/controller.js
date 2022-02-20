// The controller is handling all the functions i.e CRUD  function

// const userInfo=require("../model/model")
// const postUser = async (req,res)=>{
//     try {
//         // question: Is the .create replacing the push method in express
//         const userPut=await userInfo.create({
//             fullName: req.body.fullName,
//             Course: req.body.Course,
//             age: req.body.age
//         })
//         res.status(201).json({message:"Data created successfully", data: userPut})
//     } catch (error) {
//         res.status(404).json({message:error.message})
//     }
// }
//     module.exports={postUser}


    // const userInfo=require("../model/model")
    // const findAll=async(req,res)=>{
    //     const getUser =await userInfo.find()
    //     res.status(200).json({message:"These are the users",data:getUser})      
    // }

    //  module.exports={findAll}

   
     const userInfo=require("../model/model")
    const findOneUser=async(req,res)=>{
        const getOneUser = await userInfo.findById(req.params.id)
        res.status(200).json({message:"These are the users",data:getOneUser})      
    }

     module.exports={findOneUser}
    
       