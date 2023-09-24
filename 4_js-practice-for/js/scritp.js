const todoLists=["Web制作","Youtube","インスタ"];

// for文
todoLists.push("サウナ");
for (let todoList of todoLists){
    console.log(todoList);
}

todoLists.push("ゴルフ");
// for文2
for (let i=0; i < todoLists.length; i++){
    console.log(todoLists[i]);
}

todoLists.pop();
// foreach文
todoLists.forEach(function (todoList){
    console.log(todoList);
})
