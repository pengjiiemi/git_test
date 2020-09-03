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
//侧边栏
var navRight = document.getElementsByClassName("nav-right")[0];
var navRight2 = document.getElementsByClassName("nav-right2")[0];
var navRightCenter = document.getElementsByClassName("nav-right-center")[0];
navRight2.onmouseover = function(){
    navRight.style.transform = "translateX(0)";
}
navRight2.onmouseout = function(){
    navRight.style.transform = "translateX(36px)";
}