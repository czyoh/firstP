


function over(a) {
    var myTaoBao=document.getElementsByClassName("myTaoBao");
    var hove=document.getElementsByClassName("hove");
    for (var i=0;i<myTaoBao.length;i++){
        if(a!=i){
            myTaoBao[i].style.display='none';
        }else {
            myTaoBao[i].style.display='block';
        }
    }
}
function out(a) {
    var myTaoBao=document.getElementsByClassName("myTaoBao");
    var hove=document.getElementsByClassName("hove");
    for (var i=0;i<myTaoBao.length;i++){
        if(a!=i){
            myTaoBao[i].style.display='none';
        }else {
            myTaoBao[i].style.display='none';
        }
    }
}


function dis(e) {
    var ycBox=document.getElementsByClassName("ycBox");

    for (var i=0;i<ycBox.length;i++){
        if(e!=i){
            ycBox[i].style.display='none';
        }else {
            ycBox[i].style.display='block';

        }
    }
}
function none(e) {
    var ycBox=document.getElementsByClassName("ycBox");
    for (var i=0;i<ycBox.length;i++){
        if(e!=i){
            ycBox[i].style.display='none';
        }else {
            ycBox[i].style.display='none';
        }
    }
}



function disTwo(q) {
    var ycBox2=document.getElementsByClassName("ycBox2");
    for (var i = 0; i < ycBox2.length; i++) {
        if (q != i) {
            ycBox2[i].style.display = 'none';
        } else {
            ycBox2[i].style.display = 'block';
        }
    }
}
function noneTwo(q) {
    var ycBox2=document.getElementsByClassName("ycBox2");
    for (var i=0;i<ycBox2.length;i++){
        if(q!=i){
            ycBox2[i].style.display='none';
        }else {
            ycBox2[i].style.display='none';
        }
    }
}


//增加
function butJia() {
var butJia=document.getElementById("butJia");
    butJia.value=parseInt(butJia.value)+1;
}

//减少
function butJian() {
    var butJia=document.getElementById("butJia");
    if (butJia.value>1){
        butJia.value=parseInt(butJia.value)-1;
    }else {
        butJia.value=parseInt(butJia.value);
    }
}


//颜色分类
function ysfl(a) {
 var rrt=document.getElementsByClassName("rrt");
    var bigImg = document.getElementById("contBigImg");
    bigImg.setAttribute("src", "img/rt" + a + ".jpg");
 for (var i=0;i<rrt.length;i++){
     if(a!=i){
         rrt[i].style.border="";
     }else {
         rrt[i].style.border='2px solid red';
     }

 }
}

//点击更改图片

function smallImg(id) {
    var bigImg = document.getElementById("contBigImg");
    bigImg.setAttribute("src", "img/rt" + id + ".jpg");
}

    $(function () {
//放大镜
    $(".aaa").mousemove(function (show) {
            var tt = $(".TbContent-left-bigImg1").attr("src");
            $("#oo").attr("src",tt);
            $(".TbContent-left-hide").show();
            $(".TbContent-left-smallbox").show();
              
            var boxLeft=show.offsetX - 50;
            var boxTop=show.offsetY -50;
            console.log($(".TbContent-left-smallbox").css("left"));
          
             if(boxLeft>=300){
                 boxLeft=300;
            } 
            if(boxLeft<=0){
                boxLeft=0;
            }
            if(boxTop>=300){
                boxTop=300;
            }
            if(boxTop<=0){
                boxTop=0;
            }
            $(".TbContent-left-smallbox").css({
                "left": boxLeft + "px",
                "top": boxTop  + "px"
            })
            $(".TbContent-left-hide2 img").css({
                "left":-1.2*boxLeft+"px",
                "top":-1.2*boxTop +"px"
            })
           
            // console.log(-2*parseFloat($(".TbContent-left-smallbox").css("left")));
            })
        $(".aaa").mouseout(function () {
            $(".TbContent-left-hide").hide();
            $(".TbContent-left-smallbox").hide();
        
    })
})

// //加入购物车
// function jrgwc() {
//     var wrongDiv = document.getElementsByClassName("wrongDiv")[0];
//     var wrongDivtwo = document.getElementsByClassName("wrongDiv-two")[0];
//     var imgrrt = document.getElementsByClassName("imgrrt")[0];
//     if (!wrongDiv) {
//
//     } else {
//         wrongDivtwo.innerHTML = "请勾选你要的商品信息";
//         wrongDiv.style.display = 'block';
//
//     }
// }
//
// function clo() {
//     var wrongDiv=document.getElementsByClassName("wrongDiv")[0];
//     wrongDiv.style.display='none';
// }


