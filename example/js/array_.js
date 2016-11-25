//
concat 基于当前数组创建一个新数组,参数为空返回当前数组的副本；
	   参数可以为一个或多个数组，如果参数不是数组则把该值作为一个值插入到数组后面，
	   如果参数是数组，将数组中每个值插入到数组中。

var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yellow',['black', 'brown']);

alert(colors);               //["red", "green", "blue"]
alert(colors);               //["red", "green", "blue", "yellow", "black", "brown"]


slice 基于当前数组的一个或多个值创建新数组
	colors.slice()      //["red", "green", "blue"]
	colors.slice(0)     //["red", "green", "blue"]
	colors.slice(0,2)   //["red", "green"]
	colors.slice(-1)    //["blue"]  如果是负数则加上数组长度。


splice 删除 插入 替换
	删除   秩序确定两个参数:确定要删除的位置和要删除的项数
			splice(0, 2) //删除数组中前两个
	插入   向指定位置插入任意数量的项
			splice(2, 0, 'red', 'green');  //向第二个位置插入两项 'red' 'green'

	替换   splice(2,1,'red','green');  //在第二位删除一个，然后插入‘red' 'green'
	

			

