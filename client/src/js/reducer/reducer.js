import {combineReducers} from "redux"


import authReducer from "./authReducer"

import messageReducer from "./messageReducer"


import adminReducer from "./adminReducer"

import patientReducer from "./patientReducer"

import documentsDrsReducer from "./documentsDrsReducer"



const reducer = combineReducers({authReducer, messageReducer, adminReducer, patientReducer, documentsDrsReducer})



export default reducer



