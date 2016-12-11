
//里面没有window, document，不能访问dom
//self 指向worker全局作用域中的worker对象

//给页面传递消息
self.postMessage("haha");  

//接受页面消息
self.onmessage = function (result) {
	console.log(result.data);
}


console.log("start");

//引入脚本，异步加载，按顺序执行
importScripts("a.js", "b.js");
console.log("end");

//start
//a.js
//b.js
//end