let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btnClr = document.getElementById('btnClr');
let btnEql = document.getElementById('btnEql');
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnMul = document.getElementById('btnMul');
let btnDiv = document.getElementById('btnDiv');
let res = document.getElementById('res');


btn0.onclick = function () { console.log("0"); res.innerText += "0"; }
btn1.onclick = function () { console.log("1"); res.innerText += "1"; }

btnSum.onclick = function () { console.log("Sum"); res.innerText += "+"; }
btnSub.onclick = function () { console.log("Sub"); res.innerText += "-"; }
btnMul.onclick = function () { console.log("Mul"); res.innerText += "*"; }
btnDiv.onclick = function () { console.log("Div"); res.innerText += "/"; }

btnClr.onclick = function () { console.log("Clr"); res.innerText = ""; }
btnEql.onclick = calc;

function calc() {
  let input = (res.innerText);
  let arr = input.match(/([0-1]+)([\+\-\*\/])([0-1]+)/) ;

  console.log(arr);
  // let arr = ["1010", "*", "1010"] ;

  let x = parseInt(arr[1], 2);
  let y = parseInt(arr[3], 2);
  let op = arr[2];

  switch (op) {
    case "+":
      res.innerText = parseInt(x + y).toString(2);
      break;

    case "-":
      res.innerText = parseInt(x - y).toString(2);
      break;

    case "*":
      res.innerText = parseInt(x * y).toString(2);
      break;

    case "/":
      res.innerText = parseInt(x / y).toString(2);

  }
}
