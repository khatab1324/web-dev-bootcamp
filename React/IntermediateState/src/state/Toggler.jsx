import { useState } from "react";
import "./toggler.css"
export default function Toggler(){
    const [isHappy,setIsHappy]=useState(true);
    // you can use more then one useState
    const [count,setCount]=useState(0);
    const  togglerIsHappy=()=>{
        setIsHappy(!isHappy);//this will evaluate the isHappy with new value in the parameter
    setCount(count+1);//and this will juse excute juse one time that when you run the code
        // NOTE coun value it doesn't change yet just when the fuction finesh it will gose to useState and apdate count and then continue  

}
return <div>
<p className="Toggler" onClick={togglerIsHappy}>{isHappy ? '👍️':"👎️"}</p>
<p>you press :{count}</p>
</div>
}