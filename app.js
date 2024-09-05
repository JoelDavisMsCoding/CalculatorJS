let displayElement = document.querySelector(".displayScreen h1");
let number0Bttn = document.getElementById("zero");
let number1Bttn = document.getElementById("one");
let number2Bttn = document.getElementById("two");
let number3Bttn = document.getElementById("three");
let number4Bttn = document.getElementById("four");
let number5Bttn = document.getElementById("five");
let number6Bttn = document.getElementById("six");
let number7Bttn = document.getElementById("seven");
let number8Bttn = document.getElementById("eight");
let number9Bttn = document.getElementById("nine");
let subtractBttn = document.getElementById("subtract");
let decimalBttn = document.getElementById("decimal");
let addBttn = document.getElementById("add");
let multiplyBttn = document.getElementById("multiply");
let divideBttn = document.getElementById("divide");
let equalsBttn = document.getElementById("equals");
let deleteButton = document.getElementById("delete");
let clearBttn = document.getElementById("clear");

let value1 = "";
let value2 = "";
let value3 = "";
let value4 = "";
let value5 = "";
let value6 = "";
let value7 = "";
let value8 = "";
let value9 = "";
let lastValue =  "";

let arrEquation = [];

let storeNumbsFromButtons = "";
let finalCalculation = "";
let zero = "";
let one = "";
let two = "";
let three = "";
let four = "";
let five = "";
let six = "";
let seven = "";
let eight = "";
let nine = "";
let subtract = "";
let add = "";
let multiply = "";
let divide = "";
let decimal = "";

number0Bttn.addEventListener("click", () =>
{   
    zero = number0Bttn.value; //Give the value of the button to the variable zero to be stored.
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = zero; storeNumbsFromButtons = zero;}
    else {displayElement.innerHTML += zero; storeNumbsFromButtons += zero;}
});
number1Bttn.addEventListener("click", () =>
{   
    one = number1Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = one; storeNumbsFromButtons = one;}
    else {displayElement.innerHTML += one; storeNumbsFromButtons += one;}
});
number2Bttn.addEventListener("click", () =>
{   
    two = number2Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = two; storeNumbsFromButtons = two;}
    else {displayElement.innerHTML += two; storeNumbsFromButtons += two;}
});
number3Bttn.addEventListener("click", () =>
{   
    three = number3Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = three; storeNumbsFromButtons = three;}
    else {displayElement.innerHTML += three; storeNumbsFromButtons += three;}
});
number4Bttn.addEventListener("click", () =>
{   
    four = number4Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = four; storeNumbsFromButtons = four;}
    else {displayElement.innerHTML += four; storeNumbsFromButtons += four;}
});
number5Bttn.addEventListener("click", () =>
{   
    five = number5Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = five; storeNumbsFromButtons = five;}
    else {displayElement.innerHTML += five; storeNumbsFromButtons += five;}
});
number6Bttn.addEventListener("click", () =>
{   
    six = number6Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = six; storeNumbsFromButtons = six;}
    else {displayElement.innerHTML += six; storeNumbsFromButtons += six;}
});
number7Bttn.addEventListener("click", () =>
{   
    seven = number7Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = seven; storeNumbsFromButtons = seven;}
    else {displayElement.innerHTML += seven; storeNumbsFromButtons += seven;}
});
number8Bttn.addEventListener("click", () =>
{   
    eight = number8Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = eight; storeNumbsFromButtons = eight;}
    else {displayElement.innerHTML += eight; storeNumbsFromButtons += eight;}
});
number9Bttn.addEventListener("click", () =>
{   
    nine = number9Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = nine; storeNumbsFromButtons = nine;}
    else {displayElement.innerHTML += nine; storeNumbsFromButtons += nine;}
});
decimalBttn.addEventListener("click", () =>
    {   
        decimal = decimalBttn.value;
        if (displayElement.innerHTML == 0) {displayElement.innerHTML = decimal; storeNumbsFromButtons = decimal;}
        else {displayElement.innerHTML += decimal; storeNumbsFromButtons += decimal;}
    });

