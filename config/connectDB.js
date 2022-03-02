const mongoose = require ('mongoose')
require('dotenv').config({ path: './config/.env' })

const connectDB= async () => {
   try {
     await mongoose.connect(process.env.MONGO_URI) 
     console.log('the database is already connected')
    }


    catch (error){
        console.log("database not connected")
    }

}
module.exports =connectDB