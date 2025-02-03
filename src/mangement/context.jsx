const { createContext } = require("react");

const Bulbcontext = createContext();

export const BulbProvider  = ({children})=>
{
   const[bulbOn,setBulbOn] = useState('false');

     return(
          <Bulbcontext.Provider value = {{bulbOn,setBulbOn}}>
              {children}
          </Bulbcontext.Provider>
     )


}