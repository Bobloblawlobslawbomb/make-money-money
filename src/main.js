import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/make-money-money.js';

function getElements(response) {
  if (response.success) {
    $('#show-conversion').text(`That many ${response.base_code} converted to ${response.target_code} is ${response.conversion_result}`);
  } else {
    $('#showErrors').text(`There was an error: ${response.message}`); //this line may need tinkering
  }
}

$(document).ready(function() {
  let currencyCode;
  let dollarAmount;
  $('#form-one').submit(function(){
    currencyCode = $("#radio-div input[type='radio']:checked").val();
    console.log("this is the currency code value: " + currencyCode);
    dollarAmount = $('#inputted-dollar-amount').val();
    console.log("and the dollar amount to convert: " + dollarAmount);
    MoneyService.getConversion(currencyCode, dollarAmount)
      .then(function(response) {
        getElements(response);
      });
  });
});