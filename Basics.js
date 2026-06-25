
//-------- 4. Accept user input ---------------
//#region Accept user input


// to accept user input we can use:-
// 1. prompt() method
// 2. HTML form elements (textbox, radio button, checkbox, dropdown etc.) --> proffectional way
// let userName = "";
// userName = prompt("Enter your name: ");
// document.write("Hello " + userName + "<br>");


// 2. HTML form elements (textbox, radio button, checkbox, dropdown etc.) --> proffectional way

// let userName;

// document.getElementById("button").onclick = function () {
//     userName = document.getElementById("text").value;
//     alert("Hello " + userName);
// }

// changing HTML element content
// document.getElementById("button").onclick = function () {
//     userName = document.getElementById("text").value;
//     document.getElementById("h1").innerHTML = 'hello ' + userName;
// }
// when user click on button then only onclick function will be called and it will get the value from textbox and display it in h1 tag


//#endregion

// ------- 5. type conversion ---------------
//#region type conversion
// type conversion --> changing a datatype to another one (strings, numbers, boolean..etc)
// its of two types:-
// 1. implicit type conversion (type coercion)
// 2. explicit type conversion (type casting)

//let age = window.prompt("Enter your age: "); // input will be string
// age = age + 1; // implicit type conversion
// console.log(typeof(age)); // string
// console.log(age); // 201

// ------------------------------------------------------
// explicit type conversion

// age = Number(age); // explicit type conversion
// age = age + 1;
// console.log(typeof(age)); // number

// console.log(age); // 21
// ------------------------------------------------------
// strings
// let x = "pizza";
// let y = "pizza";
// let z = "pizza"

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // pizza string
// console.log(z, typeof (z)); // true boolean


// zeros
// let x = "0";
// let y = "0";
// let z = "0"

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // 0 number
// console.log(y, typeof (y)); // 0 string
// console.log(z, typeof (z)); // true boolean


// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // string
// console.log(z, typeof (z)); // false boolean

// // nulls
// let x ;
// let y ;
// let z ;
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof (x)); // NaN number
// console.log(y, typeof (y)); // pizza string
// console.log(z, typeof (z)); // true boolean



//#endregion

// ------- 6. Consts ---------------
//#region Consts

// const --> constant value (value which cannot be changed)

// const pi = 3.14;
// // pi = 3.145; // error
// let radius;
// radius = window.prompt("Enter radius of circle: ");
// radius = Number(radius);
// let area = pi * radius * radius;
// console.log("Area of circle is: " + area);

// --------- from HTML form elements -----------
// const PI = 3.14;
// document.getElementById("button").onclick = function () {
//     let radius = document.getElementById("raduis").value;
//     radius = Number(radius);
//     let area = PI * radius * radius;
//     console.log("Area of circle is: " + area);
//     document.getElementById("result").innerHTML = "Area of circle is: " + area;
// }


//#endregion

// ------- 7. Counter Program ---------------
//#region  Counter Program
// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// let value = document.getElementById("value");
// let count = 0;

// decreaseBtn.onclick = function () {
//     count--;
//     value.innerHTML = count;
//     if (count < 0) {
//         value.style.color = "red";
//     }
//     else if (count > 0) {
//         value.style.color = "green";
//     }
//     else {
//         value.style.color = "black";
//     }
// }
// resetBtn.onclick = function () {
//     count = 0;
//     value.textContent = count;
//     value.style.color = "black";
// }

// increaseBtn.onclick = function () {
//     count++;
//     value.innerHTML = count;
// }


//#endregion

// ------- 8. Math Object ---------------
//#region Math Object
// let pi = Math.PI;
// console.log('pi ' + pi);
// let euler = Math.E;
// console.log('euler number: ' + euler);

// // 2. Basic Math Methods
// let roundNumber = Math.round(3.6);    // Rounds to nearest integer (4)
// let flooNumber = Math.floor(3.9);    // Rounds down to integer (3)
// let ceilNumber = Math.ceil(3.1);      // Rounds up to integer (4)
// let absNumber = Math.abs(-5);         // Returns absolute value (5)

// // 3. Power and Square Root
// let power = Math.pow(2, 3);         // 2 raised to the power of 3 (8)
// let sqrt = Math.sqrt(16);           // Square root of 16 (4)

// // 5. Min and Max
// let minNumber = Math.min(3, 1, 4, 2); // Minimum value (1)
// let maxNumber = Math.max(3, 1, 4, 2); // Maximum value (4)

// // 6. Random Number
// let randomNum = Math.random();       // Random number between 0 and 1
// let randomNumRange = Math.floor(Math.random() * 100) ; // Random number between 1 and 100

// console.log('randomNumRange: ' + randomNumRange);

// // 7. Trigonometry
// let sinValue = Math.sin(0);    // Sine of angle in radians
// let cosValue = Math.cos(0);    // Cosine of angle in radians
// let tanValue = Math.tan(0);    // Tangent of angle in radians

//#endregion

// ------- 9. Random Number Generator ---------------
//#region Random Number Generator



//#endregion

//  ----------- 10. If Statements --------------
//#region

// let age = 21;
// if (age >= 21)
// {
//     console.log("hi there, your are old enough");
// }
// else
// {
//     console.log("you are under age ");
// }

// let hasLicense = false;
// if (age >= 16)
// {
//     console.log("can has licence!");
//     hasLicense = true;
// }
// else
// {
//     hasLicense = false;
// }


// ---- HTML checka age

