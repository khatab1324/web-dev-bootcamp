import './App.css'
import Hello from './basic/Hello'
import ArrayAndObject from './basic/ArrayAndObject'
import Age from './basic/Age'
import DoubleDice from './basic/DoubleDice'
import ColorsList from './basic/ColorsList'
import SlotGame from './basic/SlotGame'
import Shopinglest from './shopingcard/Shopinglest' 
import Events from './Evens/Events'
import From from './Evens/Form'
const data=[
  {id:1000,item:'andomy',rating:4.5,price:34},
  {id:1222,item:'showrma',rating:4,price:33},
  {id:3342,item:'mansafe',rating:3,price:22},
  {id:4344,item:'ramin',rating:3.65,price:200}]
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
    {/* <SlotGame val1="hi" val2="hi" val3="hi"/> */}
    
    {/*  */}
    {/*  */}
    {/*  */}

    {/* shoping Lest*/}
 <Shopinglest items={data}/>
 <Events/>
 <From messege="don't click me plz" buttonText="don't click"/>
    </div>
}

export default App
