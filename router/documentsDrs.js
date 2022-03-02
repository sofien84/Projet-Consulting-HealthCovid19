const express = require ('express')
const DocumentsDrs = require ('../model/DocumentsDrs')
const router = express.Router()
const isAuth=require('../middleware/isAuth')



//POST documentsDrs: 
router.post("/adddocumentsDrs",isAuth,async(req , res)=>{
   
    const { name, lastname, role,  titledocument, keywords, document }= req.body
    try {
        const documentsDrs = new DocumentsDrs ({name, lastname, role,  titledocument, keywords, document})
      
        await documentsDrs.save()
        
        res.send("add document with success")
    } catch (error) {
        console.log(Error)
    }
   
   
        
})






//GET documentsDrs: 
router.get("/getdocumentsDrs",async (req, res) => {
    try{
        const data=await DocumentsDrs.find({}).exec()
        res.json({documentsDrs:data})
    }
    catch (error) {
      res.send("get documentsDrs failed",error)
    }
}) 









//EDIT documentsDrs: 
router.put("/edit/:_id",async (req, res) => {
    const{_id} = req.params
    const { name, lastname, role,  titledocument, keywords, document } = req.body
    DocumentsDrs.findByIdAndUpdate({_id}, {$set : {name, lastname, role,  titledocument, keywords, document}})
        .then (documentsDrs => res.send({'document is already documents up edited ': documentsDrs}))
        .catch (error =>console.log(error))
    
})


//DELETE documentsDrs: 
router.delete('/delete/:_id', (req, res) => {
    const{_id} = req.params
    DocumentsDrs.findOneAndDelete({_id}) 
    .then (documentsDrs => res.send({'document is already deleted ': documentsDrs}))
    .catch (error =>console.log(error))

})






module.exports = router