const rollButton = document.querySelector("roll-button")
const diceRolls = []
let total = document.querySelector("total")
const allRolls = document.querySelector("show-all-rolls")
const list = document.querySelector("ol")

rollButton.addEventListener("click", function () {
    let diceRolled = document.querySelector("#number-of-dice").value;
    let counter = 0
    let total = 0
    while (counter < diceRolled) {
        let diceRolled = Math.floor(Math.random() * 6 + 1);
        console.assert.log(diceRoll)
        diceRolled.push(diceRolled)
        total += 1
        counter += 1
    }
    console.log(diceRolled)
    total.innerHtml = "Sum of All Rolls" + total
})

allRolls.addEventListener("click", function () {
    let counter = 0
    let total = 0
    while (counter < diceRolls.length) {
        allRolls.innerHTML += "<li>" + diceRolls[counter] + "</li>"
        counter += 1

    }
})