// const text = document.getElementById("text");
// const submit = document.getElementById("submit");
// submit.onclick = function(){
//     age = text.value
//     age = Number(age);

//     if (age > 21) {
//         document.getElementById("result").innerHTML = "your are authorized to work!";
//     }
//     else {
//         document.getElementById("result").innerHTML = "you are not authorized to work!";
//     }
// }



//#endregion

//  ----------- 11. checked Button  ------------------
//#region checked Button

// const checkbox = document.getElementById("checkbox");
// const Visa = document.getElementById("Visa");
// const Paybal = document.getElementById("Paybal");
// const Mastercard = document.getElementById("Mastercard");
// const submit = document.getElementById("submit");
// const paymentResult = document.getElementById("paymentResult");
// const subResult = document.getElementById("subResult");

// // when user clicks submit , check if chekcBox is checked , if yes:
// submit.onclick = function (){
//     if (checkbox.checked){
//         subResult.innerHTML = "you are subiscribed !"; // do this
//     }
//     // if no :
//     else {
//         subResult.innerHTML = "you are not subiscribed"
//     }

//     if (Visa.checked){
//         paymentResult.innerHTML = "you are paying with Visa !"
//     }
//     else if (Paybal.checked){
//         paymentResult.innerHTML = "you are paying with Paybal"
//     }
//     else if (Mastercard.checked){
//         paymentResult.innerHTML = "you are paying with Mastercard"
//     }
//     else {
//         paymentResult.innerHTML = "please select a payment method"
//     }
// }


//#endregion

//  ----------- 12. Ternary Operators ------------------
//#region Ternary Operators

// let age = 20;
// condition ? true : false
// let message = age >= 21 ? "you are adult" : "your are not adult";
// console.log(message);

// let time = 10;
// let welcomeMessage = time < 12 ? "Good morning" : "Good afternoon";
// console.log(welcomeMessage);

// let isMember = true;
// let discount = isMember ? 0.1 : 0;
// console.log("Discount: " + discount * 100 + "%");



//#endregion

// ----------- 13. Switch Statement ------------------
//#region Switch Statement
// let day = 3;
// let dayName;
// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:

//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }
// console.log("Day name: " + dayName);

//#endregion

// ----------- 14. string methods ------------------
//#region string methods

// let name = "mostafa";
// let firstChar = name.charAt(0); // m
// console.log("First character: " + firstChar);

// let indexOfS = name.indexOf('s'); // 2
// console.log("Index of 's': " + indexOfS);

// let lenghtOfName = name.length; // 7
// console.log("Length of name: " + lenghtOfName);

// // trim() => Removes the leading and trailing white space and line terminator characters from a string.
// let userName = "   mostafa   ";
// console.log("Before trim: '" + userName + "'");
// let trimmedName = userName.trim(); // "mostafa"
// console.log("After trim: '" + trimmedName + "'");

// console.log (userName.trim().toUpperCase()); //
// console.log (userName.trim().toLowerCase()); //


// let name = "mostafa";
// let result = name.includes('s'); // true
// console.log("Includes 's': " + result); // true

// let slixedName = name.slice(1, 4); // ost
// console.log("Sliced name: " + slixedName); // ost

// let replacedName = name.replace('m', 'M'); // Mostafa
// console.log("Replaced name: " + replacedName); // Mostafa

// let test = name.repeat(3); // mostafamostafamostafa
// console.log("Repeated name: " + test); // mostafamostafamostafa

// let phoneNumber = "123-456-7890";
// let cleanedNumber = phoneNumber.replace(/-/g, ''); // 1234567890
// console.log("Cleaned phone number: " + cleanedNumber); // 1234567890

// // Pad the phone number to ensure it has a total length of 12 characters, adding '*' at the start if necessary
// // pad is to add chars , adding numbers of chars and the char to be added
// let phone = phoneNumber.padStart(12, '*'); // ***123-456-7890
// console.log("Padded phone number: " + phone); // ***123-456-7890


//#endregion

// ----------- 15. string slicing  ------------------
//#region string slicing
// let fullName = "mo nagy";
// let firstName = fullName.slice(0, 2);
// console.log(firstName); // mo
// // let lastName = fullName.slice(3, fullName.length);
// let lastName = fullName.slice(3); // the same
// console.log(lastName); // nagy

// // let fullName = "mostafa nagy";
// // let firstName = fullName.slice(0, fullName.indexOf(" ")); // mostafa
// // console.log(firstName);

// // let lastName = fullName.slice(fullName.indexOf(" ") + 1); // nagy
// console.log(lastName);


// let email = "nagy10@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

// let exstension = email.slice(email.indexOf("@"));
// console.log(exstension);


//#endregion

// ----------- 16. Method Chaining ------------------
//#region Method Chaining

// no method channing
// let username = "   moSTafa  ";
// let cleanName = username.trim().toLocaleLowerCase();
// let upperChar = cleanName[0].toUpperCase();
// console.log(upperChar);
// let result = upperChar + cleanName.slice(1);
// console.log(result);

// // method channing
// let username = "   moSTafa  ";
// let cleanName = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(cleanName);

//#endregion

// ---------- 17. strict equality operator -----------------
//#region strict equality operator
// = assignment operator
// == comparsion operator --> only check values are equals
// === strict equality operator --> check values and datatypes are equals
// != --> check values are not equals
// !== strict equality operator --> check values and datatypes are not equals

// const PI = 3.14;
// let pi = "3.14;"
// if (PI == "3.14"){
//     console.log('this is true in ==');
// }

// if (PI === "3.14"){
//     console.log('this is true');
// }
// else {
//     console.log("this is not true in ===");
// }


