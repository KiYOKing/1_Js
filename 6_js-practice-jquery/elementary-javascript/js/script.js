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

// #js-sectionを起点に子要素のpタグを操作
jQuery("#js-section").children("p").css("color", "red");