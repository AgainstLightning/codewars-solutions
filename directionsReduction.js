/*
    https://www.codewars.com/kata/550f22f4d758534c1100025a
*/

function dirReduc(arr) {
    var opposites = {
      NORTH: "SOUTH",
      SOUTH: "NORTH",
      EAST: "WEST",
      WEST: "EAST"
    };
    
    let pos = 0;
    
    while (pos !== arr.length) {
      if(arr[pos + 1] === opposites[arr[pos]]) {
        arr.splice(pos, 2);
        
        if (pos > 0) {
          pos--; 
        }
      } else {
        pos++;
      }
    }
    
    return arr;
}