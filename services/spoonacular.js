// services/spoonacular.js

const axios = require('axios');

// const apiKey = '340a4f1903fa48c690292ff2432f2d1a';
const apiKey = 'a3e93b22a410437b84ed13e235c9e55b';

const spoonacular = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
});

module.exports = spoonacular;
