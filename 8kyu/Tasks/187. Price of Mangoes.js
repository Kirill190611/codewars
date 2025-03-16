//T: Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

//S:
const mango = (quantity, price) => (quantity - Math.floor(quantity / 3)) * price