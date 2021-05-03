import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/money.js';

function getElements(response) {
  //console.log(response);
  if (response.result === "success") {

    $('#show-conversion').text(`That many ${response.base_code} converted to ${response.target_code} is ${response.conversion_result}`);
  } else {
    console.log(response);
    $('#show-errors').text(`There was an error: ${response["error-type"]}`); //this line may need tinkering
  }
}

$(document).ready(function() {
  
  let currencyCode;
  let dollarAmount;
  $('#form-one').submit(function(event){
    event.preventDefault();
    currencyCode = $("#radio-div input[type='radio']:checked").val();
    //currencyCode = "xyz"
    console.log("this is the currency code value: " + currencyCode);
    dollarAmount = $('#inputted-dollar-amount').val();
    console.log("and the dollar amount to convert: " + dollarAmount);
    MoneyService.getConversion(currencyCode, dollarAmount)
      .then(function(response) {
        //$('#show-conversion').text("success!!")
        getElements(response);
      });
  });
});