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

// フォームに入力された値をアラート表示しよう
// jQuery("#js-form-name").on("submit",function(){
//     if(jQuery("#js-input-name").val() === ""){
//         // alert("必須入力です。");
//         jQuery(".error-message").text("必須入力です");
//     }else{
//         jQuery(".error-message").text("");
//         alert(jQuery("#js-input-name").val() + "さん、こんにちは");
//     };
// });
jQuery("#js-form-name").on("submit", function(e){
    e.preventDefault();
    const nameInput = jQuery("#js-input-name")
    const yourName = nameInput.val();

    if (!yourName){
        nameInput.next(".error-message").text("必須入力です。");
        return;
    }

    nameInput.next(".error-message").text("");
    alert(`${yourName} さん、こんにちは`);

    return false;
})
