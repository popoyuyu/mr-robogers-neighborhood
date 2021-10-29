function beepBoop(number) {
  const numArray = [];
  const numThree = "Wont you be my neighbor?";
  for (let i = 0; i <= number; i++) {
    if (i === 3) {
      numArray.push(numThree)
    }
    numArray.push(i)
  }
  console.log(numArray);
}
console.log(beepBoop(5));