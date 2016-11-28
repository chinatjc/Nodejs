var http = require("http")
var cheerio = require("cheerio")
var url = "http://www.imooc.com/learn/348"

function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $(".chapter")
	var chapterData = []

	chapters.each(function(index,item){
		var title = $(item).find("strong").contents()[2].data.trim()
		var videos = []
		var videosEle = $(item).find("ul.video li")

		videosEle.each(function(index,item){
			var id = $(item).attr("data-media-id")
			var content = $(item).children("a").contents()[2].data.trim().replace(/[\'\"\\\/\b\f\n\r\t]/g,'').split(" ").join("");
			videos.push({id:id,content:content})
		})

		chapterData.push({title:title,videos:videos})
	})

	return chapterData
}

function printElement(arr){
	arr.forEach(function(item){
		console.log(item.title+"\n")
		item.videos.forEach(function(item){
			console.log("【"+item.id+"】"+" "+item.content+"\n")
		})
	})
}

http.get(url,function(res){
	var html = ""

	res.on("data",function(data){
		html += data
	})

	res.on("end",function(){
		var data = filterChapters(html)
		printElement(data)
	})
}).on("error",function(){
	console.log("获取页面数据失败");
})