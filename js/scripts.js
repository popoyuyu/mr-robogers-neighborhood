function beepBoop(number) {
  const numArray = [];
  const numThree = "Wont you be my neighbor?";
  const numTwo = "Boop!"
  for (let i = 0; i <= number; i++) {
    if (i === 3) {
      numArray.push(numThree)
    }
    else if (i === 2) {
      numArray.push(numTwo)
    }
    // else {
    numArray.push(i)
    // }

  }
  console.log(numArray);
}
console.log(beepBoop(5));