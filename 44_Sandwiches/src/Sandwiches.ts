function make_sandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        items.forEach(item => console.log("- " + item));
    }
    console.log(); // Adding an empty line for clarity
}

// Call the function three times with different numbers of arguments
make_sandwich(["Bread", "Cheese", "Tomato", "Lettuce"]);
make_sandwich(["Turkey", "Swiss Cheese"]);
make_sandwich([]);