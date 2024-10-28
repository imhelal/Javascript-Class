let students = ["Habib", "Jubayer", "Abdullah", "Siam"];

//students.push('Jhon')  add item at the end of the array list
//students.unshift('Jhon')  add item at the begining of the array list
//students.shift()  remove item from the begining of the array list
//students.pop()  remove item from the end of the array list
//students.indexOf("Siam") //index of list item
//students.splice(indexNumber, 1); remove items from the array list

let indexOfJubayer = students.indexOf("Jubayer");

students.splice(indexOfJubayer, 1);

console.log(students);
