
import React, { useEffect, useState } from 'react'

const Side = () => {
    const [count,setCount] = useState(0);
    const[name,setName]=useState('vipul');
    const[time,setTime] = useState(0)
    function Increment()
    {
        setCount(count+1);
    }
    useEffect(()=>{
       document.title = `count:${count}`
    },[count])
    useEffect(()=>{
         console.log(name);
    },[name])
//clean up login in useEffect

    useEffect(()=>{
        const timer = setInterval(()=>setTime((prev)=>prev+1),1000);
        return ()=>clearInterval(timer);
    },[])

  return (
    <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                height: "100vh",
                backgroundColor:"rgba(240, 162, 120, 0.94)"
    }}>
        <div style={{textAlign:'center'}}>
                <h3>UseEffect Topic</h3>
                <br></br>
                <h6>Count:{count}</h6>
                 <br></br>
                <button onClick={Increment}>Increase</button>
                <br></br>
                <br></br>
                <p>Name: 
                 <span>{name}</span>
                </p>
                <input 
                  type='text'
                 placeholder=''
                 value={name} 
                 onChange={(e)=>{setName(e.target.value)}}/>
                 <div>Timer:{time} </div>
                 
        </div>
    </div>
  )
}

export default Side;
