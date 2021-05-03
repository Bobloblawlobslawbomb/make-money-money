export default class MoneyService {  
  static getConversion(currencyCode, dollarAmount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyCode}/${dollarAmount}`)// to get a sweet error make this v5
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;//add a custom error --- figure out how to return an error in here
      });
  }
}