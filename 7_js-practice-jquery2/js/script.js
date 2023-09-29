// ボタンクリックでアラートを表示
// jQuery("#js-button-alert").on("click",function(){
//     alert("おはよう！");
// });

// document.querySelector("#js-button-alert").addEventListener("click",function(){
//     alert("おはよう！");
// });

document.getElementById("js-button-alert").addEventListener("click",function(){
    alert("こんばんは！");
});

// アコーディオンメニューを作ろう
jQuery(".js-accordion").on("click",function(){
    jQuery(this).next().slideToggle("slow");
});
