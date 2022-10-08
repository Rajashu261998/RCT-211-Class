const reducer =(oldstate,action)=>{
    switch(action.type){
       case "ADD":
       return {
        ...oldstate,
        count:oldstate.count+1,
       };
       case "REDUCE":
        return {
            ...oldstate,
            count: oldstate.count-1,
        }
        default:
            return oldstate;
    }
}

export {reducer}