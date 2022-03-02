const mongoose = require('mongoose')

const newMessage = new mongoose.Schema({
    name: {
        type: String ,
         required : true
         },
    lastname: {
        type: String ,
        required : true
            },
  
   age: {
        type: String ,
        required : true
    },

    Healthmessage: {
        type: String ,
        required : true
        
                    },
})

module.exports =mongoose.model('message', newMessage)