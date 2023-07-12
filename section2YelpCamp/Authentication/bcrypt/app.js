const bcrypt = require("bcrypt");

// the libary supourt the promises , you can use async and await
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12); //12 recomending number//it wil genarate salt for us
  const hash = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hash);
};
//to campare passwords
const login = async (password, hashedpassword) => {
  const result = await bcrypt.compare(password, hashedpassword);
  if (result) {
    console.log("you loged in ❤️❤️❤️");
  } else {
    console.log("password is wrong");
  }
};

login("khattab", "$2b$12$LvZHCbixGl/fVDl7s6g/qelLZ/uCbDGWr2Z8fgKrYdx8DZV9m.i");

// To hash a password:
// Technique 1 (generate a salt and hash on separate function calls):

// bcrypt.genSalt(saltRounds, function(err, salt) {//saltRounds its the level of deffeclt of hashing but make the app slowr if th saltRounds number increase
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });
const hashPassword2 = async (password) => {
  //Pass in the plain text password and the number of rounds:
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
};

// you can find more https://github.com/kelektiv/node.bcrypt.js

// Technique 2 (auto-gen a salt and hash):

// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });

// hashPassword("monkey");
login("monkey", "$2b$12$YS9GdWUznoM7r1522knuY.1dq1taWra5zgG7N1WzHs4j.fridopWS");
