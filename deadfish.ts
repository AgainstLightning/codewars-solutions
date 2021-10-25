/*

    https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

    Write a simple parser that will parse and run Deadfish.

    Deadfish has 4 commands, each 1 character long:

        - i increments the value (initially 0)
        - d decrements the value
        - s squares the value
        - o outputs the value into the return array

    Invalid characters should be ignored.

    Example:

    parse("iiisdoso") => [8, 64]
    
*/

export function parse(data: string): number[] {
    let curr = 0;
    let chars = data.split("");
    let result: number[] = [];
    
    chars.forEach((c) => {
      switch(c) {
          case "i":
            curr++;
            break;
          case "d":
            curr--;
            break;
          case "s":
            curr = curr * curr;
            break;
          case "o":
            result.push(curr);
            break;
          default:
            break;
      }
    })
    
    return result;
}