export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = { color: isWinner ? "green" : "red" };//here I put if condition it ture the styles will be green and if it false the styles will be red
    // you can say if(num==num2){return<div> you when </div>} but is long we search about small componend
    return (
      <div className="DoubleDice" style={styles}>
        <h2>Double Dice</h2>
        {isWinner && <h3>You win!</h3>}{/* this work like this you know but I want make note . && work like this if the first condition ture tun the second condition */}
        <p>Num1: {num1}</p>
        <p>Num2: {num2}</p>
      </div>
    );
  }
  
  // export default function DoubleDice() {
  //   const num1 = Math.floor(Math.random() * 3) + 1;
  //   const num2 = Math.floor(Math.random() * 3) + 1;
  
  //   return (
  //     <div>
  //       <h2>Double Dice</h2>
  //       {num1 === num2 ? <h3>You win!</h3> : null}//here just show you you win message if you write <h1>{num1 === num2 ? "You Win!" : ""}</h1> it will show to the user emdy h1 but this line if the condition is not work h1 will not show up
  //       <p>Num1: {num1}</p>
  //       <p>Num2: {num2}</p>
  //     </div>
  //   );
  // }
  
  // export default function DoubleDice() {
  //   const num1 = Math.floor(Math.random() * 3) + 1;
  //   const num2 = Math.floor(Math.random() * 3) + 1;
  //   return (
  //     <div>
  //       <h2>{num1 === num2 ? "You Win!" : "You Lose :("}</h2>//here i but the logic without variable
  //       <p>Num1: {num1}</p>
  //       <p>Num2: {num2}</p>
  //     </div>
  //   );
  // }
  // export default function DoubleDice() {
  //   const num1 = Math.floor(Math.random() * 3) + 1;
  //   const num2 = Math.floor(Math.random() * 3) + 1;
  //   const result = num1 === num2 ? "You Win!" : "You Lose :(";//here we make a variable that have message
  //   return (
  //     <div>
  //       <h2>{result}</h2>
  //       <p>Num1: {num1}</p>
  //       <p>Num2: {num2}</p>
  //     </div>
  //   );
  // }
  