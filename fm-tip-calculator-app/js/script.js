const bill = document.getElementById("bill");
const totalPerPerson = document.querySelector(".tip__total__output");
const tipDisplay = document.querySelector(".tip__person__output");
const tipButtons = document.querySelector(".tip__button__group");
const people = document.getElementById("people");

const app = document.querySelector(".app");

let billInput = 0;
let tipAmount = 0;
let numOfPeople;

function calcBill() {
    // Get the bill amount and store it in a variable
    console.log("calcBill function has fired");
}

app.addEventListener("keyup", (e) => {
    // console.log(billInput);
    // calcBill()
});

// console.log(people.value);

bill.addEventListener("keyup", (e) => {
    billInput = parseInt(e.target.value);
    console.log(billInput);
});

tipButtons.addEventListener("click", (e) => {
    // tipAmount = e.target.value;
    tipAmount = e.target.value * billInput;

    console.log(typeof tipAmount);

    console.log(typeof (tipAmount + billInput));
});

people.addEventListener("keyup", (e) => {
    numOfPeople = e.target.value;
    console.log(numOfPeople);
    // console.log(parseInt(100 * 0.10 + 100) / numOfPeople);
    // totalPerPerson.textContent = parseInt(((billInput *  tipAmount) + billInput) / numOfPeople);
    totalPerPerson.textContent = (tipAmount + billInput) / numOfPeople;
    tipDisplay.textContent = tipAmount / numOfPeople;
    bill.value = "";
    people.value = "";
});

document.querySelector(".btn-reset").addEventListener("click", () => {
    bill.value = "";
    people.value = "";
    totalPerPerson.textContent = 0;
    tipDisplay.textContent = 0;
});

// console.log(billInput);

// get the bill amount
// get tip amount
// get the number of people

// console.log(typeof tipAmount);
