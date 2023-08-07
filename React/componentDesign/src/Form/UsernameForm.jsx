import { useState } from "react"
export default function UsernameForm(){
    const[username,setUsername]=useState("khattab")
    const updateUsername = (event)=>{
        console.log(event.target.value)
        setUsername(event.target.value)//now the value of the username will change in every time we add new value
    }
    return(
        <div>
            <form action="">
                <h3>username</h3>
                <label htmlFor="username">username</label>{/* react use htmlFor not for becuase for excist in js */}
                <input type="text" placeholder="username" value={username} onChange={updateUsername} id="username"/>{/* without useState you can't update the value of username */}
                {/* this event onChange will terger the uservalue of it change it will run the code inside it in our case is updateUsername */}
                <button>submit</button>
            </form>
        </div>
    )
}