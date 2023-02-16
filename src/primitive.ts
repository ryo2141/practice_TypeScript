import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('数値を入力してください:', (line) => {
    // 文字列が入力されるとココが実行される
    const num = Number(line);
    // console.log(`${line}が入力されました`);
    console.log(num + 1000);
    rl.close;
});