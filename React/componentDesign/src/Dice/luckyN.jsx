import { useState } from "react";
// I render this from utils.js
import { getRolls } from "../utils";
import Dice from "./Dice";
import Button from "../Form/Button";
// import "./Lucky.css"

export default function LuckyN({numDice ,winCheck}){//winCheck is function pass as prop that check winner
const [dice,setDice]= useState(getRolls(numDice));
//now dice will be the frist value of getRolls(numDice)
const isWinner=winCheck(dice)
const roll=()=>setDice(getRolls(numDice))
return<div>
    <h2>luck </h2>
    <Dice dice={dice} color='red'/>
    <button onClick={roll}>roll</button>
    <h1>{isWinner&&"you win"}</h1>
    {/* here we use sprite component and this is normal in react */}
    <Button clickFunc={roll}/>{/* here I pass function to roll//and when I click its calles the roll that will cange the will state */}
</div>
}