import React, {useState} from 'react';

function App(){
// console.log(useState(false))
const [count,setCount]=useState(0);
 const handleClick =()=>setCount(count+1);
 const resetClick=()=>setCount(0);
 const decreaseClick=()=>setCount(count===0?count:count-1);

  return(
    <div>
      <button onClick={handleClick}>
      Increase
    </button>
    <button onClick={decreaseClick}>
      Decrease
    </button>
    <button onClick={resetClick}>
      Reset
    </button>
    <h1>{count}</h1>
    </div>
  )
}
export default App;