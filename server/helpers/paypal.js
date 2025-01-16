const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcKGpiAmts4I-sK9rSklkylFSwQ6tROYQYM9_c1-cc-cRIXXR1_r3ZHkMcTf9s6XE4ZFOppXc3FRCJYR",
  client_secret: "EPF4XO8GjNyqrM5A0huTXQKLzHWL0sbYwXgMEHMpgmaQB2fdMSktj09twi7an14ItDwI14cbHKDkx0lB",
});

module.exports = paypal;
