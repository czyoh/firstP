$(function(){
	var offset=-80;
     function ttRan(){
	// console.log($(".toutiaoRan")[0].style.top);
	if(document.all){
		var top=$(".toutiaoRan")[0].currentStyle.top;
	}else{
		var top=getComputedStyle($(".toutiaoRan")[0],null).top;
	}
	// var offset$(".toutiaoRan")[0].style.top;
	 $(".toutiaoRan")[0].style.top=parseInt(top)+offset+"px";
	 // console.log(top);
	 // console.log($(".toutiaoRan")[0].style.top); 
	 if($(".toutiaoRan")[0].style.top=="-160px"||$(".toutiaoRan")[0].style.top=="0px"){
	 	offset=-offset;
	 }                
   }
     // ttRan();
       var timeRan=setInterval(ttRan,2500);
       $(".toutiaoMain").on("mouseout",function(){
          clearInterval(timeRan);
          timeRan=setInterval(ttRan,2500);
       })
       $(".toutiaoMain").on("mouseover",function(){
          clearInterval(timeRan);
          // timeRan=setInterval(ttRan,1500);
       })
})