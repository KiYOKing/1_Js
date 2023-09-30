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

// トップへ戻るボタンを作ろう
jQuery("#js-button-top").on("click", function(){
    jQuery("html,body").animate({scrollTop:0},1000);
});

// ドロワーメニューを作ろう
jQuery("#js-button-drawer").on("click",function(){
    jQuery(this).toggleClass("is-checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is-fixed");
});