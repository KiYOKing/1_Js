//jQuery("主語").動詞("補語");
//jQuery("セレクタ").メソッド.("パラメータ")

// document.querySelector("#js-title").innerHTML="Daily Trial";

// jQuery("#js-title").text("Daily Trial");

// $("#js-title").text("Daily Trial");

// // jQuery("#js-title").css("color","red");

// jQuery(".text").css("color","red");

// jQuery("h1").css("color","red");

// jQuery("[href]").css("color","red");

// jQuery("h1,h2").css("color","red");

// const elements = jQuery(".text");

// elements.each(function(){
//     console.log(jQuery(this).text());
    
// })

// #js-sectionを起点に子孫要素のpタグを操作
// jQuery("#js-section").find("p").css("color","red");

// // #js-sectionを起点に子要素のpタグを操作
// jQuery("#js-section").children("p").css("color", "red");

// // クラスの追加
// jQuery("#js-btn").addClass("btn-register");

// // クラスの削除
// jQuery("#js-register").removeClass("btn-register");


// // CSSプロパティの設定
// jQuery("#js-title").css({
//     color:"red",
//     fontSize:"84px"
// });

// // 文字列の変更
// jQuery("#js-title").text("Daily Trial");
// const title = jQuery("#js-title").text();
// alert(title);

// jQuery("#js-title").text("Daily Trial").css("color","red");

// // .fadeIn()　ふわっと表示
// jQuery("#js-title").fadeIn(1500);

// // .fadeOut() ふわっと消える
// jQuery("#js-title").fadeOut(1500);

// // .slideDown() スライドして表示
// jQuery("#js-title").slideDown();

// // .slideUp() スライドして消える
// jQuery("#js-title").slideUp();

// イベントの構文は
// jQuery("セレクタ").on("イベント名",function(){})
// という構文で書きます
jQuery("#js-btn").on("click",function(){
    jQuery("#js-title").text("Daily Trial");
});

// #js-titleがホバーされた時に、文字の色をオレンジ色
// ホバーが外れたら元の色(#082b48)
jQuery("#js-title").on({
    mouseenter: function(){
        jQuery(this).css("color","orange");
    },
    mouseleave: function(){
        jQuery(this).css("color","#082b48");
    }
});

