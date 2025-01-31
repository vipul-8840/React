
const Message = ({title})=>{
    return (<h1>{title}</h1>)
}

function HighOrder(Component)
{
  return  function enhanceComponent(props)
  {
    return (
        <Component {...props}>
        </Component>
    )
  }
}

const HighOrderComponent = HighOrder(Message);
export default HighOrderComponent