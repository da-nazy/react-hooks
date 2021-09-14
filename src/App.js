import React, {useState} from 'react';


function useInput(e){
  const[value,setValue]=useState('');

  function onChange(event){
    setValue(event.target.value);
  }
  return{
    value,
    onChange
  }
}
function App(){
 // const {value:name,onchange:handleNameChange}=useInput();
 // const {value:surname,onchange:handlesurnameChange}=useInput();
 // const {value:age,onchange:handleAgeChange}=useInput() 
return(
  <form>
    <input
    type="text"
    placeholder="Name"
   // value={name}
   // onChange={handleNameChange}
   {...useInput()}
    />
    <input
    type="text"
    placeholder="Surname"
    //value={surname}
    //onChange={handlesurnameChange}
    {...useInput()}
    />
    <input
    type="text"
    placeholder="Age"
   // value={age}
   // onChange={handleAgeChange}
   {...useInput()}
    />

  </form>
)
}
export default App;
