import { v4 as uuid } from "uuid"//I import that specifically from UUID and I'll rename it as UUID, so import v4 as UUID from UUID.
import { useState } from "react"
export default function EmojeClicker(){
    // this fuction from chat gpt
    function getRandomEmoji() {
        const emojis = ['😊', '😍', '😎', '😃', '😋', '😇', '😏', '😝', '😌', '😆', '🎉', '🚀', '🌈', '🍕', '🐱', '🌻', '🍦', '🎵', '📚', '🍔', '🌊', '🌸', '🎈', '🐶', '🍩', '🚲', '🎓', '🎸', '📷'];
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
      }
    const [emojes,setEmojes]=useState([{id:uuid(),emoje:'😊'}])//look I put in array object that have uniqe id and emoje
    function addEmoje(){
// I will copy what I write in ScoreKeeper
 // if score was just a regular number, not in an object, this would work But it doesn't work when we're working with an object because React is going to look at the identity of the state It's going to compare this object right here, which is scores, and it's going to see if there's a new identity, a new object that is being used to set the state, which is not the case. Remember how objects work behind the scenes. So what this means is any time we set the state with an array or an object, anything that is mutable, basically a non primitive type, we have to set the state with a new object. 
    //to make it in new array we can spread it in array like this
    
    setEmojes(oldEmojes=> [...oldEmojes,{id:uuid(),emoje:getRandomEmoji()}])//Note don't use Push I use it and it was give me numbers and emojes plz don't use the push
    }
    // now I want to remove the spacifce emoje and need to id to do that but I don't use id in change color I thing that becuase all one of them have own div 
   function deleteEmoje(id){
    console.log();
    console.log(id)

    // const index = emojes.indexOf({id});

    // const x = emojes.splice(index, 1);
    const bickemoje=emojes.filter(e=>e.id!==id)//filter is If I just have a simple array like this and I call dot filter on it, it expects a callback.So for each element then it wants a function that returns a boolean.This creates a copy of this array where all of the elements pass.This conditional check is even.
    setEmojes(bickemoje)
    
    }
    function updateThemToHart(){
        // emojes.map((Emoje) => {
        //     return {
        //       ...Emoje,
        //       emoje:Emoje.emoje="❤️" //this will take product from every item and pass this update
            
        //     };
        //   });
        //   setEmojes( [...emojes])//just make them in new array
        
        //code colt 
        setEmojes((prevEmojis) => {
            return prevEmojis.map((e) => {
              return { ...e, emoje: "❤️" };
            });
          });
    }
    return (
        <div>
            {emojes.map((Emoje)=><span key={Emoje.id} style={{fontSize:50}} onClick={()=>deleteEmoje(Emoje.id)}>{Emoje.emoje}</span>)}
            <button onClick={addEmoje}>add emoje</button>
            <button onClick={updateThemToHart}>make all of them hart</button>
        </div>
    )
}