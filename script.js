let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "sum: "+ result
}

function subtract() {
    sumEl.textContent = num1 - num2
    sumEl.textContent = "sum: "+ result
}

function multiply() {
    sumEl.textContent = num1 * num2
    sumEl.textContent = "sum: "+ result
}

function divide() {
    sumEl.textContent = num1 / num2
    sumEl.textContent = "sum: "+ result
}