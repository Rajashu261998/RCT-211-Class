import * as types from './actionTypes'

const getTaskRequest =()=>{
    return{
        type:types.GET_TODOS_REQUEST
    }
}

const getTaskSuccess =()=>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload,
    }
}

const getTaskFailure =()=>{
    return{
        type:types.GET_TODOS_FAILURE,

    }
}

export {getTaskFailure,getTaskSuccess,getTaskSuccess}

// let payload=[{}]

// let obj ={payload}