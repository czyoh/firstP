$(function(){
    (function(){

  //控制显示隐藏二维码
   $(".contentTop span img").mouseenter(function(){
   	   $(this)[0].src="image/containBox/icon03.jpg";
       $(this).parent().parent().find(".ImgDis").show();
   }).mouseout(function(){
   	$(this)[0].src="image/containBox/icon04.jpg";
    $(this).parent().parent().find(".ImgDis").hide();
   });
   $(".box5Contain h3 i").mouseenter(function(){
     $(this).find(".ImgDis").show();
   }) 
   $(".box5Contain h3 i").mouseout(function(){
     $(this).find(".ImgDis").hide();
   })
   // console.log($(".haohuo").length);
   
   //刷机刷新，点击换一组看看，上面内容刷机刷新 
     $(".more").on("click",function(){
     	 var haoArr=[];
     	 var haos=document.getElementsByClassName('sideConbox1');
     	 for(var i=0;i<haos.length;i++){
     	 	haoArr.push(haos[i]);
     	 }
     	 haoArr.sort(function(){
     	 	var rand = Math.random();
            if(rand > 0.5) 
                return 1;
          else if(rand < 0.5)
            
               return -1;
             
            else {return 0};
     	 })
     	 for(var j=0;j<haos.length;j++){
     	 	$(".sideConboxAll")[0].appendChild(haoArr[j]);
     	 }
     	 // console.log(haos[0]);
     })
      })() 

})