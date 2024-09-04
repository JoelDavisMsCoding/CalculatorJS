let displayElement = document.querySelector(".displayScreen h1");
let allButtons = document.querySelectorAll(".container input");
console.log(allButtons);
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
let addBttn = document.getElementById("add");
let multiplyBttn = document.getElementById("multiply");
let divideBttn = document.getElementById("divide");
let equalsBttn = document.getElementById("equals");
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

let carryString = "";
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

number0Bttn.addEventListener("click", () =>
{   
    zero = number0Bttn.value; //Give the value of the button to the variable zero to be stored.
    displayElement.innerHTML += zero; //This will add the value of this button to be displayed on the calculator screen every time the button is pressed.
    carryString += zero; //This is adding all the buttons pressed to one string and sent to the equals buttons
});
number1Bttn.addEventListener("click", () =>
{   
    one = number1Bttn.value;
    displayElement.innerHTML += one;
    carryString += one;
});
number2Bttn.addEventListener("click", () =>
{   
    two = number2Bttn.value;
    displayElement.innerHTML += two;
    carryString += two;
});
number3Bttn.addEventListener("click", () =>
{   
    three = number3Bttn.value;
    displayElement.innerHTML += three;
    carryString += three;
});
number4Bttn.addEventListener("click", () =>
{   
    four = number4Bttn.value;
    displayElement.innerHTML += four;
    carryString += four;
});
number5Bttn.addEventListener("click", () =>
{   
    five = number5Bttn.value;
    displayElement.innerHTML += five;
    carryString += five;
});
number6Bttn.addEventListener("click", () =>
{   
    six = number6Bttn.value;
    displayElement.innerHTML += six;
    carryString += six;
});
number7Bttn.addEventListener("click", () =>
{   
    seven = number7Bttn.value;
    displayElement.innerHTML += seven;
    carryString += seven;
});
number8Bttn.addEventListener("click", () =>
{   
    eight = number8Bttn.value;
    displayElement.innerHTML += eight;
    carryString += eight;
});
number9Bttn.addEventListener("click", () =>
{   
    nine = number9Bttn.value;
    displayElement.innerHTML += nine;
    carryString += nine;
});

