import "../Die.css"
export default function Die({val,color}){
return <h1 className="Die" style={{backgroundColor:color}}>{val}</h1>
}