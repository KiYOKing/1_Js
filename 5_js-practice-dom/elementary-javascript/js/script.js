// id名で取得
// console.log(document.querySelector("#js-title").outerHTML);
// console.log(document.getElementById("js-title").outerHTML);

// class名で取得
// console.log(document.querySelector(".text").outerHTML);


// const elements = document.querySelectorAll(".text");

// for (let element of elements){
//     console.log(element.outerHTML);
// }

// class名で取得
// const elements = document.getElementsByClassName("text");
// for (let element of elements){
//     console.log(element.outerHTML);
// }

// // タグ目で取得
// console.log(document.querySelector("h1").outerHTML);

// // 属性で取得
// console.log(document.querySelector('[href="https://www.daily-trial.com/"]').outerHTML);

// document.querySelector("")

document.querySelector("#js-title").innerHTML = "Daily Trial"

const button = document.createElement("a");

button.innerHTML="ログイン"

button.setAttribute("class","btn");

button.setAttribute("href","https://tokyofreelance.jp/")

document.querySelector("#js-btn-wrap").appendChild(button);
