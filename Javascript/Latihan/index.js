const orderCoffe = callback => {
    let coffee = null;
  console.log("Sedang membuat coffe,silahkan tunggu");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!"
    callback(coffee);
  }, 3000);
}

orderCoffe(coffe =>{
  console.log(coffe);
});

