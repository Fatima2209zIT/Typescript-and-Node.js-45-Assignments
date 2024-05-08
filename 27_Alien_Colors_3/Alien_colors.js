"use strict";
let alienColors = "green";
//Version 1 of the program
if (alienColors === "green") {
    console.log("Version 1 : Player earned 5 points");
}
else if (alienColors === "yellow") {
    console.log("Player just earned 10 points");
}
else if (alienColors === "red") {
    console.log("Player just earned 15 points");
}
else {
    console.log("Please select the right color");
}
//Version 2 of the program
alienColors = "yellow";
if (alienColors === "green") {
    console.log("Player earned 5 points");
}
else if (alienColors === "yellow") {
    console.log("Version 2 : Player just earned 10 points");
}
else if (alienColors === "red") {
    console.log("Player just earned 15 points");
}
else {
    console.log("Please select the right color");
}
//Version 3 of the program
alienColors = "red";
if (alienColors === "green") {
    console.log("Player earned 5 points");
}
else if (alienColors === "yellow") {
    console.log("Player just earned 10 points");
}
else if (alienColors === "red") {
    console.log("Version 3 : Player just earned 15 points");
}
else {
    console.log("Please select the right color");
}
