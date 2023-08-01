export default function SlotGame({val1,val2,val3}){
    const isWinner=val1===val2&&val2===val3;
    
    return<div>
        <button>slot</button>
        
        {
       isWinner?<div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{color:"green"}}>I am here</h2></div>
            :
            <div>
            <h1>{val1} {val2} {val3}</h1>
            <h1 style={{color:"red"}}>you loos</h1>
        </div>
        }
        
    </div>
}