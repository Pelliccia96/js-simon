const buttonEl = document.getElementById("button");
const numbersEl = document.getElementById("numbers");
let totNum;
let numList = [];

buttonEl.addEventListener("click", function() {
    totNum = generateNumList(100);
    console.log(numList);
    numbersEl.innerHTML = `${numList}`;
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
