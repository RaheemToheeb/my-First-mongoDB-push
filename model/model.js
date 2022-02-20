// const mongoose = require ("mongoose");
//  const userSchema = mongoose.Schema({
//      fullName:{
//          type:String,
//          require:true
//      },
//      course:{
//         type:String,
//         require:true
//     },
//     age:{
//         type:String,
//         require:true
//     }
//  })

const mongoose = require('mongoose')
userSchema=mongoose.Schema({
    fullName:{
          type:String,
          required:true
    },

    age:{
        type:String,
        required:true
  },

  Course:{
    type:String,
    required:true
},
})

 module.exports=mongoose.model("user",userSchema)