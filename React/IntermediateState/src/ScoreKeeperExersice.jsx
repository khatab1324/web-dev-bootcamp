import { useState } from "react"
import{v4 as uuid} from "uuid"
export default function ScoreKeeper2({numPlayers,target}){
    
    const Players=new Array(0).fill({Pscore:0,id:uuid()})
    for(let i =0 ;i<numPlayers ;i++){
        Players.push({Pscore:0,id:uuid()})
     }
    
    
     const [score, setScore] = useState(Players);

     const playersScore = (id) => {
       const updatedPlayers = [...Players];
       const player = updatedPlayers.find((player) => player.id === id);
       if (player) {
         player.Pscore++;
       }
       setScore(updatedPlayers);
     };
     
     const handleClick = (id) => {
       playersScore(id);
     };
     
     return (
       <div>
         {Players.map((Player) => (
           <p key={Player.id}>
             player: {Player.Pscore} &emsp;
             <button onClick={() => handleClick(Player.id)}>
               add 1
             </button>
           </p>
         ))}
       </div>
     );
}