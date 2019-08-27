const express=require("express")
const route=express.Router()
const controller=require("../controller/user")
route.get("/",controller.getuser)
route.post("/",controller.adduser)
route.get("/:id",controller.getbyid)
route.put("/:id",controller.updateuser)
route.delete("/:id",controller.deleteuser)
module.exports=route