subtractBttn.addEventListener("click", () =>
{   
    subtract = subtractBttn.value;
    displayElement.innerHTML += subtract;
    if (value1 == "")
    {
        value1 = storeNumbsFromButtons; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = subtract;
        arrEquation.push(value1);
        arrEquation.push(value2);         
    }
    else if (value3 == "") 
    {
        value3 = storeNumbsFromButtons;
        value4 = subtract
        arrEquation.push(value3);
        arrEquation.push(value4);
    }
    else if (value5 == "") 
    {
        value5 = storeNumbsFromButtons;
        value6 = subtract
        arrEquation.push(value5);
        arrEquation.push(value6);
    }
    else if (value7 == "") 
    {
        value7 = storeNumbsFromButtons;
        value8 = subtract
        arrEquation.push(value7);
        arrEquation.push(value8);
    }
    else if (value9 == "") 
    {
        value9 = storeNumbsFromButtons;
        arrEquation.push(value9);
    }
    storeNumbsFromButtons = "";
});
addBttn.addEventListener("click", () =>
{   
    add = addBttn.value;
    displayElement.innerHTML += add;
    if (value1 == "")
    {
        value1 = storeNumbsFromButtons; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = add;
        arrEquation.push(value1);
        arrEquation.push(value2);         
    }
    else if (value3 == "") 
    {
        value3 = storeNumbsFromButtons;
        value4 = add
        arrEquation.push(value3);
        arrEquation.push(value4);
    }
    else if (value5 == "") 
    {
        value5 = storeNumbsFromButtons;
        value6 = add
        arrEquation.push(value5);
        arrEquation.push(value6);
    }
    else if (value7 == "") 
    {
        value7 = storeNumbsFromButtons;
        value8 = add
        arrEquation.push(value7);
        arrEquation.push(value8);
    }
    else if (value9 == "") 
    {
        value9 = storeNumbsFromButtons;
        arrEquation.push(value9);
    }
    storeNumbsFromButtons = "";
});
multiplyBttn.addEventListener("click", () =>
{   
    multiply = multiplyBttn.value;
    displayElement.innerHTML += multiply;
    if (value1 == "")
    {
        value1 = storeNumbsFromButtons; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = multiply;
        arrEquation.push(value1);
        arrEquation.push(value2);         
    }
    else if (value3 == "") 
    {
        value3 = storeNumbsFromButtons;
        value4 = multiply
        arrEquation.push(value3);
        arrEquation.push(value4);
    }
    else if (value5 == "") 
    {
        value5 = storeNumbsFromButtons;
        value6 = multiply
        arrEquation.push(value5);
        arrEquation.push(value6);
    }
    else if (value7 == "") 
    {
        value7 = storeNumbsFromButtons;
        value8 = multiply
        arrEquation.push(value7);
        arrEquation.push(value8);
    }
    else if (value9 == "") 
    {
        value9 = storeNumbsFromButtons;
        arrEquation.push(value9);
    }
    storeNumbsFromButtons = "";
});
divideBttn.addEventListener("click", () =>
{   
    divide = divideBttn.value;
    displayElement.innerHTML += divide;
    if (value1 == "")
    {
        value1 = storeNumbsFromButtons; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = "/";
        arrEquation.push(value1);
        arrEquation.push(value2);         
    }
    else if (value3 == "") 
    {
        value3 = storeNumbsFromButtons;
        value4 = "/"
        arrEquation.push(value3);
        arrEquation.push(value4);
    }
    else if (value5 == "") 
    {
        value5 = storeNumbsFromButtons;
        value6 = "/"
        arrEquation.push(value5);
        arrEquation.push(value6);
    }
    else if (value7 == "") 
    {
        value7 = storeNumbsFromButtons;
        value8 = "/"
        arrEquation.push(value7);
        arrEquation.push(value8);
    }
    else if (value9 == "") 
    {
        value9 = storeNumbsFromButtons;
        arrEquation.push(value9);
    }
    storeNumbsFromButtons = "";
});

equalsBttn.addEventListener("click", () =>
{   
    valueLast = storeNumbsFromButtons;
    if (value9 == "") {arrEquation.push(valueLast);}
    let equation1 = "";
    let equation2 = "";
    let equation3 = "";
    let equation4 = "";
    let equation5 = "";
    
    
    for (let i = 0; i < arrEquation.length; i++)
    {
        if (arrEquation[1] == "+") {equation1 = parseFloat(arrEquation[0]) + parseFloat(arrEquation[2]);}
        if (arrEquation[1] == "-") {equation1 = arrEquation[0] - arrEquation[2];}
        if (arrEquation[1] == "/") {equation1 = arrEquation[0] / arrEquation[2];}
        if (arrEquation[1] == "*") {equation1 = arrEquation[0] * arrEquation[2];}
        if (arrEquation[3] == "+") {equation2 = 0 + parseFloat(arrEquation[4]);}
        if (arrEquation[3] == "-") {equation2 = 0 - arrEquation[4];}
        if (arrEquation[3] == "/") {equation2 = 0 / arrEquation[4];}
        if (arrEquation[3] == "*") {equation2 = (arrEquation[0] * arrEquation[2]) * arrEquation[4];}
        if (arrEquation[5] == "+") {equation3 = 0 + parseFloat(arrEquation[6]);}
        if (arrEquation[5] == "-") {equation3 = 0 - arrEquation[6];}
        if (arrEquation[5] == "/") {equation3 = 0 / arrEquation[6];}
        if (arrEquation[5] == "*") {equation3 = (arrEquation[0] * arrEquation[2] * arrEquation[4]) * arrEquation[6];}
        if (arrEquation[7] == "+") {equation4 = 0 + parseFloat(arrEquation[8]);}
        if (arrEquation[7] == "-") {equation4 = 0 - arrEquation[8];}
        if (arrEquation[7] == "/") {equation4 = 0 / arrEquation[8];}
        if (arrEquation[7] == "*") {equation4 = (arrEquation[0] * arrEquation[2] * arrEquation[4] * arrEquation[6]) * arrEquation[8];}
        if (arrEquation[9] == "+") {equation5 = 0 + parseFloat(arrEquation[9]);}
        if (arrEquation[9] == "-") {equation5 = 0 - arrEquation[9];}
        if (arrEquation[9] == "/") {equation5 = 0 / arrEquation[9];}
        if (arrEquation[9] == "*") {equation5 = (arrEquation[0] * arrEquation[2] * arrEquation[4] * arrEquation[6] * arrEquation[8]) * arrEquation[9];}
    }
    finalCalculation = equation1 + equation2 + equation3 + equation4 + equation5;
    displayElement.innerHTML = finalCalculation;
});

deleteButton.addEventListener("click", () =>
{   
    storeNumbsFromButtons = storeNumbsFromButtons.slice(0, -1);
    displayElement.innerHTML = storeNumbsFromButtons;
})

clearBttn.addEventListener("click", () =>
{
    displayElement.innerHTML = 0;
    value1 = "";
    value2 = "";
    value3 = "";
    value4 = "";
    value5 = "";
    value6 = "";
    value7 = "";
    value8 = "";
    value9 = "";
    arrEquation = [];
    lastValue =  "";
    storeNumbsFromButtons = "";
    finalCalculation = "";  
});