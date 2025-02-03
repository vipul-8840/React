
 export const ChildComponent=({data})=>{

    return (
        <GrandChild data = {data}/>
    )
 }

 const GrandChild = ({data})=>{
    return (
        <p>My name is: {data}</p>
    )
 }