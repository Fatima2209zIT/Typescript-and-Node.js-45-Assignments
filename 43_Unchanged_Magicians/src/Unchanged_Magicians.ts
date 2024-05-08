function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}

// Original array of magician's names
const originalMagicians: string[] = ["Criss Angel", "Houdini", "Criss Angel", "Dynamo"];

// Call make_great function with a copy of the array to modify
const greatMagicians: string[] = make_great([...originalMagicians]);

// Call show_magicians function to show the original list
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians function to show the modified list
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
