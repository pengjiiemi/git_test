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
    //banner轮播
    var banner = document.getElementsByClassName("banner")[0].children[0];
    var lis = document.getElementsByClassName("banner")[0].getElementsByTagName("li");
    var arr = ["lunbo.jpg","nisosdhou.jpg","PC轮播qingfeng.jpg","动力巢电脑端轮播页.jpg","乐华七子电脑端轮播页.jpg"];
    var i=0;
    //自动轮播
    var timer = setInterval(function(){
        i++;
        if(i>4){
            i=0;
        }
       banner.src = "../images/index-img/"+arr[i];
       for(var j = 0;j<=4;j++){
           lis[j].style.background="#000";
       }
        lis[i].style.background="red";
    },2000)
    //移入暂停自动轮播
    var ul = document.getElementsByClassName("banner")[0].children[1];
    document.getElementsByClassName("banner")[0].onmouseover = function(){
        clearInterval(timer);
        //点击换图
        ul.onclick = function(eve){
            var e = eve||event;
             i = e.target.innerText-1;
            banner.src = "../images/index-img/"+arr[i];
            for(var j = 0;j<=4;j++){
                lis[j].style.background="#000";
            }
                lis[i].style.background="red";
        }
    }
    //鼠标移出，重开自动轮播
    document.getElementsByClassName("banner")[0].onmouseout = function(){
        timer = setInterval(function(){
        i++;
        if(i>4){
            i=0;
        }
       banner.src = "../images/index-img/"+arr[i];
       for(var j = 0;j<=4;j++){
           lis[j].style.background="#000";
       }
        lis[i].style.background="red";
    },2000)
    }
    //list轮播图
    var listImg = document.getElementsByClassName("listImg")[0];
    var listUl = listImg.children[0];
    var listLis = listImg.getElementsByTagName("li");
    var index2 = 0;
    var timer2 = setInterval(function(){
        index2++;
        if(index2 == 2000){
        listUl.style.left = 0 +"px";
        index2 = 0 ;
        }
        listUl.style.left = -index2 +"px";
    },20)
    listImg.onmouseover = function(){
        clearInterval(timer2);
    }
    listImg.onmouseout = function(){
        timer2 = setInterval(function(){
        index2++;
        if(index2 == 2000){
        listUl.style.left = 0 +"px";
        index2 = 0 ;
        }
        listUl.style.left = -index2 +"px";
    },20)
    }
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
    
    
//判断是否登录
    
