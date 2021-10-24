// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

export function squareSum(numbers: number[]): number {
    let sum: number = 0;
  
    numbers.forEach((num) => sum += num ** 2);
  
    return sum;
}