// let number = Number(1);
// let stringNumber = "1";
// if (number == stringNumber){
//     console.log("this is true in == ");
// }
// else {
//     console.log("GEEEKs");
// }

// if (number === stringNumber){
//     console.log("this is should be false");
// }
// else {
//     console.log("this is false in ===");
// }



//#endregion

// ---------- 18. while loop -----------
//#region while loop

// let isLoggedIn = false;
// let userName = "";
// let password = "";

// while(!isLoggedIn){
//     userName = window.prompt("please enter username");
//     password = window.prompt("please enter password");
//     if (userName === "nagy" && password === "nagy10"){
//         isLoggedIn = true;
//         console.log("you are logged in")
//     }
//     else {
//         console.log("invalid creds, please try again!");
//     }
// }


//#endregion

// ----------- 19. for loop -----------------
//#region for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//#endregion

// ------------ 20. Functions ------------------
//#region Functions
// function HappyBirthday(name){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!" + name);
// }
// HappyBirthday("mostafa");

// function addTwoNumbers(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let result = addTwoNumbers(3, 5);
// console.log(result);
//#endregion

// ----------- 21. Variable Scope  ------------------
//#region Variable Scope

// function myFunction() {
//     let carName = "Volvo"; // local scope
//     console.log(carName);
// }

// let carName = "Toyota"; // global scope
// console.log(carName); // Toyota
// myFunction(); // Volvo

//#endregion

// ----------- 22. Temperature conversion program   ------------------
//#region Temperature conversion program

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert() {
//     if (toFahrenheit.checked) {
//         temp = Number(textBox.value);
//         let fahrenheit = (temp * 9 / 5) + 32;
//         result.innerHTML = temp + "°C is " + fahrenheit + "°F";
//     }
//     else if (toCelsius.checked) {
//         temp = Number(textBox.value);
//         let celsius = (temp - 32) * 5 / 9;
//         result.innerHTML = temp + "°F is " + celsius.toFixed(2) + "°C";
//     }
//     else {
//         result.innerHTML = "please select a conversion type";
//     }
// }

//#endregion

// ----------- 23. Arrays------------------
//#region Arrays
// let arr = ["nagy", "ahmed", 22];
// console.log(arr);
// // (3) ['nagy', 'ahmed', 22]
// console.log(arr[0]); // nagy
// // etc...


// arr.push("test");
// console.log(arr); // (4) ['nagy', 'ahmed', 22, 'test']
// arr.pop();
// console.log(arr); // (3) ['nagy', 'ahmed', 22]

// let lengthofArray = arr.length;
// console.log(arr);

// let indexOfNagy = arr.indexOf("nagy");
// console.log(indexOfNagy); // 0

// let indexOfAhmed = arr.indexOf("ahmed");
// console.log(indexOfNagy); // 1

// let indexOfNon = arr.indexOf("none");
// console.log(indexOfNon); // -1


// // for loop in js
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// // anohter syntax
// for(let element of arr){
//     console.log(element);
// }

//#endregion

// --------------- 24. separated operators -----------------
//#region separated operators

// let name = "mostafa";
// console.log(...name); // m o s t a f a
// // seperate the elements

// let letters = [...name].join(",");
// console.log(letters); // m,o,s,t,a,f,a

// let front_end = ["HTML", "CSS", "javascript"];
// let Back_end = ["SQL, C#", "API"];
// let web = [...front_end, ...Back_end];
// console.log(web); // (5) ['HTML', 'CSS', 'javascript', 'SQL, C#', 'API']

// function AddFoods(...foods){
//     console.log(foods);
// }

// let food1 = "pizza";
// let food2 = "burger";
// let food3 = "checken";
// let food4 = "salad";

// AddFoods(food1, food2, food3, food4);
// (4) ['pizza', 'burger', 'checken', 'salad']
// u can pass it any parametrs u want to pass

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const result = sum(1, 2, 3);
// console.log(result); // 6

// function joinNames(...fullName){
//     return  SVGStringList.join(" ");
// }

// const fullName = joinNames("MR. ", "Mostafa", "Nagy", "Helmy");
// console.log(fullName)

//#endregion

// --------------- 25. Dice Roller program 🎲 ------------
//#region  Dice Roller program 🎲


//#endregion


// START -> #29 03:58:44
// ------------ 26. Random password generator ----------------
//#region Random password generator

// const passwordLenght = 12;
// const includeUppercase = true;
// const includeLowercase = true;
// const includeNumbers = true;
// const includeSymbols = true;


// function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     console.log("allowedChars: " + allowedChars); // to check allowed chars, result = allowedChars: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=

//     if (length <= 0) {
//         return "Please select at least one character type.";
//     }

//     if (allowedChars.length === 0) {
//         return "Please select at least one character type.";
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }

//     return password;
// }

// const password = generatePassword(passwordLenght,
//     includeUppercase,
//     includeLowercase,
//     includeNumbers,
//     includeSymbols);



// console.log("Generated password: " + password);


//#endregion


// ---------- 27. #30 04:10:49 Callbacks ----------------
//#region Callbacks 🤙
// call back = a function that is passed an argument to another function
// used to handle asynchronous operations :
// 1. Reading a file
// 2. Network Request
// 3. Interacting with database

// Ex:- when your are done with reading a file, do network request
// then when your are done with send network request, insert in db

// hello();
// goodbye();
// output :- Hello
// Goodbye
// function hello(){
//     console.log("Hello");
// }

