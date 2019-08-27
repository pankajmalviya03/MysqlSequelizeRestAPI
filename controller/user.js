const db=require("../models/index")
const User=db.sequelize.models.User;
exports.getuser=(req,res)=>{
    User.findAll().then((result)=>{
        res.send(result)
    })
}
exports.adduser=(req,res)=>{
    User.create(req.body).then((result)=>{
        res.send(result)
    })
}
exports.getbyid=(req,res)=>{
    User.findByPk(req.params.id).then((result)=>{
        res.send(result)
    })
}
exports.updateuser=(req,res)=>{
    User.update({
      password: req.body.password
      },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  
}
exports.deleteuser=(req,res)=>{
        User.destroy({where:{id:req.params.id}}).then((result)=>{
            res.json(result)
        })
}