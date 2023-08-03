import { useState } from "react";
function generateGameBoard() {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000);
}
export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard());//after the run the frist time react will ignore that initial value
//   But if we go back to our console every time our component re renders, we see making the initial gameboard printed out, which means this whole function ran. So there's a simple fix here.If you need to set the initial state using some sort of initial state generating function like this right here, generate game board instead of executing it, you can actually just pass the function name in as long as you pass a function in here, React will take that this function, execute it once and take the return value and use that as the initial state and then on future re renders it will just ignore It won't run the function.
// const [board, setBoard] = useState(generateGameBoard);//this will run just one time  
return (
    <button onClick={() => setBoard('hello!')}>Click me to change state</button>//now I force react to call the useState again and again 
  );
}