// function goodbye(){
//     console.log("Goodbye");
// }

// what if hello takes some time ?
//  function hello(){
//     setTimeout(() => {
//         console.log("Hello");
//     }, 3000);
// }

// function goodbye(){
//     console.log("Goodbye");
// }
// output :- Goodbye
// after 3 secs , Hello

// ------ THEN Callbacks is here  ----------
// hello(goodbye); // output :- after finishing hello function , well calls goodbye function

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }


// function goodbye() {
//     console.log("Goodbye");
// }


// hello(wait); // output :- Hello , then waiting... after finishing hello function , well calls wait function

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function goodbye() {
//     console.log("Goodbye");
// }

// function wait(){
//     console.log("waiting...");
// }


// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }
// function displayResult(result) {
//     console.log("Result: " + result);
// }

// sum(displayResult, 3, 5); // output :- Result: 8


// function DisplayPage(result){
//     document.getElementById("result").textContent = "Result: " + result;
// }

// sum(DisplayPage, 10, 20); // output :- Result: 30 in HTML page

//#endregion


// ---------- 28. foreach ------------
// #region foreach

// let numbers = [1, 2, 3, 4, 5];

// function Display(element){
//     console.log(element);
// }

// numbers.forEach(Display);
// output :- 1 2 3 4 5

// double the numbers using forEach
// function double (element, index, array){
//     array[index] = element * 2;
// }

// numbers.forEach(double);
// console.log(numbers); // output :- [2, 4, 6, 8, 10]

// triple
// function triple (element, index, array){
//     array[index] = element * 3;
// }

// numbers.forEach(triple);
// console.log(numbers); // output :- [3, 6, 9, 12, 15]

// square
// function square (element, index, array){
//     array[index] = Math.pow(element, 2);
// }

// numbers.forEach(square);
// console.log(numbers); // output :- [1, 4, 9, 16, 25]

// let array = [1, 2, 3, 4, 5];

// array.forEach(element => {
//     console.log(element);
// });




//#endregion


// ------------- 29. .map() -----------
//#region  .map()

// accepts a callback and applies that function to each element of an array
// then return a new array

// const nums = [1, 2, 3, 4];

// const squareNums = nums.map(square);
// console.log(squareNums);
//  //[1, 4, 9,16]

// function square(element){
//     return Math.pow(element, 2)
// }

// const students = ["nagy", "helmy", "ashraf", "mos"];

// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);

// function upperCase (element){
//     return element.toUpperCase();
// }


// const dates = ["2024-1-2", "2025-2-23", "2026-2-6"];

// const partDates = dates.map(formatDates);
// console.log(partDates);
// // [    "1/2024/2",    "2/2025/23",    "2/2026/6"

// function formatDates(element){
//     const parts = element.split("-");
//     return parts[1] + '/' + parts[0] + '/' + parts[2];
// }
/*

الفرق بين map و for loop

بالـ for:

let numbers = [1,2,3];

let result = [];

for(let i = 0; i < numbers.length; i++){
    result.push(numbers[i] * 2);
}

console.log(result);

بالـ map:

let numbers = [1,2,3];

let result = numbers.map(n => n * 2);

console.log(result);

نفس النتيجة لكن map أقصر وأنظف.

استخدام Arrow Function

بدل:

numbers.map(function(num){
    return num * 2;
});

نكتب:

numbers.map(num => num * 2);
مثال على Objects (الاستخدام الشائع)

لو عندك:

let users = [
    {name: "Ahmed", age: 25},
    {name: "Ali", age: 30},
    {name: "Mona", age: 22}
];

عايز تجيب الأسماء فقط:

let names = users.map(user => user.name);

console.log(names);

الناتج:

["Ahmed", "Ali", "Mona"]
تعديل بيانات Objects

مثلاً تزود العمر:

let updatedUsers = users.map(user => {
    return {
        name: user.name,
        age: user.age + 1
    };
});

console.log(updatedUsers);

الناتج:

[
 {name:"Ahmed", age:26},
 {name:"Ali", age:31},
 {name:"Mona", age:23}
]
مهم: map لا تغير الـ array الأصلية

مثال:

let nums = [1,2,3];

let result = nums.map(n => n * 10);

console.log(nums);
console.log(result);

الناتج:

[1,2,3]      // الأصلية لم تتغير

[10,20,30]   // الجديدة
الفرق بين map و forEach

forEach:

ينفذ كود على كل عنصر
لا يرجع array جديدة
numbers.forEach(n => {
    console.log(n);
});

map:

ينفذ كود
ويرجع array جديدة
let x = numbers.map(n => n * 2);
امتى تستخدم map؟

استخدمها لما تكون عايز:

✅ تحويل البيانات
✅ استخراج قيم معينة
✅ تعديل شكل الـ data
✅ تجهيز بيانات للـ UI أو API
*/


//#endregion


// --------- 30. filter() ----------------
//#region filter()
// create new array by filter out elements
// let nums = [1,2,3,4,5,6,7,8];

// let evenNums = nums.filter(isEven);
// console.log(evenNums);
// // [2,4,6,8]
// function isEven(element){
//     return element % 2 === 0 ;
// }


// let oddNums = nums.filter(isOdd);
// console.log(oddNums);
// // [1,3,5,7]
// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [15, 30, 6,17,20,19,23];

// let adults = ages.filter(isAdult);
// console.log(adults); // (4) [30, 20, 19, 23]

// function isAdult(element){
//     return element >= 18;
// }


// function isChild(element){
//     return element <= 18;
// }
// let childs = ages.filter(isChild);
// console.log(childs); // (3) [15, 6, 17]


// const words = ["apple", "orange", "test", "banana"];

// const shortWords = words.filter(getShortWords);
// console.log(shortWords); //(4) ['apple', 'orange', 'test', 'banana']
// function getShortWords(element){
//     return element.length <= 6;
// }

//#endregion


// -------- 31. reduce() ------------
//#region reduce()
// reduce Element of an Array to single value

// const prices = [10, 35, 643, 20, 35];
// const total = prices.reduce(sum);
// console.log(total); // 743
// function sum(accumulator, element){
//     return accumulator + element;
// } // accumulator is previoes element, element is current , reutrn sum of array


// const grades = [70,68,19,26,80];
// const Maximum = grades.reduce(getMax);
// console.log(Maximum); // 80
// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }


//#endregion


// ----------- 32. function ecpression -------------
//#region function ecpression

// function ecpression is a way to define a function as a value or a variable

// الطريقة العادية
// function hello(){
//     console.log("hello");
// }
// hello(); // hello

//  function ecpression
// const hello = function(){
//     console.log("hello");
// }

// hello(); // hello

// use  function ecpression as a variable
// setTimeout(function() {
//     console.log("hello from setTimeOut")
// }, 3000);
//  // after 3 secondes will print hello from setTimeOut
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// IMPORTANT

// const numbers = [12, 34, 35, 5];
// const square = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// console.log(square); // (4) [144, 1156, 1225, 25]


// const even = numbers.filter(function(element){
//     return element % 2 === 0;
// });
// console.log(even); // (2) [12, 34]

// const odd = numbers.filter(function(element){
//     return element % 2 !== 0;
// });
// console.log(odd); // (2) [35, 5]


// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });
// console.log(total); // 86

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


//#endregion

// ----------- 33. arrow functions -------------
//#region arrow function

// arrow function is away to wrire function expression
// good for simple funcs that use only once
// (paramters) => same code

// const hello = () => console.log("hii");
// hello(); // hii

// const hello = (name) => {console.log("hello " +  name);};
// hello("mostafa"); // hello mostafa

// const hello = (name, age) => {console.log("hello " +  name + " you are " + age + " years old");};
// hello("mostafa", 20); // hello mostafa you are 20 years old

// setTimeout( () => {console.log("hi ")}, 3000); // hi, after 3 seconds

// const numbers = [1, 2, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2)); // (5) [1, 4, 16, 25, 36]
// console.log(squares);

// const evenNums = numbers.filter((element) => element % 2 === 0);
// console.log(evenNums); // (3) [2, 4, 6]


//#endregion


// ----------- 34. objects in js -------------
//#region object

// const person1 = {
//     name : "nagy",
//     age : 30,
//     isEmployeed : false,
//     sayHello: function() { console.log("hi aim "+ this.name)},

// }

// console.log(person1.name); // nagy
// console.log(person1.age); // 30
// console.log(person1.isEmployeed); // false
// person1.sayHello(person1.name); // hi aim nagy

// const person2 = {
//     firstName : "mostafa",
//     lastName : "nagy",
//     age : 30,
//     isEmployeed : false,
//     sayHello : function() {console.log("hi, aim " + this.firstName)}
// };

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployeed);
// person2.sayHello(person2.firstName);

