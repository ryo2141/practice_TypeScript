import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    // 文字列が入力されるとココが実行される
    // const num = Number(line);
    console.log("こんにちは、" + name + "さん");
    rl.close;
});