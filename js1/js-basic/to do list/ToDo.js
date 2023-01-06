let start = prompt("chose from h1");
let enter = prompt("what would you like to do");
let ToDo = [enter];
let diceicion = prompt("do you have another todo");
while (start !== "quit") {
  start = prompt("chose from h1");
  console.log(start);
  if (start === "new") {
    newToDo = prompt("what would you like to do");
    ToDo.push(newToDo);
    for (let i = 0; i <= ToDo.length; i++) {
      console.log(`${i}: ${ToDo[i]}`);
    }
    let diceicion = prompt("do you have another todo");
    while (diceicion === "yes") {
      newToDo = prompt("what would you like to do");
      ToDo.push(newToDo);
      diceicion = prompt("do you have another todo");
      if (diceicion === no) {
        break;
      }
    }

    let enter = [start];
    console.log(enter);

    if (start === "quit") {
      break;
    }
    console.log(enter);
  }
}
