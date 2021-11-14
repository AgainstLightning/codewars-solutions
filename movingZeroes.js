
/*
    https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
    
    Example:     moveZeros([false,1,0,1,2,0,1,3,"a"]) 
    Returns:     [false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
    const zeroes = [];
    const filteredArray = arr.filter((x) => {
      if (x === 0) zeroes.push(0);
  
      return x !== 0;
    });
    
    return [...filteredArray, ...zeroes];
}