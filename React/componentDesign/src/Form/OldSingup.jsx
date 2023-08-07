import { useState } from "react"
export default function OldSingupForm(){
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")

    const updateFristName = (event)=>{
        console.log(event.target.value)
        setFirstName(event.target.value)
    }
    const updateLastName = (event)=>{
        console.log(event.target.value)
        setLastName(event.target.value)
    }
    function handleSubmit(){
        console.log(firstName+lastName)
    }
    return(
        <div>
            
                <h3>Singup</h3>
                <label htmlFor="firstName">firstName</label>
                <input type="text" placeholder="firstName" value={firstName} onChange={updateFristName} id="firstName"/>
                
                <label htmlFor="lastName"> last name</label>
                <input type="text" name="" id="lastName" value={lastName} onChange={updateLastName}/>
                <button onClick={handleSubmit}>submit</button>
          
        </div>
    )
}