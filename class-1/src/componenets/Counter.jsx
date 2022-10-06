import React, {useState,useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{

    }, [])

    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={()=>{setCount(()=>count+1)}}>Add</button>
        </div>
    )
}

export default Counter