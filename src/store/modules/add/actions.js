import {ADD_REQ,ADD_RESPONSE_OK,DEC_REQ,DEC_RESPONSE_OK} from './const'

export const addReqAc = (storeNumber) => {
    return {
        type:ADD_REQ,
        payload:{
            loading:true,
        }
    }
}

export const addReqAsyncOkAc = (storeNumber) => {
    return {
        type:ADD_RESPONSE_OK,
        payload:{
            number:storeNumber+1,
            loading:false,
        }
    }
}

export const addAsyncAc = (storeNumber) => {
    return (dispatch) => {
        dispatch(addReqAc());
        setTimeout(()=>{
            dispatch(addReqAsyncOkAc(storeNumber));
        },3000)
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