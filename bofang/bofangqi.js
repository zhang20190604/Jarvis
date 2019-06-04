window.onload=function(){
  var yi=document.getElementsByTagName('audio')[0];
  var er=document.getElementById('xiu');
  var san=document.getElementById('ting');
  var ai=document.getElementById('yin');
  var jian=document.getElementById('liang');
 er.onclick=function(){
  yi.play();
}
san.onclick=function(){
  yi.pause();
}
ai.onclick=function(){
 yi.volume -=0.2  
}
jian.onclick=function(){
  yi.volume +=0.2 


}








// $(function(){
  var yuan=$('.yuan');
  var hu=$('#xiu');
  var duang=$('#ting');
  var zong=$('.zong')
  var zha=$('.zha')
hu.click(function(){
  yuan.css({animation:'yuan 5s linear infinite'})
 
})

duang.click(function(){
  yuan.css({animation:'none'})

})
hu.click(function(){
   zong.css({animation:'zong 3s linear infinite'})
        .css({opacity:'0.8'})
 })

 duang.click(function(){
   zong.css({animation:'none'})
        .css({opacity:'0'})
})
hu.click(function(){
  zha.css({animation:'yuan 3s linear infinite'})
     .css({opacity:'0.8'})
})

duang.click(function(){
  zha.css({animation:'none'})
     .css({opacity:'0'})
})

// })
}