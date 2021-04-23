import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MoneyService from './js/make-money-money.js';

function showConversion(response) {
  if (response.result === "success") {
    $('#show-conversion').text(`The amount specified in ${response.base_code} is: `); //jquery the answer here after 'is:'
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

async function parseMoney() {
  const response = await MoneyService.getConversion();
  if (response instanceof Error) {
    console.log("Hey! This is an error!");
  } else {
    showConversion(response);
    $("#could-not-find").hide();
  }
}