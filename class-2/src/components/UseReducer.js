import React,{useReducer} from 'react'

const Navbar = () => {
    const [count, dispatch] = useReducer((state,action)=>{
        // if(action.type==="Add"){
        //     return state+1
        // }
        // if(action.type==="Sub"){
        //     return state-1
        // }
        if(action.type==="Add")
        {
            const incresaeBy=action.payload ||1
            return incresaeBy+state
        }
        if(action.type==="Sub")
        {
            const decreaseBy=action.payload||1
            return state -decreaseBy
        }
    },20)
  return (
    <div>
        <h1>Click {count}</h1>
        {/* //* <button onClick={()=>dispatch({type:"Add"})}>Inc</button>
        <button onClick={()=>dispatch({type:"Sub"})}>Dec</button> */}
         <button onClick={()=>dispatch({type:"Add", payload:2})}>Inc</button>
        <button onClick={()=>dispatch({type:"Sub", payload:3})}>Dec</button> 
    </div>
  )
}

export default Navbar