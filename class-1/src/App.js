
import './App.css';
import Counter from './componenets/Counter';
import {useState} from 'react'
function App() {
  const [showCounter, setShowCounter]= useState(true)
  return (
    <div className="App">
    {showCounter && < Counter />}
    <button onClick={()=>setShowCounter((prev)=>!prev)}>Toggle</button>

    </div>
  );
}

export default App;
