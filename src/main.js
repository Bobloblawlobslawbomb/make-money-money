import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money.js';

function getElements(response) {
  if (response.result === "success") {
    $('#show-conversion').text(`That many ${response.base_code} converted to ${response.target_code} is ${response.conversion_result}`);
    $('#show-errors').text("");
  } else {
    $('#show-errors').text(`There was an error: ${response["error-type"]}`);
    $('#show-conversion').text("");
  }
}

$(document).ready(function() {
  
  let currencyCode;
  let dollarAmount;
  $('#form-one').submit(function(event){
    event.preventDefault();
    currencyCode = $("#radio-div input[type='radio']:checked").val();
    dollarAmount = $('#inputted-dollar-amount').val();
    MoneyService.getConversion(currencyCode, dollarAmount)
      .then(function(response) {
        getElements(response);
      });
  });
});