// arrow function don't support this keyword ->
// in person2 object -> sayHello : () => {console.log("hi, aim " + this.firstName)}
// print hi, aim undefined

// regular function ->
// sayHello : function() {console.log("hi, aim " + this.firstName)}
// print -> hi, aim mostafa



//#endregion


// ----------- 35. this keyword -------------
//#region this = reference to object where this is used (the object reference on the immediate context)

// const person = {
//     name : "mostafa",
//     age : 23,
//     sayHello : function() {console.log("HI, " + name)} // hi, undefined
// }

// const person = {
//     name : "mostafa",
//     age : 23,
//     sayHello : function() {console.log("HI, " + this.name)} // hi, mostafa
// }

// person.sayHello();

//#endregion


// ----------- 36. constructor -------------
//#region constructor

// function Car(name, model, color){
//     this.name = name,
//     this.model = model,
//     this.color = color;
//     this.drive = function(){console.log("car 1 drive ......")}
// }

// const car1 = new Car("BMW", "1992", "red");
// const car2 = new Car("for", "1994", "white");

// console.log(car1.color);
// console.log(car1.name);
// console.log(car1.model);
// car1.drive();


// console.log(car2.name);
// console.log(car2.model);
// console.log(car2.color);


//#endregion


// ----------- 37. classes -------------
//#region classes

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     DisplayProduct = function () {
//         console.log("product " + this.name);
//         console.log("Price " + this.price);
//     };

//     calculateTotal = function (salesTax) {
//         return this.price + (this.price * salesTax);
//     }

// }

// const product1 = new Product("shirt", 60);
// const product2 = new Product("coffee", 20);
// const product3 = new Product("mug", 10);

// product1.DisplayProduct();
// //product shirt | Price 60

// const tax = .002;
// const totalPrice = product1.calculateTotal(tax);
// console.log("Total Price is " + totalPrice); // Total Price is 60.12


// product2.DisplayProduct();


//#endregion


// ----------- 37. static keyword -------------
//#region static
// static defines properity or method that belong to a class itself rather than any object

// class MathUtil {
//     static PI = 3.14; // static will not changed at run time

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }

// }

// console.log(MathUtil.PI); // 3.14
// const diameter = MathUtil.getDiameter(2);
// console.log(diameter); // 4

