import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/make-money-money.js';

function getElements(response) {
  if (response.success) {
    $('#show-conversion').text(/*`the string that displays all the stuff we got from the API`*/);  //(`The humidity in ${response.name} is ${response.main.humidity}%`);
  } else {
    $('#showErrors').text(`There was an error: ${response.message}`); //this line may need tinkering
  }
}

$(document).ready(function() {
  $('#pick-a-currency').click(function() {
    let currencyCode = $('#radio-div').val();
    let dollarAmount = $('#inputted-dollar-amount').val();// not done here, think i need to either jumble everything to only require one click/button or rework the the function in some way
    MoneyService.getConversion(currencyCode, dollarAmount)
      .then(function(response) {
        getElements(response);
      });
  });
});

// function showConversion(response) {
//   if (response.result === "success") {
//     $('#show-conversion').text(`The amount specified in ${response.base_code} is: `); //jquery the answer here after 'is:'
//   } else {
//     $('.showErrors').text(`There was an error: ${response.message}`);
//   }
// }

// async function parseMoney() {
//   const response = await MoneyService.getConversion();
//   if (response instanceof Error) {
//     console.log("Hey! This is an error!");
//   } else {
//     showConversion(response);
//     $("#could-not-find").hide();
//   }
// }