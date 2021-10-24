/*

Write a function that takes a string of parentheses, and determines if the order 
of the parentheses is valid. The function should return true if the string is 
valid, and false if it's invalid.

Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

Constraints
    0 <= input.length <= 100

*/

function validParentheses(parens){
    let strArr = parens.split('');
    
    while (strArr.length !== 0) {
      const closingParenIndex = strArr.findIndex((x) => x === ")");
      const openingParenIndex = strArr.findIndex((x) => x === "(");
      
      if(closingParenIndex === -1) return false;
      if(openingParenIndex === -1) return false;
      if(openingParenIndex > closingParenIndex) return false;
      
      strArr.splice(closingParenIndex, 1);
      strArr.splice(openingParenIndex, 1)
    }
    
    return true;
}