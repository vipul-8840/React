import { useState, useCallback }  from 'react';
import Todo from './Todo';


const Callback =()=>{
    const[count,setCount]=useState(0);
    const[todo,setTodo]= useState([]);


    const Increment = ()=>{
        setCount(count+1);
    }

   const addToDo = useCallback(()=>{
           setTodo((prev)=>([...prev,'New Entry']))
   },[])
    return(
          <>
              <Todo todo={todo}  addToDo={addToDo}/>
              <br></br>

                <h3>Count : {count}</h3>
                <button onClick={Increment}>Increment</button>
          </>

          
    )



}
export default Callback;