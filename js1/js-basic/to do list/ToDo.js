let start = prompt("chose from h1");
let ToDo = ["*********************************"];
while (start !== "quit" && start !== "q") {
  console.log(start);
  if (start === "new") {
    let newToDo = prompt("what would you like to do");
    ToDo.push(newToDo);
    console.log(`${newToDo} add to list`);
    let diceicion = prompt("do you have another todo");
    while (diceicion === "yes") {
      console.log(diceicion);
      newToDo = prompt("what would you like to do");
      ToDo.push(newToDo);
      console.log(`${newToDo} add to list`);
      diceicion = prompt("do you have another todo");
      console.log(diceicion);
      if (diceicion === "no") {
        break;
      }
    }
  } else if (start === "list") {
    for (let i = 0; i <= ToDo.length; i++) {
      console.log(`${i}: ${ToDo[i]}`);
    }
  } else if (start === "delete") {
    let remove = parseInt(prompt("any todo want to delete"));

    if (!Number.isNaN(remove)) {
      ToDo.splice(remove, 1);
    } else {
      console.log("please enter a number");
    }
    // if user enter the name insted the number like this "playing" or "asdfafasdf" . in js by defalt any sting letter it equal zero
    // that mean its like that splice(0,1)

    // Number.isNaN(remove) // true this is the only way to make NaN = NaN
    // if user enter a value that string it equal NaN
  }
  if (start === "quit" && start === "q") {
    break;
  }
  start = prompt("chose from h1");
}
