import './App.css'
import Hello from './Hello'
function App() {
  // props are like arguments that we can provide to our components.
  // we use props to make configurable components
  // the shap of props like attribute like this <Hello name='Bill'/>
  return <div >
    {/* <Hello name='khattab'/>now it will pass it to Hello as argumment */}
    <Hello person='mostafa'/>
    </div>
}

export default App
