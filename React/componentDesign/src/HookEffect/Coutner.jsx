// we use effect => one of the most common ways to use it is to load initial data from an API. On the first render of a component.
import { useState,useEffect } from "react"
export default function Counter(){
    const [counter,setCounter]=useState(0)
    const [name,setName]= useState("")
    const increment=()=>{
setCounter(currentCounter=>currentCounter+1)
    }
useEffect(function myEffect(){
    //it will render when you render
// my effect always run after frist render
// by default my effect run after all-re_render
    console.log("my effect calld")
    //now the effect run in every time you type
},
[counter],//now I tell to it , run just when counter change 
)
useEffect(function myEffect2(){
    console.log("run in the first time")
},
[],//this mean jsut run in the first time
)
const handleChange=(e)=>{
setName(e.target.value)
}
return(
<div>
     <h3>{counter}</h3>
    <button onClick={increment}> increment 1</button>
    <br />
    <h4>your name {name}</h4>
 <br />
    <input type="text" onChange={handleChange} />
</div>
   
)    
}