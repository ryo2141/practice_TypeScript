const message: string = `Hello, 
world!`;
const greeting: string = "Hello, ";
const target: string = "world!";

let greeting_2 = "Hello, ";
let target_2 = "world!";

const bignum: bigint = (123n + 456n) * 2n; 
const result: bigint = 5n / 2n; 

const str = String(null);

console.log(message);
console.log(greeting + target);
console.log(`${greeting}, ${target}`);
console.log(greeting_2 + target_2);
console.log(bignum);
console.log(result);
console.log(str);
console.log(`123 + 456 = ${123 + 456}`);
console.log("Hello \\world/");
console.log("Hello \u{796d} world!");
// null undefined


const num1 = Number(true);
console.log(num1);
const num2 = Number(false);
console.log(num2);
const num3 = Number(null);
console.log(num3);
const num4 = Number(undefined);
console.log(num4);

const bigint1 = BigInt("1234");
console.log(bigint1);
const bigint2 = BigInt(500);
console.log(bigint2);
const bigint3 = BigInt(true);
console.log(bigint3);
// const bigint = BigInt("fooooo");
// console.log("bigint is ", bigint);

const str1 = String(1234.5);
console.log(str1);
const str2 = String(true);
console.log(str2);
const str4 = String(undefined);
console.log(str, str4);

console.log(Boolean(123));
console.log(Boolean(0));
console.log(Boolean(1n));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean("foobar"));
console.log(Boolean(null));
console.log(Boolean(undefined));