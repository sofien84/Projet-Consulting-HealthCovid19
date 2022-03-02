const express = require ('express')
const Message = require ('../model/Message')
const router = express.Router()
const isAuth=require('../middleware/isAuth')





//POST message: 
router.post("/addmessage", isAuth, async (req , res)=>{
      const { name, lastname, age, Healthmessage }= req.body
      try {
         const message = new Message ({name, lastname, age, Healthmessage})
      await message.save()
      res.send("message send")
    } catch (error) {
      console.log(Error)
  }
 
       
})

     


//GET :
router.get("/getmessage", isAuth, async (req, res) => {
  try{
      const data=await Message.find({}).exec()
      res.json({message:data})
  }
  catch (error) {
    res.send("get message failed",error)
  }
}) 



module.exports = router