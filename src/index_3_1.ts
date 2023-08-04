const obj: {
    foo: number
    bar: string
} = {
    foo: 123,
    bar: 'Hello, world!',
    // 最後の「,」はあってもなくてもOK
}

console.log(obj.foo)
console.log(obj.bar)

// type分で型に命名
const objType: FooBarObj = {
    foo: 123,
    bar: 'Hello, world!',
    // 最後の「,」はあってもなくてもOK
}
type FooBarObj = {
    foo: number
    bar: string
}

console.log(objType.foo)
console.log(objType.bar)

// interface文でオブジェクト型を宣言
interface FooBarObj2 {
    foo: number
    bar: string
}
const obj_2: FooBarObj2 = {
    foo: 0,
    bar: 'string',
}
console.log(obj_2)

// const name = input ? input : '名無し'
// const user = {
//     name,
//     age: 20,
// }

const propName = 'foo'
const obj1 = {
    [propName]: 123,
}
console.log(obj1)

const obj2 = {
    foo: 123,
    bar: 456,
    baz: 789,
}

// スプレッド構文
// 順番に注意 後に書かれた方が採用される
const obj3 = {
    ...obj2,
    foo: -123,
}
console.log(obj3)

// オブジェクトを別々に作りたい場合（コピーしたい場合）
// 同じ参照になるのを避けたいとき
const goo = { num: 1234 }
const bar = { ...goo } // {}をつける
console.log(bar.num)
bar.num = 0
console.log(goo.num)
console.log(bar.num)

console.log(obj.foo)
console.log(obj.bar)
