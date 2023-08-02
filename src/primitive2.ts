import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください:', (name) => {
    // 文字列が入力されるとココが実行される
    const displayName = name || "名無し";
    console.log(`こんにちは、${displayName}さん`);
    rl.close;
});