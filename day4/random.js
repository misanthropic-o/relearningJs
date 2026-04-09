// fucking counter (no css cause its just js)

// const countDOm = document.createElement("p")

// const reduce = document.createElement("button")
// const reset = document.createElement("button")
// const add = document.createElement("button")

// countDOm.textContent = 0
// reduce.textContent = "reduce"
// reset.textContent = "areset"
// add.textContent = "add"

// document.body.append(reduce, reset, add, countDOm)

// let count = 0

// reset.addEventListener("click", () => {
//     count = 0
//     countDOm.textContent = count
// })

// reduce.addEventListener("click", () => {
//     count--
//     if(count < 0){
//         window.alert("you can't go below 0")
//         count++
//     } else {
//         countDOm.textContent = count
//     }
// })

// add.addEventListener("click", () => {
//     count++
//     countDOm.textContent = count
// })

// color changer

const title = document.createElement("p");
const colorBlock = document.createElement("div");
const colorHex = document.createElement("p");
const colorChange = document.createElement("button");

document.body.append(title, colorBlock, colorHex, colorChange);

title.textContent = "color randomizezr";
colorHex.textContent = "#XXXXXX";
colorChange.textContent = "click here to change color";

colorBlock.style.width = "150px";
colorBlock.style.height = "150px";

function randomizeColor() {
  const alphabet = "ABCDEF";
  const nums = "0123456789";

  const alphArr = alphabet.split("");
  const numArr = nums.split("");

  const randomColor = [];

  for (let i = 0; i < 6; i++) {
    const sourceArr = Math.floor(Math.random() * 2 + 1) < 2 ? alphArr : numArr;
    const randomIndex = Math.floor(Math.random() * sourceArr.length);
    const randomChar = sourceArr[randomIndex];
    randomColor.push(randomChar);
  }

  console.log(randomColor);

  const resultColor = randomColor.join("");

  console.log(resultColor);

  colorHex.textContent = "#" + resultColor;
  colorBlock.style.backgroundColor = `#${resultColor}`;
}

colorChange.addEventListener("click", randomizeColor);
