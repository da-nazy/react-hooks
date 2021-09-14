import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);
  this.state={
    count:0,
  }
  }
  componentDidMount(){
    console.log("This is componentDidMount. I run after the first render ");
  }
  componentDidUpdate(prevProps,prevState){
    console.log("This is componentDidUpdate I run after any subsequent render")
  }
  componentWillUnmount(){
    console.log("This  is componentWillUmmount and I am about to be removed");
  }
  render(){
    console.log("I'm rendering");
    const {count}=this.state;
    return(
      <div>
        <button onClick={()=>this.setState({count:count+1})}>
          Increase
        </button>
        <button onClick={()=>this.setState({count:count-1})}>
          Decrease
        </button>
        <h1>{count}</h1>
      </div>
    )
}
}
class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
       visible:false,
     }
   }
   render(){
     const{visible}=this.state;
     return(
       <div>
         <button onClick={()=>this.setState({visible:!visible})}>
           show/hid the counter component
         </button>
         {visible&&<Counter/>}
       </div>
     )
   }
}

export default App;