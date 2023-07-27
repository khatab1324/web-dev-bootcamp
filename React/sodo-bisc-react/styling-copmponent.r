firest thing you canot use class for sting becuse it reserved word in js
use for styling className
to invoked we donot need link in html jsut import 

import "./Die.css"; // This simply tells Webpack when you are building our big bundle, Webpack, make sure you include the
export default function Die() {
  const rool = Math.floor(Math.random() * 6) + 1;
  return <h1 className="Die">die number : {rool}</h1>;
}
and there file called Die.css have 
.Die {
  color: aqua;
}
