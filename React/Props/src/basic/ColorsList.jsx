export default function ColorsList({colors}){
    const elements =[<p>Hello</p>,<h1>I am not your enemy, I am demon enemy</h1>]
   //color come with in one array to make every elements alone use map
   const element=colors.map(color=><li>{color}</li>)//this will be array of elements
   return <div>
        <p>color</p>
        <p>{elements}</p>
        <p>{element}</p>
    </div>
}