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

//放大镜
var box = document.getElementsByClassName("details1-img")[0];
var box2 = document.getElementsByClassName("details1-big-img")[0];
var img = box.getElementsByTagName("img")[0];
var img2 = box2.getElementsByTagName("img")[0];
var mask = document.getElementById("mask");
box.onmouseover = function(){
    mask.style.display = "block";
    box2.style.display = "block";
}
box.onmousemove = function(eve){
    var e = eve||event;
    var leftval = e.pageX -box.offsetLeft - 100;
    var topval = e.pageY -box.offsetTop - 100;
    leftval = leftval <=0 ? 0:leftval>=(box.clientWidth-mask.clientWidth)?(box.clientWidth-mask.clientWidth):leftval;
    topval = topval <=0 ? 0:topval>=(box.clientWidth-mask.clientWidth)?(box.clientWidth-mask.clientWidth):topval;
    var bigleft = (img2.clientWidth-box2.clientWidth)/(mask.clientWidth-box.clientWidth)*leftval;
    var bigtop = (img2.clientHeight-box2.clientHeight)/(mask.clientHeight-box.clientHeight)*topval;
    mask.style.left = leftval+"px";
    mask.style.top = topval+"px";
    img2.style.left = bigleft+"px";
    img2.style.top = bigtop+"px";
}
box.onmouseout = function(){
    mask.style.display = "none";
    box2.style.display = "none";
}
//点击换图
var box3 = document.getElementsByClassName("details1-small-img")[0];
box3.onclick = function(eve){
    var e = eve||event;
    for(var i =0 ;i< e.target.parentNode.parentNode.children.length;i++){
        e.target.parentNode.parentNode.children[i].style.border = "2px solid #DFDFDF";
    }
    e.target.parentNode.style.border = "2px solid #C40000"
    img.src = e.target.src;
    img2.src = e.target.src;
}
//选择颜色，尺码
var details1ContentRight = document.getElementsByClassName("details1-content-right")[0];

//详情和评论切换
var changecom = document.getElementsByClassName("details2-right-header")[0];
var changecomUl = changecom.getElementsByTagName("ul")[0];
var changecomLi = changecomUl.getElementsByTagName("li");
var details2RightContent1 = document.getElementsByClassName("details2-right-content1")[0];
var details2RightContent2 = document.getElementsByClassName("details2-right-content2")[0];
changecomUl.onclick = function(eve){
    var e = eve||event;
    for(var i =0 ;i<changecomLi.length;i++){
        changecomLi[i].className = "";
    }
    e.target.className = "details2-right-header-change";
    if(details2RightContent1.style.display =="none"){
        details2RightContent1.style.display = "block";
        details2RightContent2.style.display = "none";
    }else{
        details2RightContent1.style.display = "none";
        details2RightContent2.style.display = "block";
    }
}