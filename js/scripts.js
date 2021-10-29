function beepBoop(number) {
  const numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  return numArray;
}
console.log(beepBoop(5));