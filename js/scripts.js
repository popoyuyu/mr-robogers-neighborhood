function beepBoop(number) {
  const numArray = [];

  for (let i = 0; i <= number; i++) {
    let numString = i.toString();
    if (numString.includes("3")) {
      numArray.push("Won't you be my neighbor?")
    } else if (numString.includes("2")) {
      numArray.push("Boop!")
    } else if (numString.includes("1")) {
      numArray.push("Beep!")
    } else {
      numArray.push(i)
    }
  }
  return numArray
}
console.log(beepBoop(50));
  //   if (i === 3) {
    //     numArray.push(numThree)
    //   }
    //   else if (i === 2) {
    //     numArray.push(numTwo)
    //   }
    //   else if (i === 1) {
    //     numArray.push(numOne)
    //   } 
     // }