// console.log(MathUtil.getArea(20)); // 1256


// class User{
//     static userCount = 0;
//     constructor(userName) {
//         this.userName = userName;
//         User.userCount++;
//     }

//     static getUserCount (){
//         console.log("user count is : " + User.userCount);
//     }

// }

// const user1 = new User("nagy helmy");

// console.log(user1.userName);
// console.log(user1.userCount); // undefined -> it's static
// console.log(User.userCount); // 1

// const user2 = new User("mostafa");
// User.getUserCount(); // user count is : 2



//#endregion


// ----------- 38. inheritance  -------------
//#region inheritance

// class Person {
//     age = 0;

//     eat(){
//         console.log(this.name + " eating ...")
//     }
// }

// class Employee extends Person{
//     name = "mostafa";
//     work(){
//         console.log(this.name + " working ...")
//     }
// }


// class Child extends Person{
//     name = "saged";
// }


// class Woman extends Person{
//     name = "zozo";
// }


// const employee = new Employee();
// const child = new Child();
// const woman = new Woman();


// employee.eat(); // mostafa eating ...
// employee.work(); // mostafa working ...
// child.eat(); // saged eating ...
// woman.eat(); // zozo eating ...



//#endregion


// ----------- 38. super keyword  -------------
//#region super keyword
// super is used in classes to call constructor
// or access the props and methods of a PARENT (superclass)
// this -> this object
// super -> super class


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // using super
//     move(speed) {
//         console.log("this " + this.name + " can run with speed: " + speed)
//     }
// }

// class Rabbit extends Animal {

//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;

//     }
//     run() {
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age); // if you used ctor , you should use super to call super calss
//         this.swimSpeed = swimSpeed;
//     }

//     swim() {
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//     fly() {
//         super.move(this.flySpeed);
//     }
// }



// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// // if you didn't call super ->Basics.js:1402 Uncaught ReferenceError:
// // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// // at new Rabbit


// console.log(rabbit.name); // rabbit
// console.log(rabbit.age); // 1
// console.log(rabbit.speed); // 25


// rabbit.run(); // this rabbit can run with speed: 25

// fish.swim(); // this fish can run with speed: 12

// hawk.fly(); // this hawk can run with speed: 50
//#endregion


// ----------- 39. Getters & Setters  -------------
//#region Getters & Setters
// Getters = method to make properity readable
// Setters = method to make properity writable


// class Rectangle{

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;

//     }
// }

// const rect = new Rectangle(-222, "pizza"); // Not Make any Sence !


// class Rectangle {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;

//     }
//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else {
//             console.log("width cannot be less than 0")
//         }
//     }
//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         }
//         else {
//             console.log("height cannot be less than 0")
//         }
//     }


//     get width() {
//         return this._width;
//     }

//     get height() {
//         return this._height
//     }
//     get area() {
//         return this._width * this._height;
//     }
// }

// // const rect = new Rectangle(-222, "pizza"); // width cannot be less than 0
// const rect = new Rectangle(222, 33); //

// console.log(rect.height); // 33
// console.log(rect.width); // 222
// console.log(rect.area); // 7326

// class Person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     set name(newName) {
//         if (typeof newName === "string" && newName.length > 0) {
//             this._name = newName;
//         }
//         else {
//             console.error("name must be a non empty string");
//         }
//     }


//      set age(newAge) {
//         if (newAge > 0 && typeof newAge === "number") {
//             this._age = newAge;
//         }
//         else {
//             console.error("age must be a non negative integer");
//         }
//     }

// }

// const person = new Person("mostafa", 24);

//#endregion


// ----------- 40. Destructuring -----------------
//#region Destructuring 💥

// extract values from arrays and objects
// then assign them to variable in a convenient way
// [] to perfrom array destructring
// {} to perform object destructing

// -------- Example 1. -------------------
// swap value of two variables
// let a = 2;
// let b = 3;

// [a, b] = [b, a];

// console.log(a); // 3
// console.log(b); // 2

// -------- Example 2. -------------------
// swap 2 elements in array
// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[3]] = [colors[3], colors[0]];

// console.log(colors[0]); // black
// console.log(colors[3]); // red


// ---------------- Example 3. ---------------
// assign array elements to variables

// const colors = ["red", "green", "blue", "black", "white"];
// const[first, second, third] = colors;

// console.log(first); // red
// console.log(second); // green
// console.log(third); // blue

// ---------------- Example 4. ---------------
// extract values from objects

// const person1 = {
//     firstName : "nagy",
//     lastName : "helmy",
//     age : 34,
//     job : "lawer"
// }

// const {firstName, lastName, age, job } = person1;
// console.log(firstName); // nagy
// console.log(lastName); // helmy
// console.log(age); // 34
// console.log(job); // lawer


// ---------------- Example 5. ---------------
// destructure in function parameters
// NOT :- {firstName, lastName, age, job} -> passed as an object -> {}
// function displayPerson({firstName, lastName, age, job}){
//     console.log("name: "+ firstName + " " + lastName);
//     console.log("Age : " + age);
//     console.log("job: "+ job);
// }

// const person1 = {
//     firstName : "nagy",
//     lastName : "helmy",
//     age : 34,
//     job : "lawer"
// }


// const person2 = {
//     firstName : "mostafa",
//     lastName : "nagy",
//     age : 23,
// }

// displayPerson(person1);
// displayPerson(person2);


//#endregion


