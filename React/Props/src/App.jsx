import './App.css'
import Hello from './Hello'
import ArrayAndObject from './ArrayAndObject'
import Age from './Age'
import DoubleDice from './DoubleDice'
import ColorsList from './ColorsList'
import SlotGame from './SlotGame'
function App() {
  // props are like arguments that we can provide to our components.
  // we use props to make configurable components
  // the shap of props like attribute like this <Hello name='Bill'/>
  return <div >
    {/* <Hello name='khattab'/>now it will pass it to Hello as argumment */}
    {/* <Hello person='mostafa' Name="khattab" />you can add more then one props  */}
  {/* how to add props in the difernet type */}
  {/* just use name={number} */}
  {/* <Age Age={34}/>look for that I pass in props a number */}
    {/* to pass a array and object just value ={[]} for object value={{}}*/}
    {/* <ArrayAndObject values={[1,2,3,"a","b","c"]}/>
    <DoubleDice/>
    <ColorsList colors={["red","green","pink","black"]}/> */}

    {/* slot game */}
    <SlotGame val1="hi" val2="hi" val3="hi"/>
    </div>
}

export default App
