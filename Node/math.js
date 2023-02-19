const add = (x, d) => x + d;
const PI = 3.14;
const square = (x) => x * x;

//module.exports = "hello"; // her module.exports it for to export and run it in another file like this i export hello for app.js

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;
