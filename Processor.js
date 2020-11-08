
//INPUT DATA
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let cardNumber = document.getElementById('card');
let amount = document.getElementById('quantity');
let getCurr = document.getElementById('curr');
let getConv = document.getElementById('convCurr');
let securityCode =  Math.floor(Math.random() * 9000) + 999;

//FUNCTIONS
document.getElementById('mybtn').addEventListener("click", processPay);
document.getElementById('mybtn').addEventListener("click", verifyCode);

function convert(quant, standard, conversion) {

  //PRICES UPDATED TO DATE NOV 7, 2020
  let price = {
    USD: 1.00,
    EUR: 0.84,
    GBP: 0.76,
    BRL: 5.36,
    MXN: 20.58
  };

  return (quant/price[standard]) * price[conversion];
}

function createCode() {
    document.getElementById('security').innerHTML = `Code Created: ${securityCode}`;
}
createCode();

function verifyCode() {
  let verCode = prompt('Digit Security Code');

  if (verCode == securityCode) {
    window.alert('Transaction Completed');
  } else {
    window.alert('Incorrect Code');
    document.getElementById('dataInput').innerHTML = `<p>Incorrect code, try it again</p>`;
  }
}

//ONCLICK FUNCTION
function processPay() {

    let conv = convert(amount.value, getCurr.value, getConv.value).toFixed(2);

    let total = `First Name: ${firstName.value.toUpperCase()} <br> Last Name: ${lastName.value.toUpperCase()} <br>
    Card Number: ${cardNumber.value} <br> Standard Amount: ${amount.value} ${getCurr.value} <br>
    Converted Amount: ${conv} ${getConv.value}`;

    document.getElementById('dataInput').innerHTML = total;

  }
