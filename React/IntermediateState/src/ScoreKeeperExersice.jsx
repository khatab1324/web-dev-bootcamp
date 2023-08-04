import { useState } from "react"
import{v4 as uuid} from "uuid"
export default function ScoreKeeper2({numPlayers,target}){
    
    const Players=new Array(0).fill({Pscore:0,id:uuid()})
    for(let i =0 ;i<numPlayers ;i++){
        Players.push({Pscore:0,id:uuid()})
     }
    
    
    const [score,setScore]=useState(Players);
      
      function playersScore(id){
     const updatedPlayers = Players.map((player) => {
      if (player.id === id) {
        return {
        ...player,
        Pscore: player.Pscore + 1, // Increase Pscore by 1
      };
    }
    return player; // Return the player as-is for other players
  });

  setScore(updatedPlayers);
  }

        return (
        <div>
          {Players.map((Player)=><p key={Player.id}>player:{Player.Pscore} &emsp;<button onClick={()=>playersScore(Player.id)}> add 1</button></p>)}
          <div style={{marginTop:40}}><label htmlFor="">interVlaue</label>
          <input type="text" name="" id="" /></div>
        </div>
      );
}