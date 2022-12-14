import * as types from './actionTypes'


const initialState={
    todos:[],
    isLoading:false,
    isError:false,
}
const reducer =(oldState=initialState, action)=>{
    const {type,payload}=action;
    switch(type){
        case type.GET_TODOS_REQUEST:
            return {
                ...oldState,
                isLoading:true,
            };
            case type.GET_TODOS_SUCCESS:
                return {
                    ...oldState,
                    isLoading:false,
                    todos:payload,
                };
            case type.GET_TODOS_FAILURE:
                return {
                    ...oldState,
                    isLoading:false,
                    isError:true,
                };
                default:
                   return oldState

    }
}
export {reducer}

