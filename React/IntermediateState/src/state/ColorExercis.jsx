import { useState } from "react";
function randomChoice(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
export default function RandomColor({colors}){
const [color, setColor] = useState(randomChoice(colors));
const changeColor = () => {
  const randomColor = randomChoice(colors);
  setColor(randomColor);
};
return  <div>
<p style={{backgroundColor:randomChoice(colors), width:100 ,height:80} }onClick={changeColor}></p>
</div>
}
