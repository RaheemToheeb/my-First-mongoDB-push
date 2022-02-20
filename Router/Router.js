// Router consume the controller using express.Router()

// const express = require('express')
// const route = express.Router()
// const {postUser}=require("../controller/controller")

// route.post("/post",postUser)

// module.exports=route

// const express = require('express')
// const route = express.Router()
// const {findAll}=require("../controller/controller")

// route.get("/get",findAll)

// module.exports=route


const express = require('express')
const route = express.Router()
const {findOneUser}=require("../controller/controller")

route.get("/get/:id",findOneUser)

module.exports=route

