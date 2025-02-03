
import { lazy, Suspense, useState } from "react"
import HighOrderComponent from "./HighOrder/HighOrder";
import Form from "./form/form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Callback from "./Hooks/Callback";
import Side from "./Hooks/Side";
const About = lazy(()=>import('./components/About'))
const Home = lazy(()=>import('./components/Home'))
function App() {
    // return(<BrowserRouter>
    //     <Suspense fallback={<h2>isloading....</h2>}>
    //        <Routes>
    //          <Route path='/' element={<Home/>}/>
    //          <Route path='/about' element={<About/>}/>
    //        </Routes>
    //     </Suspense>
      
      
    //   </BrowserRouter>



    // <div className ='app'>
    //     <HeaderButton/>
    //    <Header title="harkirat bhaiya"/>
    //    <Header title="Vipul"/>
    //    <Header title="kumar"/>
    //    <div>
    //      <button 
    //         onClick={()=>{setCount(count+1)}}>
    //           Counter:{count}
    //       </button>
    //    </div>
       
    // </div>
      /* <HighOrderComponent title="vipul"/>
      <HighOrderComponent title="Kumar"/> */
      /* <Form/> */  
  // )
  return (
     <Side/>
  )
}

// function HeaderButton()
// { 
//   const[title,setTitle] = useState('welcome to learn React');
//   const inputRef = useRef();
  
//   return(
//   <div>
//         <input ref={inputRef} type='text' placeholder="title"></input>
//         <button 
//           onClick={
//             ()=>{setTitle(inputRef.current.value);
//               inputRef.current.value = '';
//             }
//           }>
//           Click me Change the title !
//         </button>
//         <Header title={title}/>
//       </div>
// )
// }
// function Header({title})
// {
//   return(
//        <div>
//           {title}
//        </div>
//   )
// }
export default App;
