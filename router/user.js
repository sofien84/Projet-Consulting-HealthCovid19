const express = require ('express')
const bcrypt = require ('bcrypt')
const User = require ('../model/User')
const {validator , loginRules , registerRules} = require('../middleware/Validator')
const router = express.Router()
const jwt = require('jsonwebtoken')
const isAuth = require('../middleware/isAuth')

// Register
router.post('/register', registerRules(), validator, async(req, res)=> {
    const { name, lastname, email, age, phone, password, role } = req.body
   try {
       let user = await User.findOne({email})
       if (user) {
          return res.status(400).send('user already exist')
      }
         user = new  User ({name, lastname, email, age, phone, password, role})
         const salt = 10 
         const hashedPassword = await bcrypt.hash(password, salt)
         user.password = hashedPassword
         user.save()

         const payload ={
            _id : user._id
        }
        const token = await jwt.sign(payload , process.env.secretOrkey)


         res.send({user : " succes register", user, token})
        }   

     catch (error) {
      console.log(error)
   
    }
})



// Login
router.post("/login" ,  async (req , res )=>{
    const { email , password} = req.body
try{
   const user = await User.findOne({email})
   if(!user)
   {
    return res.status(400).send({msg : "bad credential email"})
   }
    const isMatch= await bcrypt.compare(password , user.password) ;

    if(!isMatch)
    {
    return res.status(400).send({msg : "bad credential password"})
   
    }

    const payload ={
        _id : user._id
    }
const token = await jwt.sign(payload , process.env.secretOrkey)
    res.status(200).send({msg : "login Success" , user  ,token})
}
catch(error)
{
    return res.status(500).send({msg : "error server"})
    
} 

})
     




   


    
router.get('/me',  isAuth, (req, res)=>{
res.status(200).send({user : req.user})
})  

    //GET :
router.get('/api/user', async (req, res) => {
    try{
        const data = await User.find({}).exec()
        res.json({user:data})
    }
     catch (error) {
      res.send("get user failed",error)
    }
}) 


   //GET BY ID:
router.get('/api/user/:_id', async (req, res) => {
   
    let{_id} = req.params
        User.findById({_id})
        .then (user => res.send({'oneuser': user}))
        .catch (error =>console.log(error))
    
}) 







//PUT : 
router.put('/edit/:_id', (req, res) => {
    const{_id} = req.params
    const { name, lastname, email, age, phone } = req.body
    User.findByIdAndUpdate({_id}, {$set : {name, lastname, email, age, phone}})
        .then (user => res.send({'user is already up edited ': user}))
        .catch (error =>console.log(error))
    
})


//DELETE : 
router.delete('/delete/:_id', (req, res) => {
    const{_id} = req.params
    User.findOneAndDelete({_id}) 
    .then (user => res.send({'user is already deleted ': user}))
    .catch (error =>console.log(error))

})

module.exports = router