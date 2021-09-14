import React,{useState,useEffect} from 'react';
function Counter(){
  const [count,setcount]=useState(0);
  const handleIncrease=()=>setcount(count+1);
  const handleDecrease=()=>setcount(count-1);
  const [color,setColor]=useState('salmon');

    useEffect(()=>{
      console.log(`I'm inside the useEffect function .I will only run upon mounting `)
      return()=>{
        console.log(`I'm removing anything that was setup above!. The last count was ${count}.  `);
      }
    },[])
  function handleColorChange(){
    const nextColor=color==='salmon'?'gold':'salmon';
    setColor(nextColor);
  }
  return(
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleColorChange}>Change Color</button>
      <h1 style={{color}}>{count}</h1>
    </div>
  )
}
function App(){
const [visible,setVisible]=useState(false);
return(
  <div>
    <button onClick={()=>setVisible(!visible)}>
      Show/ Hide the counter component
    </button>
    {visible&&<Counter/>}
  </div>
)
}


export default App;