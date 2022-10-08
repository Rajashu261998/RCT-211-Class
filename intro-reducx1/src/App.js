import React,{useState} from 'react'
import './App.css';
import { store } from './Redux/store';

function App() {

  const {dispatch, subscribe}=store
  const {count} =store.getState()
  const [update, setUpdate] = useState(0)

  subscribe(()=>{
    setUpdate(()=>update+1)
  })

  const handleAdd=()=>{
    dispatch({type:"ADD"})
  }
  return (
    <div className="App">
      <h1>Counte{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={()=>dispatch({type:"REDUCE"})}>Reduce</button>
     
    </div>
  );
}

export default App;
