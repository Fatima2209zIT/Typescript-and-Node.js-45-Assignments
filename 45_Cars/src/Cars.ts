interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function store_car_info(manufacturer: string, model: string, ...args: any[]): Car {
    let carInfo: Car = {
        manufacturer: manufacturer,
        model: model
    };

    
    args.forEach((arg, index) => {
        if (index % 2 === 0 && index + 1 < args.length) {
            const key = args[index];
            const value = args[index + 1];
            carInfo[key] = value;
        }
    });

    return carInfo;
}


const carInfo = store_car_info("Toyota", "Camry", "color", "red", "year", 2024);


console.log(carInfo);
