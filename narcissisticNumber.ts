// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript

export function narcissistic(value: number): boolean {
    const digits = value.toString().split("").map((digit) => parseInt(digit));
    
    const sum = digits.reduce((prev, next) => prev += Math.pow(next, digits.length), 0);
    
    return sum === value;
}