/**
 * Created by chenliping on 2017/6/6.
 */
//偏移效果
function dis(sj) {
    var xianshi=document.getElementsByClassName("XianShi");
    for (var i=0;i<xianshi.length;i++){
        if (sj==i){
            xianshi[i].className="XianShi end";
        }
    }
}
function odis(si) {
    var xianshi=document.getElementsByClassName("XianShi");
    // alert("1");
    for (var i=0;i<xianshi.length;i++){
        if (si==i){
            xianshi[i].className="XianShi end1";
        }
    }
}


//二维码
function over(a) {
    var bigImg=document.getElementsByClassName("ImgDis");
    var smallImg=document.getElementsByClassName("smallImg");
    for(var i=0;i<bigImg.length;i++){
        if(i!=a){
            bigImg[i].style.display='none';
        }else {
            bigImg[i].style.display='block';
        }
    }
    for (var i=0;i<smallImg.length;i++){
        if (i!=a){
            smallImg[i].setAttribute("src","image/projectConBox4/eee.png");
        }else {
            smallImg[i].setAttribute("src","image/projectConBox4/bbb.png");
        }
    }

}
function out(b) {
    var bigImg=document.getElementsByClassName("ImgDis");
    var smallImg=document.getElementsByClassName("smallImg");
    for(var i=0;i<bigImg.length;i++){
        if(i!=b){
            bigImg[i].style.display='none';
        }else {
            bigImg[i].style.display='none';
        }
    }
    for (var i=0;i<smallImg.length;i++){
        if (i!=b){
            smallImg[i].setAttribute("src","image/projectConBox4/eee.png");
        }else {
            smallImg[i].setAttribute("src","image/projectConBox4/eee.png");
        }
    }
}

