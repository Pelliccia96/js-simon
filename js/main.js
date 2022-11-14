const buttonEl = document.getElementById("button");
const numbersEl = document.getElementById("numbers");
let totNum;
let numList = [];

buttonEl.addEventListener("click", function() {
    totNum = generateNumList(100);
    numbersEl.innerHTML = `${numList}`;
    console.log(numList);

    setTimeout(emptyHtml, 3000);
    setTimeout(userNumbers, 3500);
})

function generateRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumList(totNum) {
    numList = [];
    console.log(numList);

    while (numList.length < 5) {
        const num = generateRandomNumber(1, totNum);
        if (!numList.includes(num)) {
            numList.push (num);
        }
    }
    return numList;
}

function emptyHtml() {
    numbersEl.innerHTML = ``;
}

function userNumbers() {
    const numFound = [];

    for (i = 0; i < 5; i++) {
        const numInput = prompt("Inserisci i numeri che ricordi.");

        if (numList.includes(parseInt(numInput))) {
            numFound.push(numInput);
            if (numFound.length === 5) {
                alert("GG WP");
            }
        } else {
            alert("ff, go next");
            return
        }
    }
}
