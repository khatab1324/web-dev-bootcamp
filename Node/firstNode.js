for (let i = 0; i < 5; i++) {
  console.log(i + 1);
}
// ------------------------------------process-------------------------------
// its a contants in node
// there ton of contants in docs inside node Documentation
// and you write them inside node

// process.cwd => to see were you are
// process.release => to see some information about node
// can write teme like console and when you run the code it will exucute them
console.log(process.cwd());

// process.argv =>The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.
// ... it like pass it into the node
// write this in the termenal node arge.js pupoies chicken hello
const args = process.argv.slice(2);
for (let arg of args) {
  console.log(`hi there , ${arg}`);
}

// ----------------------------------------------File System Module or fs--------------------------------------------
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// but fs not

// you should now the deffrit between async and synchrorus you will find it in 324 lituer
const fs = require("fs");
console.log(fs);
fs.mkdir("theNewFile", { recursive: true }, (err) => {
  console.log("you are in mkdir");
  if (err) throw err;
});
console.log("after mkdir");

// and you can do this
const foldername = process.argv[4] || "project"; //process.argv[4] that mean the neme number 4 you will add like
//....... node firstNode.js mohhmad khatab omer samer sob7y //the node will add omer

fs.mkdirSync(foldername); //and the folder maded

//  fs.writeFile() When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.
fs.writeFileSync(`${foldername}/index.html`);
fs.writeFileSync(`${foldername}/here.js `);
fs.writeFileSync(`${foldername}/style.css`);
