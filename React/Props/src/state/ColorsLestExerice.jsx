import RandomColor from "./ColorExercis"
import "./ColorsLestExerices.css"
export default function ColorsListRandom({colors}){
    const box=[]
    for (let i = 0; i < 25; i++) {
        box.push(<RandomColor colors={colors}/>)
        
    }
    return <div className="ColorsLestExerices">
        {box}
    </div>
}