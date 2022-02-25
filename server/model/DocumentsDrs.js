const mongoose = require('mongoose')

const newDocumentsDrs = new mongoose.Schema({
    name: {
        type: String ,
         required : true
         },
    lastname: {
        type: String ,
        required : true
            },
    role: {
        type: String ,
        default: 'Doctor'
    },
                
   titledocument: {
        type: String ,
        required : true
    },

    keywords: {
        type: String ,
        required : true
        
      },

    document: {
         type: String ,
         required : true
                        
    },
})

module.exports =mongoose.model('documentsDrs', newDocumentsDrs)