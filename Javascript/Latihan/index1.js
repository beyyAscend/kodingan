const stock = {
    coffeeBeans : 1000,
    water : 1000,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stock masih ada, Bisa membuat kopi");
        } else {
            reject("Stock habis tidak bisa membuat coffe");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue); 
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess,handleFailure);

