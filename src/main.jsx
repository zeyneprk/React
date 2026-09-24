import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

/*
   const [count, setCount] = useState(0);
 
   function handleIncrement(){
     console.log("handle increment FIRED");
     setCount(count + 1);
     setCount(count => count + 1);
     console.log(count);
   }
   function handleDecrement() {
     console.log("handle decrement FIRED")
     setCount(count -1);
   }
 
   return (
        <div>
           <h1>Count : {count}</h1>
           <div> 
             <button onClick = {handleIncrement} >Increment </button>
             <button onClick = {handleDecrement}>Decrement</button>
           </div>
        </div>
   )
 }
   */

