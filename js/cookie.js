
//通过key得到对应的cookie值
function getCookieByItem(key){
	//1.获取cookie信息
	var cookies = document.cookie;
	//2.如果cookie没有任何数据，结果返回空字符串
	if(!cookies) return "";
	//3.如果有保存的数据 //uname=jerry; age=123; phone=11111; email=111@qq.com
	//a.将字符串用"; "转换成数组
	var cookiesArr = cookies.split("; ");
	//b.遍历这个数组
	for (var i = 0; i < cookiesArr.length; i++) {
		//cookiesArr[i];//uname=jerry age=123
		if(cookiesArr[i].split("=")[0] === key){
			return cookiesArr[i].split("=")[1];
		}
	}
	//当程序走到这里，说明cookie中并没有对应的key的这个值，结果返回空字符串
	return "";
};
function setCookie(key,value,date,path){
	//在传递实参的时候，
	//key和value必传
	//有可能date不传，有可能path不传，
	//有可以date，path都不传 : 形参不用处理
	//有可能 只date不传path : 形参不用处理
	
	//有可能只传path不传date：需要处理
		//这时，date是一个路径，而不是日期，path是undefined
		//处理结果，date是undefined,path是路径
	if(!!date && !(date instanceof Date)){
		path = date;
		date = undefined;
	}
	document.cookie = key + "=" + value + ";expires=" + date + ";path=" + path;
	
}
//删除cookie
function removeCookie(key,path){
	document.cookie = key + "=;expires=" + new Date(0) + ";path=" + path;
};