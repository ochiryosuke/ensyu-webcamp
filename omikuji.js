let name;
let result;

name = prompt("お名前を教えてください");

//名前がないとき名無しにする
if(!name){
    name = "名無し";
}

//名前を付け加える
document.getElementById("name").innerHTML = name;

//乱数を生成して切り上げ 
let rand = Math.floor( Math.random() * 5);

if(rand == 0){
    result = "大吉";
}
if(rand == 1){
    result = "中吉"
}
if(rand == 2){
    result = "小吉";
}
if(rand == 3){
    result = "吉"
}
if(rand == 4){
    result = "凶";
}

//結果を反映させる
document.getElementById("result").innerHTML = result;