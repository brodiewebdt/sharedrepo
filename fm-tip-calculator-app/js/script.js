const app = document.querySelector(".app");

const totalDisplay = document.querySelector(".tip__total__output");
const tipDisplay = document.querySelector(".tip__person__output");
const tipButtons = document.querySelector(".tip__button__group");
const tipBtn = document.querySelectorAll(".tip__button");
const customTipDisplay = document.querySelector(".custom-tip");
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const errorMessage = document.querySelector(".error-message");


let numOfPeople = 0;
let tipAmount = 0;

// Calculates and displays the values for the app
function calcBill() {
    let bill = Number(document.querySelector("#bill").value);
    let numOfPeople = Number(document.getElementById("people").value);

    let totalTip = bill * tipAmount;


    if (numOfPeople === 0) {
        peopleInput.classList.add("error");
        errorMessage.classList.add("error");
        totalDisplay.textContent = `$0.00`;
        tipDisplay.textContent = `$0.00`;
        return;
    } else {
        peopleInput.classList.remove("error");
        errorMessage.classList.remove("error");
    }

    totalDisplay.textContent =
        "$" + ((bill + totalTip) / numOfPeople).toFixed(2);
    tipDisplay.textContent =
        "$" + ((bill * tipAmount) / numOfPeople).toFixed(2);


}
// Handles the tip button clicks and shows the active tip selected
tipButtons.addEventListener("click", function (e) {
    tipAmount = e.target.value / 100;


    for (let i = 0; i < tipBtn.length; i++) {
        if (e.target === tipBtn[i]) {
            tipBtn[i].classList.add("active-btn");
        } else {
            tipBtn[i].classList.remove("active-btn");
        }
    }

    setTimeout(() => {
        calcBill();
    }, 1000);

});

// Handles the input for the custom tip input box
customTipDisplay.addEventListener("input", (e) => {
    tipAmount = e.target.value / 100;

    setTimeout(() => {
        calcBill();
    }, 1000);
});

// Handles the input for the number of people input box
peopleInput.addEventListener("keyup", (e) => {
    numOfPeople = parseInt(e.target.value);
});

// Resets all the values to the default state
document.querySelector(".btn-reset").addEventListener("click", () => {
    bill = 0;
    tipAmount = 0;
    billInput.value = "";
    customTipDisplay.value = "";
    peopleInput.value = "";
    totalDisplay.textContent = `$0.00`;
    tipDisplay.textContent = `$0.00`;

    for (let i = 0; i < tipBtn.length; i++) {
        tipBtn[i].classList.remove("active-btn");
    }
});

// Handles all the inputs for the entire app
app.addEventListener("input", () => {
    setTimeout(() => {
        calcBill();
    }, 1000);
});
