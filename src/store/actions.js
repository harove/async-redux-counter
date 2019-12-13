import {ADD_REQ,ADD_OK,DEC_REQ,DEC_OK} from './const'

export const addReqAC = (storeNumber) => {
    console.log(storeNumber)
    return {
        type:ADD_REQ,
        payload:{
            number:storeNumber+1,
        }
    }
}

export const decReqAC = (storeNumber) => {
    console.log(storeNumber)
    return {
        type:DEC_REQ,
        payload:{
            number:storeNumber-1,
        }
    }
}