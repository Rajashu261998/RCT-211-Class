import React, {useState,useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log("1")
    useEffect(()=>{
        console.log("2")
        return ()=>{
            console.log("3")
        }
    },[count])
    useEffect(()=>{
        console.log("4")
        return ()=>{
            console.log("5") 
        }
    },[])
    useEffect(()=>{
        console.log("6")
        return ()=>{
            console.log("7")
            
        }
    }, [count])
    console.log("8")


    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={()=>{setCount(()=>count+1)}}>Add</button>
        </div>
    )
}

export default Counter