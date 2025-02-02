
 
import React, { useState,useRef } from 'react'

const Form = () => {
    const[inputValue,setInputValue]=useState('');
    const InputRef = useRef();
    const changeHandle=(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

       alert(" Controlled: " + inputValue + " Uncontrolled: " + InputRef.current.value)
       setInputValue('');
       InputRef.current.value = '';
    }
  return (
     <form onSubmit={handleSubmit}>
       <label >
         Name:
         <input 
          type="text"
          value={inputValue} 
         onChange={changeHandle}/>
       </label>
       <br/>
       <label >
         SurName:
         <input type="text" ref={InputRef}/>
       </label>
       <br/>
       <button type="submit">Submit</button>
     </form>
  )
}

export default Form
