var fivePerBtn = document.querySelector('.fivePercent');
var tenPerBtn = document.querySelector('.tenPercent');
var fifteenPerBtn = document.querySelector('.fifteenPercent');
var twentyFivePerBtn = document.querySelector('.twentyFivePercent');
var fiftyPerBtn = document.querySelector('.fiftyPercent');
var customPerBtn = document.querySelector('.custom');
var errorMessage = document.querySelector('.error');
var resetButton = document.querySelector('.submit-btn');
var billValue = document.querySelector('.bill-input');
var numOfPeopleValue = document.querySelector('.people-input');
var tipPerPerson = document.querySelector('.result-person');
var tipTotal = document.querySelector('.result-total');


function calcTip(bill, percent) {
    return bill * percent / 100;
}

function getTipTotal(tip, percent) {
    return tip;
}

function updateFunc(billValue, numOfPeople) {
    // Here I use closure to save billInput
    return function (percent) {
        var bill = parseFloat(billValue.value);
        tipTotal.textContent = getTipTotal(calcTip(bill, percent)).toFixed(2);

    }
}
numOfPeopleValue.addEventListener('input', function () {
    if (numOfPeopleValue.value == 0 || numOfPeopleValue.value === '') {
        errorMessage.style.display = "flex";
        numOfPeopleValue.style.borderColor = "#bd3e13"
    } else {
        errorMessage.style.display = "none";
        numOfPeopleValue.style.borderColor = "transparent"
    }
})

var update = updateFunc(billValue);
fivePerBtn.addEventListener('click', function () {
    update(5);
    tipPerPerson.textContent = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(2);

});
tenPerBtn.addEventListener('click', function () {
    update(10);
    tipPerPerson.textContent = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(1);
});
fifteenPerBtn.addEventListener('click', function () {
    update(15);
    tipPerPerson.textContent = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(1);
});
twentyFivePerBtn.addEventListener('click', function () {
    update(25);
    tipPerPerson.innerHTML = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(1);
});
fiftyPerBtn.addEventListener('click', function () {
    update(50);
    tipPerPerson.textContent = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(1);
});
customPerBtn.addEventListener('input', function () {
    update(customPerBtn.value);
    tipPerPerson.textContent = Number(tipTotal.textContent / numOfPeopleValue.value).toFixed(1);
});

resetButton.addEventListener('click', function () {
    location.reload();
});