subtractBttn.addEventListener("click", () =>
{   
    subtract = subtractBttn.value;
    displayElement.innerHTML += subtract;
    if (value1 == "")
    {
        value1 = carryString; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = subtract;
        arrEquation.push(value1);
        arrEquation.push(value2);
        finalCalculation += value1; //The finalCalculation variable is only used when a operation unit(button) is pressed to add the whole math problem being typed.         
    }
    else if (value3 == "") 
    {
        value3 = carryString;
        value4 = subtract
        arrEquation.push(value3);
        arrEquation.push(value4);
        finalCalculation += value3;
    }
    else if (value5 == "") 
    {
        value5 = carryString;
        value6 = subtract
        arrEquation.push(value5);
        arrEquation.push(value6);
        finalCalculation += value5;
    }
    else if (value7 == "") 
    {
        value7 = carryString;
        value8 = subtract
        arrEquation.push(value7);
        arrEquation.push(value8);
        finalCalculation += value7;
    }
    else if (value9 == "") 
    {
        value9 = carryString;
        arrEquation.push(value9);
        finalCalculation += value9;
    }
    carryString = "";
});
addBttn.addEventListener("click", () =>
{   
    add = addBttn.value;
    displayElement.innerHTML += add;
    if (value1 == "")
    {
        value1 = carryString; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = add;
        arrEquation.push(value1);
        arrEquation.push(value2);
        finalCalculation += value1; //The finalCalculation variable is only used when a operation unit(button) is pressed to add the whole math problem being typed.         
    }
    else if (value3 == "") 
    {
        value3 = carryString;
        value4 = add
        arrEquation.push(value3);
        arrEquation.push(value4);
        finalCalculation += value3;
    }
    else if (value5 == "") 
    {
        value5 = carryString;
        value6 = add
        arrEquation.push(value5);
        arrEquation.push(value6);
        finalCalculation += value5;
    }
    else if (value7 == "") 
    {
        value7 = carryString;
        value8 = add
        arrEquation.push(value7);
        arrEquation.push(value8);
        finalCalculation += value7;
    }
    else if (value9 == "") 
    {
        value9 = carryString;
        arrEquation.push(value9);
        finalCalculation += value9;
    }
    carryString = "";
});
multiplyBttn.addEventListener("click", () =>
{   
    multiply = multiplyBttn.value;
    displayElement.innerHTML += multiply;
    if (value1 == "")
    {
        value1 = carryString; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = multiply;
        arrEquation.push(value1);
        arrEquation.push(value2);
        finalCalculation += value1; //The finalCalculation variable is only used when a operation unit(button) is pressed to add the whole math problem being typed.         
    }
    else if (value3 == "") 
    {
        value3 = carryString;
        value4 = multiply
        arrEquation.push(value3);
        arrEquation.push(value4);
        finalCalculation += value3;
    }
    else if (value5 == "") 
    {
        value5 = carryString;
        value6 = multiply
        arrEquation.push(value5);
        arrEquation.push(value6);
        finalCalculation += value5;
    }
    else if (value7 == "") 
    {
        value7 = carryString;
        value8 = multiply
        arrEquation.push(value7);
        arrEquation.push(value8);
        finalCalculation += value7;
    }
    else if (value9 == "") 
    {
        value9 = carryString;
        arrEquation.push(value9);
        finalCalculation += value9;
    }
    carryString = "";
});
divideBttn.addEventListener("click", () =>
{   
    divide = divideBttn.value;
    displayElement.innerHTML += divide;
    if (value1 == "")
    {
        value1 = carryString; //I am appending all numbers until a operation unit is entered(+,-, etc) then save string to its own variable.
        value2 = "/";
        arrEquation.push(value1);
        arrEquation.push(value2);
        finalCalculation += value1; //The finalCalculation variable is only used when a operation unit(button) is pressed to add the whole math problem being typed.         
    }
    else if (value3 == "") 
    {
        value3 = carryString;
        value4 = "/"
        arrEquation.push(value3);
        arrEquation.push(value4);
        finalCalculation += value3;
    }
    else if (value5 == "") 
    {
        value5 = carryString;
        value6 = "/"
        arrEquation.push(value5);
        arrEquation.push(value6);
        finalCalculation += value5;
    }
    else if (value7 == "") 
    {
        value7 = carryString;
        value8 = "/"
        arrEquation.push(value7);
        arrEquation.push(value8);
        finalCalculation += value5;
    }
    else if (value9 == "") 
    {
        value9 = carryString;
        arrEquation.push(value9);
        finalCalculation += value5;
    }
    carryString = "";
});

equalsBttn.addEventListener("click", () =>
{   
    //debugger
    valueLast = carryString;
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
        if (arrEquation[3] == "*") {equation2 = arrEquation[2] * arrEquation[4];}
        if (arrEquation[5] == "+") {equation3 = 0 + parseFloat(arrEquation[6]);}
        if (arrEquation[5] == "-") {equation3 = 0 - arrEquation[6];}
        if (arrEquation[5] == "/") {equation3 = 0 / arrEquation[6];}
        if (arrEquation[5] == "*") {equation3 = arrEquation[4] * arrEquation[6];}
        if (arrEquation[7] == "+") {equation4 = 0 + parseFloat(arrEquation[8]);}
        if (arrEquation[7] == "-") {equation4 = 0 - arrEquation[8];}
        if (arrEquation[7] == "/") {equation4 = 0 / arrEquation[8];}
        if (arrEquation[7] == "*") {equation4 = arrEquation[6] * arrEquation[8];}
        if (arrEquation[9] == "+") {equation5 = 0 + parseFloat(arrEquation[9]);}
        if (arrEquation[9] == "-") {equation5 = 0 - arrEquation[9];}
        if (arrEquation[9] == "/") {equation5 = 0 / arrEquation[9];}
        if (arrEquation[9] == "*") {equation5 = arrEquation[8] * arrEquation[9];}
    }
    finalCalculation = equation1 + equation2 + equation3 + equation4 + equation5;
    displayElement.innerHTML = finalCalculation;
});

clearBttn.addEventListener("click", () =>
{   
    displayElement.innerHTML = "";
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
    let carryString = "";
    let finalCalculation = "";
});