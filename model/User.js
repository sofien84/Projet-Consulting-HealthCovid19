const mongoose = require('mongoose')
 
    const newUser = new mongoose.Schema({
    name: {
        type: String ,
         required : true
         },
    lastname: {
        type: String ,
        required : true
            },
    email: {
        type: String ,
        required : true
            },
    password: {
        type: String ,
        required : true
            },

    age: {
        type: String ,
        required : true
    },
    phone: {
        type: String ,
        required : true
    },
    role: {
        type: String ,
        enum : ['Patient','Doctor', 'Admin'],
        default: 'Patient'

            },
})

module.exports =mongoose.model('user', newUser)
