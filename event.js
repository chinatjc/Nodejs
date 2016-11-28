var EventEmitter = require("events").EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)//给单个事件设定最大的监听数量

function water(who){
	console.log("给 "+who+" 倒水")
}

life.on("求安慰",water)
life.on("求安慰",function(who){
	console.log("给 "+who+" 揉肩")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" 做饭")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" 洗衣服")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...5")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...6")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...7")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...8")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...9")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" ...10")
})
life.on("求安慰",function(who){
	console.log("给 "+who+" 你想累死我啊")
})
life.on("求溺爱",function(who){
	console.log("给 "+who+" 买衣衣")
})
life.on("求溺爱",function(who){
	console.log("给 "+who+" 交工资")
})

life.removeListener("求安慰",water)//单独删除"求安慰"中的water处理函数

life.removeAllListeners("求安慰")//所有关于life上关于"求安慰"的事件监听都移除了
life.removeAllListeners()//所有关于life的事件监听都移除了

var hasConfortListener = life.emit("求安慰","汉子")
var hasLovedListener = life.emit("求溺爱","妹子")
var hasPlayListener = life.emit("求玩坏","汉子和妹子")

console.log(hasConfortListener)//true，事件调用返回true
console.log(hasLovedListener)//true，事件调用返回true
console.log(hasPlayListener)//false，事件未调用返回false

var confort = life.listeners("求安慰")//返回"求安慰"处理函数的数组
console.log(confort.length)//10

var confortCount = EventEmitter.listenerCount(life,"求安慰")//返回life对象上"求安慰"处理函数的个数
console.log(confortCount)//10
