import './App.css'
import LuckyN from './Dice/luckyN'
import { sum } from './utils'
import UsernameForm from './Form/UsernameForm'
import OldSingupForm from './Form/OldSingup'
import BetterSignupForm from './Form/BetterSignup'
import ShoppingLestForm from './shoppinglist/ShoppingLestForm'
function lessThen8(dice){
  return sum(dice)<8
}
function allSameValue(dice){
  return dice.every((v)=>v===dice[0])//this will check all the value that in the array have the same value
}
function App() {
  // what is going on ? ok componentDesign it is not have something new just how to write code //ok , I expact from to learn how to write component debend on each other but not hard code that mean you can't use them in other place and that order your code //also componentDesign make your code better and more readable // the important thing this make your code custemaisabe
return <div>
  
 {/* <LuckyN numDice={3} winCheck={lessThen8} /> here i pass function lessThen8 in wincheck  as props*/} 
 {/* <LuckyN numDice={2} winCheck={allSameValue} />{/* here I pass another function that do another work */}
  {/* <Dice dice={[3,2,5,6]} color='blue'/>see now i can change the style and color just pass it and number of die this is called componentDesign */}
  {/* forms */}
{/* <UsernameForm/>
<OldSingupForm/> */}

{/* <BetterSignupForm/> */}

{/* shoppingList */}
<ShoppingLestForm/>
  </div>
}

export default App
