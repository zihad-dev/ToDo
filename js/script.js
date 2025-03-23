// let type = document.querySelector(".type");
// let typeCount = type.innerHTML;
// let countStrat = 0;
// type.innerHTML = "";
// function typeJs() {
//   type.innerHTML += typeCount[countStrat];
//   countStrat++;
//   if (countStrat == typeCount.length) {
//     countStrat = 0;
//     type.innerHTML = "";
//   }
// }
// let stop = setInterval(() => {
//   typeJs();
// }, 500 / 2);
let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let error = document.querySelector(".error");

let listArr = [];
let textValue;
let color=["red","black","blue"]

btn.addEventListener("click", function () {
  list.innerHTML = "";
  listArr.push(box.value);
  textValue = box.value;
  box.value = "";
  if (textValue == 0) {
    error.innerHTML = "Enter a text";
  } else if (isNaN(textValue)) {
    error.innerHTML = "";
    for (let i = 0; i < listArr.length; i++) {
      textValue = "";
      list.innerHTML += `${listArr[i]}`;
      let typeCount = list.innerHTML;
      let counterStart = 0;
      list.innerHTML = "";
      function typeJs() {
        list.innerHTML += typeCount[counterStart];
        counterStart++;
        if (counterStart == typeCount.length) {
          clearInterval(stop);
        }
      }
      let stop = setInterval(() => {
        typeJs();
      }, 500 / 2);
    }
  } else {
    error.innerHTML = "";
    for (let i = 0; i < listArr.length; i++) {
      textValue = "";
      list.innerHTML += `${listArr[i]}`;
      let typeCount = list.innerHTML;
      let counterStart = 0;
      list.innerHTML = "";
      function typeJs() {
        counterStart++;
        list.innerHTML = counterStart;
        if (typeCount == counterStart) {
          clearInterval(stop);
        }
      }
      let stop = setInterval(() => {
        typeJs();
      }, 500 / 2);
    }
  }
});
