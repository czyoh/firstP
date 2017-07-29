$(function(){
	$(".text").each(function(){
		var that=$(this);
		that.parent().mouseenter(function(){
			that.show();
			$(this).css("backgroundColor","#fff");
			// that.css("backgroundColor","#fff");
		});
		that.parent().mouseleave(function(){
			that.hide();
			that.parent().css("backgroundColor","#f5f5f5");
	   });
	});
})

$(function(){
	// console.log(document.getElementById("lbImg").offsetWidth);
	function animate(id,offset){
		var getId=document.getElementById(id);
		console.log(getId);
		var newLeft=parseInt(getId.style.left)+offset;
		getId.style.left=newLeft+"px";
		 if(newLeft<=-getId.offsetWidth){
		 	getId.style.left=0+"px";
		 }
		 if(newLeft>0){
		 	getId.style.left=-getId.offsetWidth+getId.parentNode.offsetWidth+"px";
		 }
		 // console.log(getId.style.left);
	}
	// btn.onclick=function(){animate("lbImg",-520)};
	var time1;
	function play(){
     	time1=setInterval(function(){
    	$("#next").click();
    },2500);
	} 
	// play();
    // time1=setInterval(play,2000);
    function stop(){
    	clearInterval(time1);
    }
    $(".lunboMain").mouseover(function(){
    	stop();
    });
    $(".lunboMain").mouseout(function(){
    	play();
    });
    var index1=0;
	var spans=document.getElementsByClassName("btnSpan")[0].getElementsByTagName("span");
    function spanColor(){
       for(var i=0;i<spans.length;i++){
       	if (spans[i].className=="bgcolor") {
       		spans[i].className="";
         }       	    
       }
       spans[index1].className="bgcolor";
    }

    $("#prev").click(function(){
    	// console.log($(".btnSpan span").length-1);
    	index1=index1-1;
    	if(index1<0){
             index1=spans.length-1;
    	}
    	spanColor();
		animate("lbImg",-520);
	});
	$("#next").click(function(){
		index1=index1+1;
		if(index1>spans.length-1){
			index1=0;
		}
		spanColor();
		animate("lbImg",520);
	});
	for(var i=0;i<spans.length;i++){
     (function(i){
     		spans[i].onclick=function(){
     			spans[i].index=i;
  		var clickIndex=this.index;
  		console.log(clickIndex);
  		var offset=520*(index1-clickIndex);
  		animate("lbImg",offset);
  		index1=clickIndex;
  		spanColor();
  	}
     })(i)
 }
 var time2;
	function play1(){
     	time2=setInterval(function(){
    	$("#next1").click();
    },2500);
	} 
	// play1();
    // time1=setInterval(play,2000);
    function stop1(){
    	clearInterval(time2);
    }
    $(".lunboMain").mouseover(function(){
    	stop1();
    });
    $(".lunboMain").mouseout(function(){
    	play1();
    });
    var index2=0;
	var spans1=document.getElementsByClassName("btnSpan1")[0].getElementsByTagName("span");
    function spanColor1(){
       for(var i=0;i<spans1.length;i++){
       	if (spans1[i].className=="bgcolor1") {
       		spans1[i].className="";
         }       	    
       }
       spans1[index2].className="bgcolor1";
    }
     $(".lunboMain1").mouseover(function(){
    	stop1();
    });
    $(".lunboMain1").mouseout(function(){
    	play1();
    });

    $("#prev1").click(function(){
    	// console.log($(".btnSpan span").length-1);
    	index2=index2-1;
    	if(index2<0){
             index2=spans1.length-1;
    	}
    	spanColor1();
		animate("lbImg1",-520);
	});
	$("#next1").click(function(){
		index2=index2+1;
		if(index2>spans1.length-1){
			index2=0;
		}
		spanColor1();
		animate("lbImg1",520);
	});
	for(var j=0;j<spans1.length;j++){
     (function(j){
     		spans1[j].onclick=function(){
     			spans1[j].index=j;
  		var clickIndex=this.index;
  		console.log(clickIndex);
  		var offset=520*(index2-clickIndex);
  		animate("lbImg1",offset);
  		index2=clickIndex;
  		spanColor1();
  	}
     })(j)
 }
})