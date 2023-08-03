const message: string = `Hello, 
world!`
const greeting: string = 'Hello, '
const target: string = 'world!'

const greeting_2 = 'Hello, '
const target_2 = 'world!'

const bignum: bigint = (123n + 456n) * 2n
const result: bigint = 5n / 2n

const str = String(null)

console.log(message)
console.log(greeting + target)
console.log(`${greeting}, ${target}`)
console.log(greeting_2 + target_2)
console.log(bignum)
console.log(result)
console.log(str)
console.log(`123 + 456 = ${123 + 456}`)
console.log('Hello \\world/')
console.log('Hello \u{796d} world!')
// null undefined

const num1 = Number(true)
console.log(num1)
const num2 = Number(false)
console.log(num2)
const num3 = Number(null)
console.log(num3)
const num4 = Number(undefined)
console.log(num4)

const bigint1 = BigInt('1234')
console.log(bigint1)
const bigint2 = BigInt(500)
console.log(bigint2)
const bigint3 = BigInt(true)
console.log(bigint3)
// const bigint = BigInt("fooooo");
// console.log("bigint is ", bigint);

const str1 = String(1234.5)
console.log(str1)
const str2 = String(true)
console.log(str2)
const str4 = String(undefined)
console.log(str, str4)

console.log(Boolean(123))
console.log(Boolean(0))
console.log(Boolean(1n))
console.log(Boolean(0n))
console.log(Boolean(''))
console.log(Boolean('foobar'))
console.log(Boolean(null))
console.log(Boolean(undefined))

// 算術演算子 新規性あるもののみ記載
const str5: string = '123'
console.log(+str5 * 100)

let foo = 10
foo++
console.log(foo)
--foo
console.log(foo)

console.log('foo' + true)
console.log(null + 'bar')

// 論理演算子はJavaと大体おなじ

const input1 = '123',
    input2 = ''

const input1isNotEmpty = !!input1
const input2isNotEmpty = !!input2
console.log(input1isNotEmpty)
console.log(input2isNotEmpty)

console.log('foo' && 'bar')
console.log(0 && 123)

console.log('FOO' || 'BAR')
console.log(0 || 123)

// ?? について
const secret = process.env.SECRET ?? 'defaullt'
console.log(`sectetは${secret}です`)

// ループ
// 行末のセミコロンは省略可
let sum = 0
for (let i: number = 1 /**初期化 */; i <= 100 /**条件 */; i++ /**更新 */) {
    sum += i
}
console.log(sum)

// FizzBuzz
let resultFizzBuzz = ''
for (let i = 1; i <= 100; i++) {
    if (i > 1) {
        resultFizzBuzz += ' '
    }
    if (i % 3 === 0 && i % 5 === 0) {
        resultFizzBuzz += 'FizzBuzz'
    } else if (i % 3 === 0) {
        resultFizzBuzz += 'Fizz'
    } else if (i % 5 === 0) {
        resultFizzBuzz += 'Buzz'
    } else {
        resultFizzBuzz += String(i)
    }
}
console.log(resultFizzBuzz)
