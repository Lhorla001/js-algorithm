//QUESTION 1
function convertFahrToCelsius(f){
  var c;
  var f;
  if (isNaN(f)){
      if(Array.isArray(f)){
          console.log(JSON.stringify(f)+ " is not a valid number but a/an array");
      } 
      else if(typeof(f)=='object'){
          console.log(JSON.stringify(f)+ " is not a valid number but a/an object");
      }
      else {
          console.log(f + " is not a valid number but a/an " + typeof(f));
      }
        return f;
    }
    else {
      c=((f-32)/1.8);
      console.log(c.toFixed(4));
      return c;
    }
}
convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]);
convertFahrToCelsius({temp: 0});


//QUESTION 2
function checkYuGiOh(n){
    //to verify if the values passed into the CheckYuGiOh is valid
    if (isNaN(n) === true) {
        return 'invalid parameter: ' + JSON.stringify(n);
    }
    else {
      const value = multipleFactors(n);
      return value;
    }
  
    // using functions to replace multiple factors (2, 3, 5) to phrases ('yu', 'gi', 'oh')
    function multipleFactors(params) {
      let myArr = [];
      
      for (k = 1; k <= params; k++) {
            if (k % 2 === 0 && k % 3 === 0 && k % 5 === 0) {
                myArr.push("yu-gi-oh");
            } 
            else if (k % 2 === 0 && k % 3 === 0) {
                myArr.push("yu-gi");
            } 
            else if (k % 2 === 0 && k % 5 === 0) {
                myArr.push("yu-oh");
            } 
            else if (k % 3 === 0 && k % 5 === 0) {
                myArr.push("gi-oh");
            } 
            else if (k % 5 === 0) {
                myArr.push("oh");
            } 
            else if (k % 3 === 0) {
                myArr.push("gi");
            } 
            else if (k % 2 === 0) {
                myArr.push("yu");
            } 
            else {
                myArr.push(k);
            }
        }
      
      return myArr;
    }
};
  
console.log(checkYuGiOh(10));
console.log(checkYuGiOh('5'));
console.log(checkYuGiOh('fizzbuzz is meh'));