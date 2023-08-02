// function handleFormSubmit(evtObj){//remember onSubmit will pass the event object 
//     evtObj.preventDefault();//this will prevent refresh
// console.log("no refrash any more")
// }
// export default function From(){
//     return <form  onSubmit={handleFormSubmit}>
//         <button>submit</button>
//     </form>
// }

export default function clicker({messege,buttonText}){
    return<button onClick={()=>{alert(messege)}}>{buttonText}</button>
}