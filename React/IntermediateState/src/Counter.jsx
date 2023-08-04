import { useState } from "react";
export default function Counter(){
    console.log("re-rendered")
const [count,setCount]=useState(0)
function addOne(){
    setCount(count+1)//this is not the right way //becuase the new value debend on old value 
}
function addthree(){
    // setCount(count+1)
    // // this code run and count stell 0
    // setCount(count+1)
    // // this code run and count stell 0
    // setCount(count+1)
    // this code run and count stell 0

    // the right way to set new value is pass apdate fuction
    setCount(currentCount=>currentCount+1)
    //And if I do this three times, react is going to queue these up, run this one first, pass through the correct value of current count and whatever that returns.If it starts at zero, this returns a new count of one.It will then pass that through to the second call.
    setCount(currentCount=>currentCount+1)
    setCount(currentCount=>currentCount+1)
}
function setToTen(){
    setCount(10)
    // if you press on the butten setToTen the value of the count will set to ten but if you press on it again it will not console.log(re_render) becuase it ,So calling set, state or set count in our case is not enough to just force a rerender. React is looking to see if the value is new.
}
return <div>
    <p>count is : {count}</p>
    <button onClick={addOne}>+1</button>
    <button onClick={addthree}>+3</button>
    <button onClick={setToTen}>set to ten</button>
</div>
}