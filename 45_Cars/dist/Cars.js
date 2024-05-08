"use strict";
function store_car_info(manufacturer, model, ...args) {
    let carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    // Assign other properties if provided
    args.forEach((arg, index) => {
        if (index % 2 === 0 && index + 1 < args.length) {
            const key = args[index];
            const value = args[index + 1];
            carInfo[key] = value;
        }
    });
    return carInfo;
}
// Call the function with required information and two other name-value pairs
const carInfo = store_car_info("Toyota", "Camry", "color", "red", "year", 2024);
// Print the object to verify the information stored correctly
console.log(carInfo);
