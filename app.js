//Making variables to hold the buttons
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
//Making variables to save the buttons value(example: number button 0 will hold the value of the actual number "0").
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

let arrEquation = [];//this will hold the string of numbers or operation unit each time the equal sign or a operation unit button(=,+) is pressed.
let storeNumbsFromButtons = "";
function NumberLimit()
{
    if (storeNumbsFromButtons.length == 13) {storeNumbsFromButtons = storeNumbsFromButtons.slice(0, -1);};
    displayElement.innerHTML = storeNumbsFromButtons;
};
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
//Event Listeners for the buttons
number0Bttn.addEventListener("click", () =>
{   
    zero = number0Bttn.value; //Give the value of the button to the variable zero to be stored.
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = zero; storeNumbsFromButtons = zero;}
    else {displayElement.innerHTML += zero; storeNumbsFromButtons += zero;}
    NumberLimit();
});
number1Bttn.addEventListener("click", () =>
{   
    one = number1Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = one; storeNumbsFromButtons = one;}
    else {displayElement.innerHTML += one; storeNumbsFromButtons += one;}
    NumberLimit();
});
number2Bttn.addEventListener("click", () =>
{   
    two = number2Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = two; storeNumbsFromButtons = two;}
    else {displayElement.innerHTML += two; storeNumbsFromButtons += two;}
    NumberLimit();
});
number3Bttn.addEventListener("click", () =>
{   
    three = number3Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = three; storeNumbsFromButtons = three;}
    else {displayElement.innerHTML += three; storeNumbsFromButtons += three;}
    NumberLimit();
});
number4Bttn.addEventListener("click", () =>
{   
    four = number4Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = four; storeNumbsFromButtons = four;}
    else {displayElement.innerHTML += four; storeNumbsFromButtons += four;}
    NumberLimit();
});
number5Bttn.addEventListener("click", () =>
{   
    five = number5Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = five; storeNumbsFromButtons = five;}
    else {displayElement.innerHTML += five; storeNumbsFromButtons += five;}
    NumberLimit();
});
number6Bttn.addEventListener("click", () =>
{   
    six = number6Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = six; storeNumbsFromButtons = six;}
    else {displayElement.innerHTML += six; storeNumbsFromButtons += six;}
    NumberLimit();
});
number7Bttn.addEventListener("click", () =>
{   
    seven = number7Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = seven; storeNumbsFromButtons = seven;}
    else {displayElement.innerHTML += seven; storeNumbsFromButtons += seven;}
    NumberLimit();
});
number8Bttn.addEventListener("click", () =>
{   
    eight = number8Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = eight; storeNumbsFromButtons = eight;}
    else {displayElement.innerHTML += eight; storeNumbsFromButtons += eight;}
    NumberLimit();
});
number9Bttn.addEventListener("click", () =>
{   
    nine = number9Bttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = nine; storeNumbsFromButtons = nine;}
    else {displayElement.innerHTML += nine; storeNumbsFromButtons += nine;}
    NumberLimit();
});
decimalBttn.addEventListener("click", () =>
{   
    decimal = decimalBttn.value;
    if (displayElement.innerHTML == 0) {displayElement.innerHTML = decimal; storeNumbsFromButtons = decimal;}
    else {displayElement.innerHTML += decimal; storeNumbsFromButtons += decimal;}
    NumberLimit();
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
    add = addBttn.value; //giving the add variable the actual value of an additon operator.
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
    valueLast = storeNumbsFromButtons; //this adds the last number entered because the number is usually caught by the operating unit(+,- etc)
    if (value9 == "") {arrEquation.push(valueLast);}
    //setting up the variables to hold the eaquations for the times the operator button is pressed. It's saved and broken down into sections below.
    let equation1 = "";
    let equation2 = "";
    let equation3 = "";
    let equation4 = "";
    let equation5 = "";
    
    
    for (let i = 0; i < arrEquation.length; i++)
    {
        /*This handles the math function. It allows the user to use up to four operating units max and sorts them by sections every time they pick a
        operating unit. example: (2+2)=equation1 if they do another operating unit (5+3)=equation2*/
        if (arrEquation[1] == "*") {equation1 = arrEquation[0] * arrEquation[2];}
        if (arrEquation[1] == "/") {equation1 = arrEquation[0] / arrEquation[2];}
        if (arrEquation[1] == "+") {equation1 = parseFloat(arrEquation[0]) + parseFloat(arrEquation[2]);}
        if (arrEquation[1] == "-") {equation1 = arrEquation[0] - arrEquation[2];}
        if (arrEquation[3] == "*") {equation2 = equation1 * arrEquation[4];} //I take the sum from equation1 and use it in equation 2.
        if (arrEquation[3] == "/") {equation2 = equation1 / arrEquation[4];}
        if (arrEquation[3] == "+") {equation2 = equation1 + parseFloat(arrEquation[4]);}
        if (arrEquation[3] == "-") {equation2 = equation1 - arrEquation[4];}
        if (arrEquation[5] == "*") {equation3 = equation2 * arrEquation[6];} // take the sum from equation2 and use it in equation 3.
        if (arrEquation[5] == "/") {equation3 = equation2 / arrEquation[6];}
        if (arrEquation[5] == "+") {equation3 = equation2 + parseFloat(arrEquation[6]);}
        if (arrEquation[5] == "-") {equation3 = equation2 - arrEquation[6];}
        if (arrEquation[7] == "*") {equation4 = equation3 * arrEquation[8];}
        if (arrEquation[7] == "/") {equation4 = equation3 / arrEquation[8];}
        if (arrEquation[7] == "+") {equation4 = equation3 + parseFloat(arrEquation[8]);}
        if (arrEquation[7] == "-") {equation4 = equation3 - arrEquation[8];}
        if (arrEquation[9] == "*") {equation5 = equation4 * arrEquation[9];}
        if (arrEquation[9] == "/") {equation5 = equation4 / arrEquation[9];}
        if (arrEquation[9] == "+") {equation5 = equation4 + parseFloat(arrEquation[9]);}
        if (arrEquation[9] == "-") {equation5 = equation4 - arrEquation[9];}
    }
    
    if (equation1 != "") //This checks to see if there is a equation(the first operator used +,-,*/) 4 - 2
    {
        finalCalculation = equation1
    }
    if (equation2 != "") //This checks to see if there is a second equation(the second operator used +,-,*/) 4 - 2 * 3
    {
        finalCalculation = equation2
    }
    if (equation3 != "") //If there is no equation for the next step it continues looking through but it only uses equations that are available.
    {
        finalCalculation = equation3
    }
    if (equation4 != "")
    {
        finalCalculation = equation4
    }
    if (equation5 != "")
    {
        finalCalculation = equation5
    }
    if (finalCalculation > 100000000000)
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
        alert("Solution exceeds program max.")
    }

    //This section allows the user to keep the equation going after getting the answer to the equation using the answer as the new starting number. 
    displayElement.innerHTML = finalCalculation;
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
    storeNumbsFromButtons = finalCalculation;
});
//deletes the last number of the string being typed(backspace)
deleteButton.addEventListener("click", () =>
{   
    storeNumbsFromButtons = storeNumbsFromButtons.slice(0, -1);
    displayElement.innerHTML = storeNumbsFromButtons;
})
//clears all the data entered completely
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