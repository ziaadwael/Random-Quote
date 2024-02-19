// ==================== Assignment One ===============

/*
function sayHello(theName, theGender) {

  // Solution 1
  if(theGender === "Male"){
    console.log("Hello Mr",theName)
  }
  else if(theGender === "Female"){
    console.log("Hello Miss",theName)
  }
  else{
    console.log("Hello",theName)
  }

  // Solution 2
  switch(theGender){
    case "Male":
        console.log("Hello Mr",theName)
        break;
    case "Male":
        console.log("Hello Miss",theName)
        break;
    default:
        console.log("Hello",theName)
        break;
  }
}
*/

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// ==================== Assignment Two ===============

/*
function calculate(firstNum, secondNum, operation) {
  if (secondNum == null) {
    console.log("Second Number Not Found");
  } else if (operation == null) {
    console.log(firstNum + secondNum);
  } else {
    switch (operation) {
      case "add":
        console.log(firstNum + secondNum);
        break;
      case "subtract":
        console.log(firstNum - secondNum);
        break;
      case "multiply":
        console.log(firstNum * secondNum);
        break;
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

*/

// ==================== Assignment Three ===============

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];