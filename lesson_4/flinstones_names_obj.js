let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flinstonesObj = {};

flintstones.forEach((name, index) => {
  flinstonesObj[name] = index;
});

console.log(flinstonesObj);