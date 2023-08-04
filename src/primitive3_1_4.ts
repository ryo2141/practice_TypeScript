import { createInterface } from 'readline'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const messages = {
    good: '0以上の数値が入力されました！',
    bad: '負の数値を入力しないでください！',
}

rl.question('数値を入力してください:', (line) => {
    // 文字列が入力されるとココが実行される
    const num = Number(line)
    console.log(messages[num >= 0 ? 'good' : 'bad'])
    rl.close
})
