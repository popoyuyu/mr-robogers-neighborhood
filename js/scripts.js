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

$("document").ready(function () {
  $("form#form").submit(function (event) {
    event.preventDefault();
    let inputNumber = $("#inputNumber").val();
    $("#result").text(inputNumber);
  });
});