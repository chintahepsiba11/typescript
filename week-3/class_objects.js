"use strict";
function calculateDiscount(price, discount) {
    return price - (price * discount);
}
const calculateFinalPrice = (price, discount) => price - (price * discount);
const greetUser = (name) => `Hello, ${name}! Welcome`;
const productPrice = 1200;
const discountRate = 0.15;
console.log(greetUser("charmi"));
const finalPrice1 = calculateDiscount(productPrice, discountRate);
console.log(`Final Price (Function): ₹${finalPrice1}`);
const finalPrice2 = calculateFinalPrice(productPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);
