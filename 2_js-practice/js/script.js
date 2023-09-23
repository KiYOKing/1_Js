// 円の面積を求める計算
let radius = 6;
const pai=3;
let area = radius * radius * pai;

console.log(area);

//関数にまとめると
function calCircleArea(radius){
    const pai = 3;
    let area = radius * radius * pai;
    return area;
}

console.log(calCircleArea(radius));
console.log(calCircleArea(radius+1));
console.log(calCircleArea(radius+2));
console.log(calCircleArea(radius+3));
console.log(calCircleArea(radius+4));

// 引数
function showMessage(message){
    console.log(message);
}

showMessage("こんばんわ");
showMessage(123);

// 戻り値
function double(number){
    return number * 2;
}


console.log(double(4));

function say(firstName, lastName){
    // return firstName + lastName;
    // return `${firstName}${lastName}`;
    console.log(`${firstName}${lastName}`);
}

// console.log(say("田中", "太郎"));
say("山田","太郎");

// スコープ
let message;
function hello(){
    message="おはよう";
}

hello()
console.log(message);

// 条件分岐
if(true){
    console.log("True");
}

if(false){
    console.log("False");
}

console.log("10" === "10");

let score = 90;

// スコアが89超えの場合”最高”
if (score > 89){
    console.log("最高");
}

// スコアが８９以上の場合”８９点以上”
if(score >= 89){
    console.log("89点以上");
}

// スコアが６０未満の場合”頑張ろう”
if(score < 60){
    console.log("頑張ろう");
}

// スコアが８９の場合”８９点”
if(score === 89){
    console.log("89点");
}

// スコアが８９ではない場合”８９点ではない
if(score != 89){
    console.log("89点ではない");
}

// スコアが２０超え、かつ９０未満の場合”２０超え９０未満”
if(score > 20 && score < 90) {
    console.log("20超え90未満");
}

// スコアが８９、または０の場合”８９または０”
if(score === 89 || score ===0){
    console.log("89または０");
}

if(score >= 0 && score <= 100){
    if(score >89){
        console.log("頑張ったね");
    }else{
        console.log("頑張ろう");
    }
}

score=11;

switch(score){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 10:
        console.log("10");
        break;
    default:
        console.log("その他");
        break;
}
