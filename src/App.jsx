import { useRef } from "react";
import { useState } from "react"

function App() {
  const[count,setCount] = useState(0);
  const[title,setTitle] = useState('welcome to learn React');
  const inputRef = useRef();
    return(
    <div>
      <div>
        <input ref={inputRef} type='text' placeholder="title"></input>
        <button 
          onClick={
            ()=>{setTitle(inputRef.current.value);
              inputRef.current.value = '';
            }
          }>
          Click me Change the title !
        </button>
      </div>
       <Header title={title}/>
       <div>
         <button 
            onClick={()=>{setCount(count+1)}}>
              Counter:{count}
          </button>
       </div>
       
    </div>
  )
}
function Header({title})
{
  return(
       <div>
          {title}
       </div>
  )
}
export default App
