"use strict";
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
// Array of magician's names
let magicians = ["Criss Angel", "Houdini", "Criss Angel", "Dynamo"];
// Call make_great function to modify the array
make_great(magicians);
// Call show_magicians function to see the modified list
show_magicians(magicians);