// ----------- 40. nested objects -----------------
//#region nested objects
// allows you to represent more complex data structure
// child objects is enclosed by a parent object
// example:- person {Address{}, ContactInfo{} }
// example:- ShoppingCart {Keyboard{}, Mouse{} }

// const Person = {
//     fullName : "mo nagy",
//     age : 30,
//     hobbies : ["football", "chess", "programming"],

//     // nested object
//     address : {
//         street : "dr-hamdy street",
//         city : "ashmoun",
//         country : "egypt"
//     }
// }


// console.log(Person.fullName);
// console.log(Person.age);
// console.log(Person.address); // {street: 'dr-hamdy street', city: 'ashmoun', country: 'egypt'}
// console.log(Person.address.street);
// console.log(Person.address.city);
// console.log(Person.address.country);


// for(const prop in Person.address){
//     console.log(Person.address[prop]); // will loop over values and print it
// }

// class Person {
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const Person1 = new Person("sara", 30,
//                                      "123 street",
//                                      "cairo",
//                                      "egypt"
// );


// const Person2 = new Person("nagy", 20,
//                                      "456 street",
//                                      "cairo",
//                                      "egypt"
// );

// console.log(Person1.address.street);
// console.log(Person1.address.city);
// console.log(Person1.address.country);


//#endregion


// ----------- 40. array of objects -----------------
//#region array of objects

// const fruits = [
//     {name: "apple", color : "red", price : 25},
//     {name: "banana", color : "yellow", price : 23},
//     {name: "orange", color : "orange", price : 21},
//     {name: "carrot", color : "green", price : 20},

// ]

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[0].price);

// console.log(fruits[1].name);


// fruits.push({name: " grapes", color : "yellow", price : 20});
// fruits.splice(0, 2); // will remove elements from 0 -> 2

// console.log(fruits);
/*
0: {name: 'orange', color: 'orange', price: 21}
1:{name: 'carrot', color: 'green', price: 20}
2:{name: ' grapes', color: 'yellow', price: 20}length: 3[[Prototype]]
*/


// ------------------ forEach() ----------------

// fruits.forEach(fruits => console.log(fruits.name));


// const names = fruits.map(fruits => fruits.name);
// console.log(names); //  ['apple', 'banana', 'orange', 'carrot']

// const colors = fruits.map(fruits => fruits.color);
// console.log(colors); //  ['red', 'yellow', 'orange', 'green']


// ---------------- filter() ----------------

// const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
// console.log(yellowFruits);//  {name: 'banana', color: 'yellow', price: 23}len

// const cheapFriuts = fruits.filter(fruits => fruits.price <= 100);
// console.log(cheapFriuts);
// 0: {name: 'apple', color: 'red', price: 25}
// 1: {name: 'banana', color: 'yellow', price: 23}
// 2: {name: 'orange', color: 'orange', price: 21}
// 3: {name: 'carrot', color: 'green', price: 20}



// ------------- reduce() ---------------

// const maxFriuet = fruits.reduce((max, friut) =>
//                                     friut.price > max.price ?
//                                     friut : max);

// console.log(maxFriuet); // {name: 'apple', color: 'red', price: 25}


//#endregion


// ------------ 41. sort ------------
//#region sort
// sort() = method used to sort elements of array in place

// const fruits =  ["apple" ,  "banana",  "orange", "carrot"];
// fruits.sort();
// console.log(fruits); //  ['apple', 'banana', 'carrot', 'orange']

// const nums = [4,1,9,3,5,8,1,0];

// nums.sort();
// console.log(nums); // [0, 1, 1, 3, 4, 5, 8, 9]

// //

// nums.sort((a, b) => a - b); // sort asc
// console.log(nums); // [0, 1, 1, 3, 4, 5, 8, 9]


// nums.sort((a, b) => b - a); // sort desc
// console.log(nums); // [9, 8, 5, 4, 3, 1, 1, 0]


// const people = [
//     {name : "mostafa", age : 20, gpa : 2.5},
//     {name : "nagy", age : 60, gpa : 3.0},
//     {name : "zozo", age : 30, gpa : 2.9},
// ]


// people.sort((a, b) => a.age - b.age); // sort people by age asc
// console.log(people);
/*
0: {name: 'mostafa', age: 20, gpa: 2.5}
1: {name: 'zozo', age: 30, gpa: 2.9}
2: {name: 'nagy', age: 60, gpa: 3}
*/


// people.sort((a, b) => a.gpa - b.gpa); // sort people by gpa asc
// console.log(people);
/*
0: {name: 'mostafa', age: 20, gpa: 2.5}
1: {name: 'zozo', age: 30, gpa: 2.9}
2: {name: 'nagy', age: 60, gpa: 3}

*/


//#endregion


// ------------ 41. shuffle an array  ------------
//#region shuffle an array

// const cards = ['A', 2,3,4,5,6,7,8,9,10];
// // cards.sort(() => Math.random() - .5);
// // console.log(cards);

// shuffle(cards);
// console.log(cards);

// // Fisher yates algorithm

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));
//        [array[i] , array[random] = array[random], array[i]];
//     }
// }

//#endregion


// ------------ 42. Dates  ------------
//#region Dates
// object that contain values that represent dates time

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date();
// console.log(date); // Tue Jun 23 2026 15:01:42 GMT+0300 (Eastern European Summer Time)

// const date = new Date(2024, 0, 1);
// console.log(date); // Mon Jan 01 2024 00:00:00 GMT+0200 (Eastern European Standard Time)

// const date = new Date("2025-01-02T12:00:00Z");
// console.log(date); // Thu Jan 02 2025 14:00:00 GMT+0200 (Eastern European Standard Time)

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const dayOfWeek = date.getDay();


