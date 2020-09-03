function get(url,data,callBack){
	//将data变成 uname=tom&age=18&pwd=123
	//有的请求不需要data
	//当data存在，但是是一个函数的情况
	if(!!data && typeof data === "function"){
		callBack = data;
		data = undefined;
	}
	//如果没有传递data,
	//处理缓存
	url = url + "?rand=" + new Date().getTime();
	//如果传递了data,要把data拼接到url的后面
	if(!!data){
		url += "&" + param(data); //将data变成 uname=tom&age=18&pwd=123
	}
	//console.log(url);
	
	var xhr = getXHR();
	
	xhr.open("get",url);
	
	xhr.send();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				callBack(xhr.responseText);
			}else{
				callBack("请求错误，错误状态：" + xhr.status + ",错误原因:" + xhr.statusText);
			}
		}
	}	
}

//封装post请求
function post(url,data,callBack){
	
	if(!!data && typeof data === "function"){
		callBack = data;
		data = undefined;
	}
	
	var xhr = getXHR();
	
	xhr.open("post",url);
	
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	xhr.send(param(data));// uname=tom&age=18&pwd=123
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState != 4) return;
		
		if(xhr.status === 200){
			callBack(xhr.responseText);
		}else{
			callBack("请求错误，错误状态：" + xhr.status + ",错误原因:" + xhr.statusText);
		}
	}
}

function getJSON(url,data,callBack){
	
	//处理data和callBack
	if(!!data && typeof data === "function"){
		callBack = data;
		data = undefined;
	}
	url += "?rand=" + new Date().getTime();
	if(!!data){
		url += "&" + param(data);
	}
	
	var xhr = getXHR();
	
	xhr.open("GET",url);
	
	//指定请求头的Accept数据格式为：json
	xhr.setRequestHeader("Accept","application/json");
	//指定响应回来的数据类型为json
	xhr.responseType = "json";
	
	xhr.send();
	
	xhr.onreadystatechange = function(){//异步回调

		if(xhr.readyState != 4) return;
		
		if(xhr.status === 200){
			//callBack(xhr.response);
			callBack(xhr.response);
		}else{
			callBack("请求错误，错误状态：" + xhr.status + ",错误原因:" + xhr.statusText);
		}
	}
	
}

function ajax(obj){
	//obj.url:
		//一种是get请求，如果有参数，url后要携带数据，还要做缓存 处理
		//post不需要做处理
	//处理url
	if(obj.method.toLowerCase() === "get"){
		obj.url += "?rand=" + new Date().getTime();
		if(!!obj.data){
			obj.url += "&" + param(obj.data);
		}
	}
	var xhr = getXHR();
	xhr.open(obj.method,obj.url);
	//send方法，如果是post请求，如果有参数的情况，send中要添加参数
	//post要设置请求头
	if(obj.method.toLowerCase() === "post"){
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//只有post请求都会在send中传递参数
		xhr.send(param(obj.data));
	}else{
		//get请求不需要在send携带参数
		xhr.send(null);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 200){
				obj.success(xhr.responseText);
			}else{
				obj.error("请求错误，错误状态：" + xhr.status + ",错误原因:" + xhr.statusText);
			}
		}
	}
}

function param(data){
	var arr = [];
	for(var key in data){
		arr.push(key + "=" + encodeURIComponent(data[key]));
	}
	return arr.join("&");// uname=tom&age=18&pwd=123
}
function getXHR(){
	var xhr = null;
	if(!!window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xhr;
}