// states is data specific to an inctace of a component . can change //that mean if there value should show in dom or in the page
// what goes in state ?
// Data fetched from an API  //becuse it need time becuase if that we need to wait
// From Information
// Avariable that "decides"whether something is showing or hidden //and we need state to do that . if you increment a value jsut use state
// Ask yourself :"Will this ever change?".if so , it should go in state somehere
// to use state use useState()
// useState it one of 15 hook https://react.dev/reference/react

// Using State //we create state using the useState hook const [count,setCount]=useState(0);//here we distraction the tow element 
// this returns an array containing tow elements:the piece of state itself (count) .A fuction to change the piece of state (setCount)
// you must call useState inside a component

// you should import state before use it , it come with react
import {useState} from "react";
export default function CounterWithState(){
    console.log("reset all this component just this component")

    // const arr= useState(0)//this will return an array
    // console.log(arr);// it will show you [0, ƒ] like what we say above the first one element and the second one is function
    const [num,setNum]=useState(0);//and this will juse excute juse one time that when you run the code
    // you must call useState inside a component
    console.log(num)
    function ChangeNumber(){
        setNum(num+1)//new we update the num by using setNum//this will evaluate the isHappy with new value in the parameter
    // and when you setNum react reset all the component
    // NOTE num value it doesn't change yet just when the fuction finesh it will gose to useState and apdate num and then continue  
    console.log("old num :" + num); 
    }
    return<div><p>the count with state :{num}</p>
    <button onClick={ChangeNumber}>Increment</button>
    </div>
}