const { body, validationResult } = require('express-validator');

const registerRules = () =>[
    body("name", "name is required and must be a string ").notEmpty(),
    body("lastname", "lastname is required and must be a string ").notEmpty(),
    body("email", "invalid email ").isEmail(),
    body("password", "password containt at least 6 characters ").isLength({
        min : 6 ,
        max : 12 ,
    }),
    body("age", "age is required and must be a string ").notEmpty(),
    body("phone", "phone is required and must be a string ").notEmpty(),
    body("role", "role is required and must be a string ").notEmpty(),
    
] ;


const loginRules = () =>[
    
    body('email' , "email is required").isEmail(),
    body('password' , "password must containt at least 6 characters ").isLength({
        min : 6 ,
        max : 12 ,
    }),
]

const validator = (req , res , next )=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array().map((el)=> ({
          msg : el.msg
        })),
    });
    }
   next();
}


module.exports = {
    validator ,
    loginRules ,
    registerRules
} 