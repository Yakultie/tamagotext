var config = {};

// HTTP Port to run our web application
config.port = process.env.PORT || 8000;

// This should be your own mobile telephone number
// You will use it to control your Tamagotchi
config.myNumber = process.env.+85291084278;

// Your Twilio account SID and auth token, both found at:
// https://www.twilio.com/user/account
// A good practice is to store these string values as system environment variables, and load them from there as we are doing below. 
// Alternately, you could hard code these values here as strings.
config.twilioConfig = {
    // You can get your AccountSid and AuthToken from https://www.twilio.com/user/account/voice
    // Make sure you expand the Show API Credentials
    accountSid: process.env.AC586c6e3caac0c42d221eeedd91c14ed3,
    authToken: process.env.d515c34e67c95a1dddff602cc016af44,
    // A Twilio number you control - choose one from:
    // https://www.twilio.com/user/account/phone-numbers/incoming
    number: process.env.+85264522488
  }
  // configure foods and games to be played
config.actions = {
    pet: ["hangman", "tic-tac-toe", "human knot", "london bridges", "frog races", "water balloon fights", "silly relay races", "Far Cry 4", "GTA5"],
    food: ["apple", "cheetos", "burrito", "lettuce", "pear", "ice cream", "froyo", "chicken nugget", "chicken wing"]
  }
  // Export configuration object
module.exports = config;