// console.log(year); // 2026
// console.log(month); // 5
// console.log(day); // 23
// console.log(dayOfWeek); // 2

// date.setFullYear(2027);

// const date1 = new Date("2025-12-2");
// const date2 = new Date("2026-12-2");

// if (date1 < date2) {
//     console.log("Happy new year !");
// }// Happy new year !

//#endregion

// *********************** مهم -> closure *****************************************
// ------------ 42. closure  ------------
//#region closure

// closure a function defined inside of another function
// the inner function has access to the variables
// allow for private variables and state mintance
// used frequently in js framworks

// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
// }

// outer(); // will not print anything

// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }

// outer(); //  Hello



// function createCounter() {

//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`count is ${count}`);
//     }
//     return { increment };
// }

// const counter = createCounter();
// counter.increment(); // count is 1
// counter.increment(); // count is 2
// counter.increment(); // count is 3
// counter.increment(); // count is 4


// function createGame() {
//     let score = 0;

//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }

//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`);
//     }

//     function getScore() {
//         return score;
//     }
//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(5); // +5pts
// game.decreaseScore(3); // -3pts
// console.log(game.getScore()); // 2

//#endregion

// ****************************************************************

// -------------- 43. setTimeOut() ---------------------
//#region setTimeOut()
// setTimeOut() is a function to allows you to schedule the execution
// of a function after an amount of time (ms)

// function sayHello(){
//     window.alert("Hello");
// }

// setTimeout(sayHello, 2000); // after 2 seconds will print hello

// another syntax
// setTimeout(function() {
//     window.alert("hello");
// }, 3000);


// setTimeout(() => {window.alert("Hello");},  3000);

// const timeOutId = setTimeout(() => {window.alert("Hello");},  3000);

// clearTimeout(timeOutId);

// onclick the button

// let timeOutId;

// function startTime(){
//   timeOutId =  setTimeout(() => {
//         window.alert("Hi from HTML");
//     }, 3000);
// }
// function clearTime(){
//     clearTimeout(timeOutId);
//     console.log("Cleared!");
// };

//#endregion


// *********************** ⭐ Digital Clock program 🕐  *****************************************
// -------------- 44. ⭐ Digital Clock program 🕐 ---------------------
//#region ⭐ Digital Clock program 🕐

// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours().toString().padStart(2, 0); // to show hours as 08 instead of 8
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0); // to show seconds as 27 instead of 2
//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;


// }

// updateClock();

// // to get clock update every second
// // The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, 
// // with a fixed time delay between each call.
// setInterval(updateClock, 1000);

//#endregion



// *********************** ⭐ STOP WATCH 🕐  *****************************************
// -------------- 54. ⭐ STOP WATCH 🕐 ---------------------
//#region STOP WATCH 🕐

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stop() {
// if (isRunning){
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
// }
// }

// function reset() {
// clearInterval(timer);
// startTime = 0;
// elapsedTime = 0;
// isRunning = false;

// display.textContent = `00:00:00:00`;
// }

// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);
//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     milliseconds = String(milliseconds).padStart(2, "0");

//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }



//#endregion

// -------------- 55. ESC6 Module ---------------------
//#region ESC6 Module
// ESC6 Module is an external file that contains reusable code
// that can ve imported into other js files
// can contain variables, classes and functions
// write reusable code for many different apps 
// --------------- مهم ------------------
// import {pi, getArea, getVolume} from './mathUtil.js';
// // now u can use pi, getArea, getVolume in your file
// console.log(pi);
// const radius = 30;
// console.log(getArea(30)); // 188.4

// console.log(getVolume(radius)); // 11304



//#endregion

// -------------- 56. Asynchronus ---------------------
//#region Asynchronus
// synchronus = executes line by line consecutively is a sequantial manner
// code that waits for an operation to complete

// Asynchronus = allows multiple operations to be performed concurrently without waiting 
// doesn't block the execution flow and allows the program to continue 


// Example :- synchronus --> waits for every line to complete
// setTimeout(() => { console.log("Task 1");}, 3000);

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// output -> 
// Task 2
// Task 3
// Task 4
// and after 3 secs -> Task 1 --> setTimeout is Asynchronus


// callbacks
// function func1(callback) {
//     setTimeout(() => { console.log("Task 1"); callback() }, 3000);
// }

// function func2() {
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }

// func1(func2);
// output -> 
// after 3 secs
// Task 1
// Task 2
// Task 3
// Task 4

//#endregion

// -------------- 57. Error Handling ---------------------
//#region Error Handling 
// error is an object that created to represent a problem 
// that occurs often with user input or establish connection

// console.log(x); // Uncaught ReferenceError: x is not defined

// try & catch
// try {
//     console.log(x);
// }
// catch (error) {
//     console.error(error); // Uncaught ReferenceError: x is not defined
// }
// finally{
//     // close files
//     // close connections
//     // do any clean up
//     console.log("this executs finally"); // this executs finally
// }

// handling errors example

// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if (divisor == 0) {
//         throw (new Error("values must be number"));
//     }
//     const result = dividend / divisor;
//     console.log(result);
// }
// catch (error) {
//     console.error(error);
// }

//#endregion


// *********************** ⭐ Calculator program🕐  *****************************************
// ---------------- 58.Calculator program ----------------
//#region Calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = `${display.value} = ${eval(display.value)}`;
    }
    catch (eror) {
        display.value = "error"
    }
}


//#endregion


