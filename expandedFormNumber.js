/*

https://www.codewars.com/kata/5842df8ccbd22792a4000245

You will be given a number and you will need to return it as a string in Expanded Form.
All numbers will be whole numbers greater than 0. 

Example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

*/

function expandedForm(num) {
    var str = String(num);
    var result = '';
    var multiplier = Math.pow(10, str.length - 1);
    var res = '';
  
    for(var i = 0; i <str.length; i++) {
      var el = +str[i];
      console.log(el);
      
      if(+str[i]) res += (el * multiplier);
      if(+str[i + 1]) res += " + ";
      
      multiplier /= 10;
    }
    
    return res;
}