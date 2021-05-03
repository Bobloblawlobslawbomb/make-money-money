# Currency Conversion Project

#### An app that allows you to enter a dollar amount, specify, which currency you'd like to convert that to and then displays the information requested. 
### By Giancarlo Vigneri
---
## Technologies Used

>* _HTML_
>* _CSS_
>* _JavaScript_
>* _JQuery_
>* _Node_
>* _Webpack_
>* _Jest_
>* _ESLint_
>* _Babel_
>* _Application Programming Interface (API)_
---
## Description 
The program will present the user with a set of currency choices, under the heading: 'Pick a currency to convert to:' once the user makes that choice they are presented with a text field to enter a dollar amount. The user is expected to enter the amount of money they would like to convert in dollars (ex. 100 = 100 USD). Then the user is presented with their value of dollars converted into the latest values of the equvivalent currency. 

## Setup/Installation Requirements
### Getting your own API key:
(note: this is only necessary if you plan to make your own application or would like your own way to access the information from https://www.exchangerate-api.com)

1) Navigate to https://www.exchangerate-api.com
2) Click on "Get Free Key" button in top right of page
3) Enter the email address you'd like to use and choose a valid password. Press 'enter' or click button
4) An email will be sent to you from exchangerate-api.com. Click the link contained to confirm your email.
5) Another email will be sent to you with your API key.
6) Or alternatively you can go to https://www.exchangerate-api.com, sign in to your account and navigate to the dashboard (https://app.exchangerate-api.com/dashboard) and your API key will be displayed there, along with usage details (note: the free tier only allows 1500 API calls a month)
7) Remember to store you APi key safely. It is yours and yours alone, do not allow anyone else to access it.
    > How to store your API key safely:
    > 1. Create a file called '.env' in your root directory.
    > 2. Navigate into the .env file and type "API_KEY={your Api key goes here}" (_after the '=' enter your Api key_). Save the file.
    > _note: the program uses '${process.env.API_KEY}' for the Api call in money.js. It is important that you have named your Api key 'API_KEY' in the .env file_

### Running the Program:
1) Clone the repository: https://github.com/Bobloblawlobslawbomb/make-money-money
2) Navigate to the 'make-money-money/' directory on your computer
3) Open with your favorite text editor (Visual Studio Code, is a pretty sweet one)
4) To start a development server and view the project in the browser:
    > * Navigate to 'make-money-money/' in your command line
    > * Follow the steps under 'Getting your own API key'
    > * Run the command "npm install" to install dependencies
    > * Optionally, run the command "npm run build" to bundle the files (_note: your Api key needs to be setup within the .env file before building the program_)
    > * Finally, run the command "npm run start" to start a development server

## Known Bugs

* _none. That I know of..._
---

## License [GPL] (https://choosealicense.com/licenses/gpl-3.0/)
_if you do run into any issues or have questions, ideas, or concerns; I would greatly encourage you to send feedback or make a contribution to the code_

---

## Contact Information
_Contact Giancarlo Vigneri at: bobloblaw.vigneri@gmail.com_ 

('eff' capitalism)