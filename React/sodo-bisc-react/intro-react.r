# // i use r to take note and not autoOrder them when save
when we use react we are return syntax like html but is not html is jsx (java
script extantion)
- it allow you to write markup that looks like html dirctly inside of our html
-its not legal js on its own, so it must be transpiled
- bable will take unreal js like this( 
  import "./styles.css"; export default
function App() { return (
<div className="App">
  <h1>Hello CodeSandbox</h1>
  <h2>Start editing to see some magic happen!</h2>

  <p>here i am</p>
</div>
); } ) I put all the comments for order the code
and it will return it to real js like this(
import "./styles.css";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function App() {
return /*#__PURE__*/_jsxs("div", {
className: "App",
children: [/*#__PURE__*/_jsx("h1", {
children: "Hello CodeSandbox"
}), /*#__PURE__*/_jsx("h2", {
children: "Start editing to see some magic happen!"
}), /*#__PURE__*/_jsx("p", {
children: "here i am"
})]
}); } )

1-the structure of react
A-One of them is to have a component called app. App is typically the highest level, the top level component of your entire application.all components  will call as single component called App
how app work
import "./styles.css"; export default
function App() { return (
<div className="App">
  <h1>Hello CodeSandbox</h1>
  <h2>Start editing to see some magic happen!</h2>

  <p>here i am</p>
</div>
); } 
This defines a function called app, but its just a function.It has to be called somewhere.
in index.js there is line called script line ,This is the line that says, Hey, remember that app component we defined earlier?Render one inside of this root element //root is index.html
