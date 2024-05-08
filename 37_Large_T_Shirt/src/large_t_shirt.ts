function make_shirt(size: string = "L", message: string = "I love TypeScript"): void {
    console.log(`Printing ${size} shirt with message: "${message}"`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("M");

// Shirt of any size with a custom message
make_shirt("S", "I love Javascript"); 