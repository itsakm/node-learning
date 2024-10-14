// const generateRandomNumer = require('./utils')  //common js import method
// const { generateRandomNumer, celsiusToFarenhite} = require('./utils'); //multiple import common js

// import generateRandomNumer from "./utils.js"; //es6 single import
import {generateRandomNumer, celsiusToFarenhite } from './utils.js'; //es6 multiple import
console.log(generateRandomNumer());
console.log(celsiusToFarenhite(34));