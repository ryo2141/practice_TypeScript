import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('名前を入力してください:', (userName) => {
    // 文字列が入力されるとココが実行される
    if (userName === '') userName = '名無し'
    console.log(`こんにちは、${userName}さん`)
    rl.close
})
