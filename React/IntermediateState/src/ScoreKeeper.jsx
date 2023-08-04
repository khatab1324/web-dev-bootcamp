import { useState } from "react";//thes to relode the page with new value  there state you can read the note
function ScoreKeeper({numPlayer,target}) {
    
    const [score,setScore]=useState({p1Score:0,p2Score:0});//you can pass more then value in one object 
  function playerOneScore(){
    // if score was just a regular number, not in an object, this would work But it doesn't work when we're working with an object because React is going to look at the identity of the state It's going to compare this object right here, which is scores, and it's going to see if there's a new identity, a new object that is being used to set the state, which is not the case. Remember how objects work behind the scenes. So what this means is any time we set the state with an array or an object, anything that is mutable, basically a non primitive type, we have to set the state with a new object. 
    //to make it in new object we can spread it in object like this
    // const newScore={...score,p1Score:score.p1Score+1};//if you don't read the above talk and ask why spread then obj in new obj ? that becuase the react work if the value change it will run again but obj it refrence to place in memorey and becuase of that we need to change that place to re_run
    setScore(oldScore=>{return{...oldScore,p1Score:oldScore.p1Score+1}})//its better to use callback sentax becase the value of score will not change in this scope
  }
  function playerTowScore(){
    setScore(oldScore=>{return{...oldScore,p2Score:oldScore.p2Score+1}})//its better to use callback sentax becase the value of score will not change in this scope
  }
    return (
    <div>
      <p>Player 1:{score.p1Score} </p>{/* recap: if this was just a regular number, not in an object, this would work But it doesn't work when we're working with an object because React is going to look at the identity of the state It's going to compare this object right here, which is scores, and it's going to see if there's a new identity, a new object that is being used to set the state, which is not the case. Remember how objects work behind the scenes. So what this means is any time we set the state with an array or an object, anything that is mutable, basically a non primitive type, we have to set the state with a new object. */}
      <p>Player 2:{score.p2Score} </p>
      <button  onClick={playerOneScore}>+1 Player 1</button>
      <button onClick={playerTowScore}>+1 Player 2</button>
      
      <div style={{marginTop:40}}><label htmlFor="">interVlaue</label>
      <input type="text" name="" id="" /></div>
    </div>
  );
}

export default ScoreKeeper;
