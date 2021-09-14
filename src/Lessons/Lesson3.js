export default function Lesson3(){
    

    // console.log(useState(false))
    const [activated,setActivated]=useState(false);
    const buttonText=activated?'Active':'Inactive';
    //const onClick=()=>setActivated(!activated)
    function onClick(){
      setActivated(!activated)
    }
      return(
        <button onClick={onClick}>
         {buttonText}
        </button>
      )
 
}