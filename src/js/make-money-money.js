export default class MoneyService {
  static getConversion() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;//rm .message after error
      });
  }
}

// export default class PokemonService {
//   static getPokemon(pocketMonsterName) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pocketMonsterName}`)
//       .then(function (response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function (error) {
//         return error;
//       });
//   }
// }

// export default class WeatherService {  
//   static async getWeather(city) {
//     try {
//       const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
//       if (!response.ok) {
//         throw Error(response.statusText);
//       }
//       return response.json();
//     } catch(error) {
//       return error.message;
//     }
//   }
// }