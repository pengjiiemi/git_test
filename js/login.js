    //nav跟随
    var nav = document.getElementsByClassName("nav-center")[0];
   onscroll = function(){
       var navTop = document.documentElement.scrollTop;
       if(navTop>130){
           nav.style.position = "fixed";  
           nav.style.top = 0;  
           nav.style.left = "0";  
       }else{
        nav.style.position = "absolute"; 
        nav.style.top = "130px";  
        nav.style.left = "0";  
       }
   }
      //小轮播图
 var allimg = document.getElementsByClassName("allimg")[0];
    var index = 0;
    setInterval(function(){
        index++;
        if(index == 3){
        allimg.style.left = 0 +"px";
        index = 1 ;
        }
        animate(allimg,{left:-210*index});
    },3000)
    //显示注册框
    var open = document.getElementById("open");
    var registered = document.getElementsByClassName("registered")[0];
    open.onclick = function(){
        registered.style.display = "block"
    }
    //关闭注册框
    var close = document.getElementsByClassName("close")[0];
    close.onclick = function(){
        registered.style.display = "none"
    }
//注册
