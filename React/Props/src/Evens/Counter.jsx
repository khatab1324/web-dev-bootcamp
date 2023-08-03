export default function Counter({num}){
    const incrementNum=()=>{
        num +=1;
        console.log(num)
    }
    return<div><p>the count without state :{num}</p>
    <button onClick={incrementNum}>Increment</button>
    </div>
}