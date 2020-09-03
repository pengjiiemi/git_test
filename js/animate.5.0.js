function animate(obj,param,callBack,speedTime){
	//如果动画不需要 传递回调，但需要设置时间，这时speedTime是无效的？
	if(!!callBack && typeof callBack != "function"){//当callBack传递了参数，但这个参数又不是函数的时候，说明callBack是一个时候毫秒数，要将callBack交给speedTime
		speedTime = callBack;
		callBack = undefined;//这里要将callBack置为undefined,因为是一个值，后面的回调会运行到。
	}
	speedTime = speedTime || 10;
	clearInterval(obj.timer);//清除上一次当前对象的定时器,定时器私有化
	obj.timer = setInterval(function(){
		var isOver = true;//监听是否所有样式都到达 了目标 值，true:表示所有都到达了目标值
		for(var attr in param){
			if(attr != "zIndex"){
				var current = 0;//起点
				if(attr === "opacity"){
					current = getStyle(obj,attr) * 100;
				}else{
					current = parseInt(getStyle(obj,attr));
				}
				var speed = (param[attr] - current)/10;//速度
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(current != param[attr]){//没到达目标值
					isOver = false;//监听器置为false
					if(attr === "opacity"){ //终点
						var filterVal = (current + speed)/100;
						setFilter(obj,filterVal);
					}else{
						obj.style[attr] = current + speed + "px";
					}
				}
			}else{
				obj.style[attr] = param[attr];
			}
		}
		if(isOver){//所有样式到达了目标值后，清除定时器
			clearInterval(obj.timer);
			//开启下一个动画 
			if(!!callBack){//当传递了回调函数时才需要来运行
				callBack();
			}
		}
	},speedTime);
}

//封装一个函数，功能是根据样式来获取对应的样式值
function getStyle(obj,attr){
	if(!!window.getComputedStyle){
		return window.getComputedStyle(obj,null)[attr];
	}
	switch(attr){
		case "opacity":
			return obj.currentStyle["filter"].replace(/[^0-9.]/g,"")/100;
	}
	return obj.currentStyle[attr];
}
//兼容ie8设置透明度
function setFilter(obj,val){
	if(!!window.getComputedStyle){//现代浏览器
		obj.style.opacity = val;
		return;
	}
	//ie8
	obj.style.filter = "alpha(opacity:" + val*100 + ");";
}