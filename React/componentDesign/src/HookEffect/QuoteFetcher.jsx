import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function QuoteFetcher(){
    const [quote,setQuote]=useState({text:"",author:""})//if you add fuction pramise that call random quote the state doesn't work with promises we need useEffect
    // useEffect(() => {//don't use async imadetly after useEffect like this useEffect(async) becuase useEffct callback
    //     async function getInitialQuote() {
    //       const response = await fetch(RANDOM_QUOTE_URL);
    //       const jsonResponse = await response.json();
    //       const randomQuote = jsonResponse.quote;
    //       setQuote(randomQuote);
    //     }
    //     getInitialQuote();//here i invoked it
    //   }, []);
    useEffect(() => {
        fetchQuote();
      }, []);
    
    async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    console.log(randomQuote)
    setQuote(randomQuote)
  }
return(
    <div>
        <h2>{quote.text}</h2>
        <p style={{marginLeft:300}}>{quote.author}</p>
        <br />
        <button onClick={fetchQuote}>Get quote Using handler</button>
    </div>
)
}