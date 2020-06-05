const rollButton = document.querySelector(".roll-button")

const diceRolls = []
const total = document.querySelector(".total")
const allRolls = document.querySelector(".show-all-rolls")
const list = document.querySelector("ol")
console.log(rollButton)
console.log(total)
rollButton.addEventListener("click", function () {
    let diceRolled = document.querySelector("#number-of-dice").value;
    let counter = 0
    let sum = 0
    while (counter < diceRolled) {
        let diceRoll = Math.floor(Math.random() * 6 + 1);
        console.log(diceRoll)
        diceRolls.push(diceRoll)
        sum += diceRoll
        counter += 1
    }
    console.log(diceRolls)
    total.innerHTML = "Sum of All Rolls" + sum
    console.log(total)
})

allRolls.addEventListener("click", function () {
    let counter = 0
    let total = 0
    while (counter < diceRolls.length) {
        allRolls.innerHTML += "<li>" + diceRolls[counter] + "</li>"
        counter += 1

    }
})