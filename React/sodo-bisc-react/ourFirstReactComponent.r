this code is just for note it does not work
import "./styles.css";
function Hello(){
  return <h1>HELLO WORLD I AM HERE</h1>
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Hello/> {/* to call that funcion by using jsx */}
      <h2>Start editing to see some magic happen!</h2>

      <p>here i am</p>
    </div>
  );
}
# -------------------------write code in sprite files --------------
if we want to write code in script file we should use ES6 (serech about it) and import it

ex:I will make to file to understand 

file1 called App.js
import "./styles.css";
import Hello from "./Hello.js";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Hello /> {/* to call that funcion by using jsx */}
      <h2>Start editing to see some magic happen!</h2>
      <p>here i am</p>
    </div>
  );
}

file2 called Hello.js
# we need to export Hello to let app.js know about it 
export default function Hello(){
  return <h1>HELLO WORLD I AM HERE</h1>
}

# or you can do it like this 
function Hello(){
  return <h1>HELLO WORLD I AM HERE</h1>
}
export default  Hello;

# if you want to export more then thing you can use {}
function Hello(){
  return <h1>HELLO WORLD I AM HERE</h1>
}
export {Hello};#but in App.js when you require it you should put it in {} like import {Hello} form "./Hello"