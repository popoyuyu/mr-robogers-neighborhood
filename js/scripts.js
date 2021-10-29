function beepBoop(number) {
  const numArray = [];
  const numThree = "Wont you be my neighbor?";
  const numTwo = "Boop!"
  const numOne = "Beep!"
  // split the inputted number into an array of numbers
  // loop through the array of numbers and check if that number is either 1,2,3
  // if it does = that end the function and return the number
  for (let i = 0; i <= number; i++) {
    if (i === 3) {
      numArray.push(numThree)
    }
    else if (i === 2) {
      numArray.push(numTwo)
    }
    else if (i === 1) {
      numArray.push(numOne)
    }
    else {
      numArray.push(i)
    }

  }
  console.log(numArray);
}
console.log(beepBoop(5));

lunch break