
//轮播图的代码
var swiper_item=document.getElementsByClassName("swiper-item");
var swiper_point=document.getElementsByClassName("swiper-point");
var index=0;
var time=0

var goIndex = function(){
    for(var i=0;i<swiper_item.length;i++){
        swiper_item[i].className="swiper-item";
        swiper_point[i].className="swiper-point"     
    }
    swiper_item[index].className="swiper-item swiper-active"
    swiper_point[index].className="swiper-point swiper-active-point"
}

var goNext = function(){
    if(index<3){
        index++
    }else{
        index=0
    }
    goIndex();
}

for (let i = 0; i < swiper_point.length; i++) {
    swiper_point[i].addEventListener('click',function(){
         index=this.getAttribute('data-index');
        goIndex();
        time=0;
    })    
}

setInterval(function () {
    time++;
    if (time==20) {
        goNext() 
    }
    if (time>20) {
        time=0
    }
},100)

//选择卡片的js代码
var activities_tab = document.getElementById('activities-tab');
var activities_tab_li = activities_tab.getElementsByTagName('li');
var activities_content = document.getElementById('activities-content');
var activities_content_li = activities_content.getElementsByTagName('div');
var length = activities_tab_li.length;
var i, j;
console.log(activities_content_li)
for (i = 0; i < length; i++) {
    activities_tab_li[i].index = i;
    activities_tab_li[i].onclick = function () {
        for (j = 0; j < length; j++) {
            activities_tab_li[j].className = '';
            activities_content_li[j].className = 'hide';
        }
        activities_tab_li[this.index].className = 'act';
        activities_content_li[this.index].className = '';
        if (condition) {

        }
    }
}
