# js-algorithm
QUESTION 1

Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

Note:

  - Round up your answers to 4 decimal places (hint: use the toFixed method)
  - C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
  - if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
    `${parameter} is not a valid number but a/an ${parameter's type}.`
    
You can use the following cases as guides:

  - convertFahrToCelsius(0) should return `-17.7778`
  - convertFahrToCelsius("0") should return `-17.7778`
  - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
  - convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`
  
QUESTION 2

Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

Note:

  - for numbers that have multiple factors, use hyphens as separators
    e.g 10 === "yu-oh", 30 === "yu-gi-oh"
  - perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 

Use the following cases as guides:

  - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
  - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
  - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
