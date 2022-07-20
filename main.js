const input = require('sync-input');

const currencies = ["JPY", "EUR", "RUB", "GBP", "USD"];
const money = [113.5, 0.89, 74.36, 0.75, 1];

console.log(`Welcome to Currency Converter!`);
console.log(`1 ${currencies[4]} equals  1 ${currencies[4]}
1 ${currencies[4]} equals  ${money[0]} ${currencies[0]}
1 ${currencies[4]} equals  ${money[1]} ${currencies[1]}
1 ${currencies[4]} equals  ${money[2]} ${currencies[2]}
1 ${currencies[4]} equals  ${money[3]} ${currencies[3]}`);



while (true) {
console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
const answer = input();

if (answer == 1) {
  console.log(`What do you want to convert?`);
  let question = input("From:");
  let convert = question.toUpperCase();
  let resultConvert = currencies.indexOf(convert);
  
  let currency;
  let amount;

  if (currencies.indexOf(convert) >= 0) {
    currency = input("To:");
    let name = currency.toUpperCase();
    let resultCurrency = currencies.indexOf(name);
    if (currencies.indexOf(name) >= 0) {
      amount = input("Amount:");
      
      if (amount >= 1) {
          let count = (a, b) => a*b;
          let resultNumber = count(amount, money[resultCurrency])/money[resultConvert];
          let number = resultNumber.toFixed(4);
          console.log(`Result: ${amount} ${convert} equals ${number} ${name}`);
          break;
          } else if (isNaN(amount)) {
          console.log("The amount has to be a number");
          continue;
        } else {
          console.log("The amount can not be less than 1");
          continue;
        }
      } else {
      console.log(`Unknown currency`);
      continue;
      }
    } else {
    console.log(`Unknown currency`);
    continue;
    }
} else if (answer == 2) {
    console.log(`Have a nice day!`);
    break;
} else {
  console.log(`Unknown input`);
  continue;
}
}
