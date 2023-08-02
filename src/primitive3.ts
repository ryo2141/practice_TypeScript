import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('パスワードを入力してください:', (password) => {
    // 文字列が入力されるとココが実行される
    if(password === 'hogehoge') {
        console.log('ようこそ！');
    } else {
        console.log('誰？');
    }
    rl.close;
});

// x == null の比較の時は「==」を使用してOK（ただしundefinedとnullを明確に分けて比較するときは「===」を使う
// NaNは何とどのように比較してもfalseをかえす
// NaNかどうか判定したいときはNumber.isNan()を使う

// 論理演算子はJavaと大体おなじ