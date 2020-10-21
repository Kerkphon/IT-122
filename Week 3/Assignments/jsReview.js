//Variables - Variables are use to store information. JS is not strict type.

var a = 10;
var name = "Luffy";
var middleName = 'D';
var isHot = false;

//Arrays
var arrayNumbers = [1,2,3,4,5];
var arrayString = ["Kevin","Love"];

//Objects
var obj1 = {
  name: "Phillip",
  age: 25
}

//Functioins - Functions are block of code /resusable code

function myFunction() {
  console.log("Hey");
}

//Pass parameters to a functions
function myFunction2(greeting) {
  console.log(greeting);
}

myFunction2("Hello");

//FLow Control (Conditionals)
var a = 1

//Basic if else
if(true){
  doThis;
}else {
  doThat;
}

//if else with multiple conditions

if(a == 1) {
  doThis;
}else if(a ==2){
  doThat;
}else{
  doTheOtherThing;
}

var zipCode;

switch(zipCode){
  case 98101:
    doStuff1;
    break;

  case 98109:
    doStuff2;
    break;

  default: 
    doContigient;
    break;
}

//Flow Control (Loop)
//For Loop - finite counting
for(var i = 0; i < 10; i++){
    doStuff;
}

//While Loop - Infinite counting/ don't know 
var b = true
while(true){
  doStuff;
  if(someCondition){
    b = false; 
  }
}

//Data Structure 
a = 2;
a = 4;