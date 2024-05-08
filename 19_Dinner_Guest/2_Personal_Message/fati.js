"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello $(personName), Fatima how are you?`);
}
else {
    alert("You have to fill or else chammata parega!");
}
