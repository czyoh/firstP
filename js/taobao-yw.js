/**
 * Created by Administrator on 2017/6/6.
 */
$(function () {
    (function(){
    //在高度不同时，链接块的颜色背景耶同样改变
    function check1(i) {
        for (var j = 0; j < 7; j++) {
            $("#yw-tool" + j).css("background", "#fff");
            // $("#yw-tool"+j).attr("id","yw-tool"+j);
            $("#yw-tool1").css("color", "#ff4400");
            $("#yw-tool2").css("color", "#ff0055");
            $("#yw-tool3").css("color", "#8d7afb");
            $("#yw-tool4").css("color", "#a8c001");
            $("#yw-tool5").css("color", "#a2745b");
            $("#yw-tool6").css("color", "#ff4400");
        }
        $("#yw-tool" + i).css("background", " url(image/image-yw/" + i + ".jpg");
        $("#yw-tool" + i).css("color", "#fff");
    }
    //到达相依距离时改变背景
    $(window).scroll(function () {
        //获取滚动条到顶端的距离
        var top1 = $(document).scrollTop();
        // console.log(top1)
        // console.log(typeof top1);
        //如果滚动条距离上面的高度大于490；将其固定，否则不固定
        if (top1 >= 490) {
            $("#tool").css("position", "fixed");
            $("#tool").css("top", "49px");
        }
        else {
            $("#tool").css("position", "absolute");
            $("#tool").css("top", "490px");
        }
        if (top1 < 1620) {check1(1);}
        if (top1 >= 1620) {check1(2)}
        if (top1 >= 1928) {check1(3)}
        if (top1 >= 2500 ) {check1(4)}
        if (top1 >= 3110) {check1(5)}
        if (top1 >= 5420) {check1(6);}
    });
//移上去改变样式
    $("#yw-tool1").mouseover(function(){check1(1)})
    $("#yw-tool2").mouseover(function(){check1(2)})
    $("#yw-tool3").mouseover(function(){check1(3)})
    $("#yw-tool4").mouseover(function(){check1(4)})
    $("#yw-tool5").mouseover(function(){check1(5)})
    $("#yw-tool6").mouseover(function(){check1(6)})
    //回到顶部
    var currentPosition, timer;
    function runToTop() {
        // alert(1);
        // clearInterval(timer);
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;//获取当前滚动条的纵坐标
        // console.log(currentPosition);
        currentPosition -= 100;//将纵坐标减小
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);//将滚动条对应到相应的高度
            // console.log(currentPosition);
        }
        else {
            window.scrollTo(0, 0)//滚动条到最顶端
            clearInterval(timer);
        }
    }
    $("#toTop").click(function () {
        // alert(1);
        clearInterval(timer)
        timer = setInterval(runToTop, 30);
    });
    //跳到相应位置
    var head = 0;
    function toTop(target) {
        //通过传值将对应的高度传过去
        timer = setInterval(function () {
            var step = (target - head) / 10;
            if (step > 0) {
                step = Math.ceil(step);
            }
            if (step < 0) {
                step = Math.floor(step);
            }
            head = head + step;
            window.scrollTo(0, head);
            if (head == target) {
                clearInterval(timer);
            }
            // console.log(head);
            // console.log(document.documentElement.scrollTop);
        }, 50);
    }
    $("#yw-tool1").click(function () {
        clearInterval(timer);
        // console.log($(".contentBox1")[0].offsetTop);
        toTop(762)
    });
    $("#yw-tool2").click(function () {
        clearInterval(timer);
        toTop(1620)
    });
    $("#yw-tool3").click(function () {
        clearInterval(timer);
        toTop(1930)
    });
    $("#yw-tool4").click(function () {
        clearInterval(timer);
        toTop(2530)
    });
    $("#yw-tool5").click(function () {
        clearInterval(timer);
        toTop(3112)
    });
    $("#yw-tool6").click(function () {
        clearInterval(timer);
        toTop(5440)
    });
 })()
    //平滑滚动方法二
    // $("#yw-tool1").click(function () {
    //     $("html,body").animate({scrollTop:"800px"},400)
    //     });
    // $("#yw-tool2").click(function () {
    //     $("html,body").animate({scrollTop:"1675px"},400)
    // });
    // $("#yw-tool3").click(function () {
    //     $("html,body").animate({scrollTop:"1980px"},400)
    // });
    // $("#yw-tool4").click(function () {
    //     $("html,body").animate({scrollTop:"2550px"},400)
    // });
    //  $("#yw-tool5").click(function () {
    //     $("html,body").animate({scrollTop:"3122px"},400)
    // });
    // $("#yw-tool6").click(function () {
    //     $("html,body").animate({scrollTop:"5450px"},400)
    // });
});