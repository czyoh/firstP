/**
 * Created by asus on 2017/6/7.
 */
$(function () {
    (function(){
    //a鼠标移进移出效果
    $(".containBox6 a").mouseover(function(){
        $(this).css("color","red");
    }).mouseout(function(){
        $(this).css("color","#6c6c6c");
    });
    //li鼠标移进移出效果
    $(".containBox6 li").mouseenter(function () {
        // $(".containBox6 li").animate("background","#fe6600",2000);
        var img=$(this)[0].getElementsByTagName("img")[0];
        $(img).css("border","solid 1px #fe6600");
        $(img).css("border-bottom","none");
        $(this).css("opacity","0.89");
        $(this).css("background","#fe6600");
        $(this).find("div:first").addClass("lc-hover");
    }).mouseleave(function () {
        var img=$(this)[0].getElementsByTagName("img")[0];
        $(img).css("border","solid 1px #FFFFFF");
        $(img).css("border-bottom","none");
        $(this).css("opacity","1");
        $(this).css("background","");
        $(this).find("div:first").removeClass("lc-hover");
    });
    //文字提示
      var timeTip;
    $(".lc").mousemove(function (e) {
        // console.log(e.clientY, e.pageY);
    //     clearInterval(timeTip);
    //     timeTip=setTimeout(function(){
    //           $(".iiii").css("top", e.pageY +10);
    //     $(".iiii").css("left", e.pageX +0);
    //     $(".iiii").show(500);
    // },1000);   
        $(".iiii").hide();
        $(".iiii").css("top", e.pageY +25);
        $(".iiii").css("left", e.pageX +0);
        $(".iiii").show(1000);          
    }).mouseleave(function () {
        $(".iiii").hide();
    });

    //实现li随机调换位置的效果
 function bb(){
    var box6=document.getElementsByClassName("containBox6")[0];
        var uls = box6.getElementsByTagName("ul")[0];
        var lis = uls.getElementsByTagName("li");
        // console.log(lis);
        var arr = [];
        for(var i = 0; i < lis.length; i++){
            arr.push(lis[i]);
        }
        arr.sort(function(a,b){
            var rand = Math.random();
            if(rand > 0.5) return 1;
            else if(rand < 0.5) return -1;
            else return 0;
        });
        for(var i = 0; i < arr.length; i++){
            uls.appendChild(arr[i]);
        }
    }
    bb();
    //图片随滚动条延时加载效果
    $("img").lazyload({
            effect:"fadeIn",
            threshold:1
    });
        })()
});