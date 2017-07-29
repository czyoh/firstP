/**
 * Created by Administrator on 2017/6/6 0006.
 */
$(function () {
    //顶部下拉效果
    //我的淘宝下拉div
    $("#j-mytaobao").mouseover(function () {
        console.log(1);
        $(".push-divbox:first").addClass("show-push");
        $("#j-mytaobao").addClass("li-hover");
    }).mouseout(function () {
        $(".push-divbox:first").removeClass("show-push");
        $("#j-mytaobao").removeClass("li-hover");
    })
    //收藏夹下拉div
    $("#j-favorite").mouseover(function () {
        $(".push-divbox:eq(1)").addClass("show-push");
        $("#j-favorite").addClass("li-hover");
        $("#favorites-icon").addClass("favorites-icon-hover");
    }).mouseout(function () {
        $(".push-divbox:eq(1)").removeClass("show-push");
        $("#j-favorite").removeClass("li-hover");
        $("#favorites-icon").removeClass("favorites-icon-hover");
    })
    //卖家中心下拉div
    $("#j-mjcenter").mouseover(function () {
        $(".push-divbox:eq(2)").addClass("show-push");
        $("#j-mjcenter").addClass("li-hover");
    }).mouseout(function () {
        $(".push-divbox:eq(2)").removeClass("show-push");
        $("#j-mjcenter").removeClass("li-hover");
    })
    //联系客服下拉div
    $("#j-contactCS").mouseover(function () {
        $(".push-divbox:eq(3)").addClass("show-push");
        $("#j-contactCS").addClass("li-hover");
    }).mouseout(function () {
        $(".push-divbox:eq(3)").removeClass("show-push");
        $("#j-contactCS").removeClass("li-hover");
    })
    //网站导航下拉div
    $("#j-URLnavigation").mouseover(function () {
        $("#push-divbox-big").show();
        $("#j-URLnavigation").addClass("li-hover");
    }).mouseout(function () {
        $("#push-divbox-big").hide();
        $("#j-URLnavigation").removeClass("li-hover");
    })
    //中部
    //搜索框切换样式变化
    $(".search-bd-top-list").mouseover(function() {
        if($(this).attr("class").indexOf("search-selected")==-1) {
            $(this).addClass("search-bd-top-list-hover");
        }
    }).mouseout(function() {
        $(this).removeClass("search-bd-top-list-hover");
    })
    //宝贝
    $(".search-bd-top-list:eq(0)").click(function () {
        $(this).removeClass("search-bd-top-list-hover");
        $(".search-bd-top-list:eq(0)").addClass("search-selected");
        $(".search-bd-top-list:eq(1)").removeClass("search-selected-tm");
        $(".search-bd-top-list:eq(2)").removeClass("search-selected");
        $("#bb").show();
        $("#tm").hide();
        $(".hotw").show();
        $("#btn-search").removeClass("btn-search-tm");
    })
    //天猫
    $(".search-bd-top-list:eq(1)").click(function () {
        $(this).removeClass("search-bd-top-list-hover");
        $(".search-bd-top-list:eq(0)").removeClass("search-selected");
        $(".search-bd-top-list:eq(1)").addClass("search-selected-tm");
        $(".search-bd-top-list:eq(2)").removeClass("search-selected");
        $("#bb").hide();
        $("#tm").show();
        $(".hotw").show();
        $("#btn-search").addClass("btn-search-tm");
    })
    //店铺
    $(".search-bd-top-list:eq(2)").click(function () {
        $(this).removeClass("search-bd-top-list-hover");
        $(".search-bd-top-list:eq(0)").removeClass("search-selected");
        $(".search-bd-top-list:eq(1)").removeClass("search-selected-tm");
        $(".search-bd-top-list:eq(2)").addClass("search-selected");
        $("#bb").show();
        $("#tm").hide();
        $(".hotw").hide();
        $("#btn-search").removeClass("btn-search-tm");

    })
    //input text文本框获取/失去焦点效果
    $("#q").focus(function () {
        $(".hotw").hide();
        $("#fdj").hide();
    }).blur(function () {
        $(".hotw").show();
        $("#fdj").show();
    })
    //侧边导航栏鼠标移入移出效果
    $(".h-m-n-bd-li").mouseenter(function () {
        $(this).addClass("h-m-n-bd-li-hover");
        $(this).find("i:first").addClass("service-icons-hover");
        for (var i = 0; i < $(".h-m-n-bd-li").length; i++) {
            if ($(this).index() == i) {
                $(".h-m-n-float-item:eq(" + i + ")").show();
            } else {
                $(".h-m-n-float-item:eq(" + i + ")").hide();
            }
        }
    }).mouseleave(function () {
        $(this).removeClass("h-m-n-bd-li-hover");
        $(this).find("i:first").removeClass("service-icons-hover");
    })
    //侧边导航栏li右边图标移入移出效果
    $(".service-rmd-list-a").mouseenter(function () {
        $(this).find("span").addClass("li-name-hover");
    }).mouseleave(function () {
        $(this).find("span").removeClass("li-name-hover");
    })
    //导航div的显现隐藏
    $(".h-m-n-float-item").mouseenter(function () {
        for (var i = 0; i < $(".h-m-n-float-item").length; i++) {
            if ($(this).index() == i) {
                $(".h-m-n-float-item:eq(" + i + ")").show();
                $(".h-m-n-bd-li:eq(" + i + ")").addClass("h-m-n-bd-li-hover");
                $(".h-m-n-bd-li:eq(" + i + ")").find("i:first").addClass("service-icons-hover");
            } else {
                $(".h-m-n-float-item:eq(" + i + ")").hide();
                $(".h-m-n-bd-li:eq(" + i + ")").removeClass("h-m-n-bd-li-hover");
                $(".h-m-n-bd-li:eq(" + i + ")").find("i:first").removeClass("service-icons-hover");
            }
        }
    }).mouseleave(function () {
        $(".h-m-n-bd-li").removeClass("h-m-n-bd-li-hover");
        $(".h-m-n-bd-li").find("i:first").removeClass("service-icons-hover");
    })
    $("#h-m-n-bd").mouseenter(function () {
        $("#h-m-n-float").show();
    }).mouseleave(function () {
        $("#h-m-n-float").hide();
    })
    $("#h-m-n-float").mouseenter(function () {
        $("#h-m-n-float").show();
    }).mouseleave(function () {
        $("#h-m-n-float").hide();
    })
    //右侧公告栏的显现隐藏
    $(".col-div2-notice-hd li").mouseenter(function() {
        $(this).addClass("col-div2-not-li-selected")
        .siblings().removeClass("col-div2-not-li-selected");
        switch($(this).index()){
            case 0:{
                $(".col-div2-notice-ft ul:eq(0)").show()
                .siblings().hide();
                break;
            }
            case 1:{
                $(".col-div2-notice-ft ul:eq(1)").show()
                .siblings().hide();
                break;
            }
            case 2:{
                $(".col-div2-notice-ft ul:eq(2)").show()
                .siblings().hide();
                break;
            }
            case 3:{
                $(".col-div2-notice-ft ul:eq(3)").show()
                .siblings().hide();
                break;
            }
            case 4:{
                $(".col-div2-notice-ft ul:eq(4)").show()
                .siblings().hide();
                break;
            }
        }
    })
    //便民服务栏的隐藏显现与样式改变
    $(".col-div3-li-first").mouseenter(function() {
        $(this).addClass("col-div3-li-selected")
        .siblings().removeClass("col-div3-li-selected");
        $(this).find("a").find("p").addClass("conve-list-p-hover")
        .parent().parent().siblings().find("a").find("p").removeClass("conve-list-p-hover");
        $(".conve-bd-box").addClass("conve-bd-box-on");
        console.log($(this).index());
        switch($(this).index()){
            case 0:{
                $(".conve-bd-item:eq(0)").show()
                .siblings("div").hide();
                break;
            }
            case 1:{
                $(".conve-bd-item:eq(1)").show()
                .siblings("div").hide();
                break;
            }
            case 2:{
                $(".conve-bd-item:eq(2)").show()
                .siblings("div").hide();
                break;
            }
            case 3:{
                $(".conve-bd-item:eq(3)").show()
                .siblings("div").hide();
                break;
            }
        }
    })
    //关闭便民服务栏并还原样式
    $("#conve-box-close").click(function() {
        $(".conve-bd-box").removeClass("conve-bd-box-on");
        $(".col-div3-li-first").removeClass("col-div3-li-selected");
        $(".col-div3-li-first").find("a").find("p").removeClass("conve-list-p-hover");
    })
    //便民服务内各List的偏移
    $(".conve-content1-tabs a").mouseenter(function(){
        $(this).addClass("conve-content-a-hover")
        .siblings().removeClass("conve-content-a-hover");
        switch($(this).index()){
            case 0:{
                $(".conve-rechange:eq(0)").css("left","15px");
                break;
            }
            case 1:{
                $(".conve-rechange:eq(0)").css("left","-285px");
                break;
            }
            case 2:{
                $(".conve-rechange:eq(0)").css("left","-585px");
                break;
            }
            case 3:{
                $(".conve-rechange:eq(0)").css("left","-885px");
                break;
            }
        }
    })
    $(".conve-content2-tabs a").mouseenter(function(){
        $(this).addClass("conve-content-a-hover")
        .siblings().removeClass("conve-content-a-hover");
        switch($(this).index()){
            case 0:{
                $(".conve-rechange:eq(1)").css("left","15px");
                break;
            }
            case 1:{
                $(".conve-rechange:eq(1)").css("left","-285px");
                break;
            }
        }
    })
    $(".conve-content3-tabs a").mouseenter(function(){
        $(this).addClass("conve-content-a-hover")
        .siblings().removeClass("conve-content-a-hover");
        switch($(this).index()){
            case 0:{
                $(".conve-rechange:eq(2)").css("left","15px");
                break;
            }
            case 1:{
                $(".conve-rechange:eq(2)").css("left","-285px");
                break;
            }
            case 2:{
                $(".conve-rechange:eq(2)").css("left","-585px");
                break;
            }
            case 3:{
                $(".conve-rechange:eq(2)").css("left","-885px");
                break;
            }
            case 4:{
                $(".conve-rechange:eq(2)").css("left","-1185px");
                break;
            }
        }
    })
    $(".conve-content4-tabs a").mouseenter(function(){
        $(this).addClass("conve-content-a-hover")
        .siblings().removeClass("conve-content-a-hover");
        switch($(this).index()){
            case 0:{
                $(".conve-rechange:eq(3)").css("left","15px");
                break;
            }
            case 1:{
                $(".conve-rechange:eq(3)").css("left","-285px");
                break;
            }
            case 2:{
                $(".conve-rechange:eq(3)").css("left","-585px");
                break;
            }
            case 3:{
                $(".conve-rechange:eq(3)").css("left","-885px");
                break;
            }
            case 4:{
                $(".conve-rechange:eq(3)").css("left","-1185px");
                break;
            }
        }
    })
    //右侧APP栏效果
    $(".apps-list").mouseenter(function() {
        $(this).find("a").next().show();
    }).mouseleave(function() {
        $(this).find("a").next().hide();
    })
    //关闭广告
    $(".qr-close").click(function() {
        $(".header-cup-qr").hide();
    })
    //悬浮搜索框效果
    $(".xf-top-swtich").mouseenter(function() {
        $(this).addClass("xf-swtich-hover");
    }).mouseleave(function() {
        $(this).removeClass("xf-swtich-hover");
    })
    $(".xf-top-swtich li").click(function() {
        $(this).addClass("xf-swtich-li-selected")
        .siblings().removeClass("xf-swtich-li-selected");
        $(this).insertBefore($(".xf-top-swtich li:eq(0)"));
        if($(this).attr("id")=="xf-listtm") {
            $(".xf-top-searchBox").addClass("search-panel-fields-tm");
            $(".xf-searchBtn").addClass("search-panel-fields-tm");
        }else {
            $(".xf-top-searchBox").removeClass("search-panel-fields-tm");
            $(".xf-searchBtn").removeClass("search-panel-fields-tm");
        }
    })
    //滚动显现悬浮搜索框
    $(window).scroll(function() {
        if($(document).scrollTop()>=200){
            $(".xf-top").show();
        }else {
            $(".xf-top").hide();
        }
    });
    //轮播方法调用
    lb1();
    lb2();
})

function lb1() {
    var imgBox1 = $(".core-top-p-div:eq(0)");
    var index1 = 1;
    var wi1 = 520;
    var ti1;
    var tim11;
    var tim21;
    var tim31;

    function slide1() {
        index1++;
        imgBox1.animate({"left": "-" + wi1 * index1 + 'px'}, 300);
        if (index1 == 6) {
            index1 = 1;
            tim11 = setTimeout(a, 300);
        }
        switch (index1) {
            case 1: {
                $(".core-top-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");

                break;
            }
            case 2: {
                $(".core-top-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 3: {
                $(".core-top-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 4: {
                $(".core-top-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 5: {
                $(".core-top-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
        }
        dy1();
    }

    function a() {
        imgBox1.stop(true, true);
        imgBox1[0].style.left = -520 + 'px';
        clearInterval(tim11);
    }

    dy1();
    $(".core-top-p").mouseenter(function () {
        clearInterval(ti1);
        $(".core-top-b-div").show();
    }).mouseleave(function () {
        $(".core-top-b-div").hide();
        dy1();
    })
    $(".core-top-b-ul").mouseenter(function () {
        $(".core-top-b-div").show();
    }).mouseleave(function () {
        $(".core-top-b-div").hide();
    })
    $(".core-top-b-div").mouseenter(function () {
        $(".core-top-b-div").show();
    }).mouseleave(function() {
        $(".core-top-b-div").hide();
    })
    $(".core-top-b-ul").find("li").click(function () {
        clearInterval(tim11);
        clearInterval(ti1);
        $(this).addClass("core-li-selected")
            .siblings().removeClass("core-li-selected");
        switch ($(this).index()) {
            case 0: {
                imgBox1.animate({"left": "-" + 520 + 'px'}, 300);
                dy1();
                index1 = 1;
                break;
            }
            case 1: {
                imgBox1.animate({"left": "-" + 1040 + 'px'}, 300);
                dy1();
                index1 = 2;
                break;
            }
            case 2: {
                imgBox1.animate({"left": "-" + 1560 + 'px'}, 300);
                dy1();
                index1 = 3;
                break;
            }
            case 3: {
                imgBox1.animate({"left": "-" + 2080 + 'px'}, 300);
                dy1();
                index1 = 4;
                break;
            }
            case 4: {
                imgBox1.animate({"left": "-" + 2600 + 'px'}, 300);
                dy1();
                index1 = 5;
                break;
            }
        }
    })
    $(".j-prev1").click(function () {
        var le = imgBox1.css("left");
        clearInterval(tim11);
        clearInterval(ti1);
        switch (index1) {
            case 1: {
                imgBox1.animate({"left": 0 + 'px'}, 300);
                tim21 = setTimeout(prev1Stop, 300);
                dy1();
                index1 = 5;
                $(".core-top-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 2: {
                imgBox1.animate({"left": "-" + 520 + 'px'}, 300);
                dy1();
                index1 = 1;
                $(".core-top-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 3: {
                imgBox1.animate({"left": "-" + 1040 + 'px'}, 300);
                dy1();
                index1 = 2;
                $(".core-top-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 4: {
                imgBox1.animate({"left": "-" + 1560 + 'px'}, 300);
                dy1();
                index1 = 3;
                $(".core-top-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 5: {
                imgBox1.animate({"left": "-" + 2080 + 'px'}, 300);
                dy1();
                index1 = 4;
                $(".core-top-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
        }
    })
    $(".j-next1").click(function () {
        var le = imgBox1.css("left");
        clearInterval(tim11);
        clearInterval(ti1);
        switch (index1) {
            case 1: {
                imgBox1.animate({"left": "-" + 1040 + 'px'}, 300);
                dy1();
                index1 = 2;
                $(".core-top-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 2: {
                imgBox1.animate({"left": "-" + 1560 + 'px'}, 300);
                dy1();
                index1 = 3;
                $(".core-top-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 3: {
                imgBox1.animate({"left": "-" + 2080 + 'px'}, 300);
                dy1();
                index1 = 4;
                $(".core-top-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 4: {
                imgBox1.animate({"left": "-" + 2600 + 'px'}, 300);
                dy1();
                index1 = 5;
                $(".core-top-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
            case 5: {
                imgBox1.animate({"left": "-" + 3120 + 'px'}, 300);
                tim31 = setTimeout(next1Stop, 300);
                dy1();
                index1 = 1;
                $(".core-top-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                break;
            }
        }
    })
    function prev1Stop() {
        imgBox1.stop(true, true);
        imgBox1[0].style.left = -2600 + 'px';
        clearInterval(tim21);
    }

    function next1Stop() {
        imgBox1.stop(true, true);
        imgBox1[0].style.left = -520 + 'px';
        clearInterval(tim31);
    }

    function dy1() {
        ti1 = setTimeout(slide1, 5000);
    }
}
function lb2() {
    var imgBox2 = $(".core-bottom-p-div:eq(0)");
    var index2 = 1;
    var wi2 = 520;
    var ti2;
    var tim12;
    var tim22;
    var tim32;

    function slide2() {
        index2++;
        imgBox2.animate({"left": "-" + wi2 * index2 + 'px'}, 300);
        if (index2 == 7) {
            index2 = 1;
            tim12 = setTimeout(b, 300);
        }
        switch (index2) {
            case 1: {
                $(".core-bottom-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("1");
                break;
            }
            case 2: {
                $(".core-bottom-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("2");
                break;
            }
            case 3: {
                $(".core-bottom-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("3");
                break;
            }
            case 4: {
                $(".core-bottom-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("4");
                break;
            }
            case 5: {
                $(".core-bottom-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("5");
                break;
            }
            case 6: {
                $(".core-bottom-b-ul").find("li:eq(5)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("6");
                break;
            }
        }
        dy2();
    }

    function b() {
        imgBox2.stop(true, true);
        imgBox2[0].style.left = -520 + 'px';
        clearInterval(tim12);
    }

    dy2();
    $(".core-bottom-p").mouseenter(function () {
        clearInterval(ti2);
        $(".core-bottom-b-div").show();
    }).mouseleave(function () {
        dy2();
        $(".core-bottom-b-div").hide();
    })
    $(".core-bottom-b-ul").mouseenter(function () {
        $(".core-bottom-b-div").show();
    }).mouseleave(function () {
        $(".core-bottom-b-div").hide();
    })
    $(".core-bottom-b-div").mouseenter(function () {
        $(".core-bottom-b-div").show();
    }).mouseleave(function() {
        $(".core-bottom-b-div").hide();
    })
    $(".core-bottom-b-ul").find("li").click(function () {
        clearInterval(tim12);
        clearInterval(ti2);
        $(this).addClass("core-li-selected")
            .siblings().removeClass("core-li-selected");
        switch ($(this).index()) {
            case 0: {
                imgBox2.animate({"left": "-" + 520 + 'px'}, 300);
                dy2();
                index2 = 1;
                $("#tmall-hd strong i").text("1");
                break;
            }
            case 1: {
                imgBox2.animate({"left": "-" + 1040 + 'px'}, 300);
                dy2();
                index2 = 2;
                $("#tmall-hd strong i").text("2");
                break;
            }
            case 2: {
                imgBox2.animate({"left": "-" + 1560 + 'px'}, 300);
                dy2();
                index2 = 3;
                $("#tmall-hd strong i").text("3");
                break;
            }
            case 3: {
                imgBox2.animate({"left": "-" + 2080 + 'px'}, 300);
                dy2();
                index2 = 4;
                $("#tmall-hd strong i").text("4");
                break;
            }
            case 4: {
                imgBox2.animate({"left": "-" + 2600 + 'px'}, 300);
                dy2();
                index2 = 5;
                $("#tmall-hd strong i").text("5");
                break;
            }
            case 5: {
                imgBox2.animate({"left": "-" + 3120 + 'px'}, 300);
                dy2();
                index2 = 6;
                $("#tmall-hd strong i").text("6");
                break;
            }
        }
    })
    $(".j-prev2").click(function () {
        var le = imgBox2.css("left");
        clearInterval(tim12);
        clearInterval(ti2);
        switch (index2) {
            case 1: {
                imgBox2.animate({"left": 0 + 'px'}, 300);
                tim22 = setTimeout(prev2Stop, 300);
                dy2();
                index2 = 6;
                $(".core-bottom-b-ul").find("li:eq(5)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("6");
                break;
            }
            case 2: {
                imgBox2.animate({"left": "-" + 520 + 'px'}, 300);
                dy2();
                index2 = 1;
                $(".core-bottom-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("1");
                break;
            }
            case 3: {
                imgBox2.animate({"left": "-" + 1040 + 'px'}, 300);
                dy2();
                index2 = 2;
                $(".core-bottom-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("2");
                break;
            }
            case 4: {
                imgBox2.animate({"left": "-" + 1560 + 'px'}, 300);
                dy2();
                index2 = 3;
                $(".core-bottom-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("3");
                break;
            }
            case 5: {
                imgBox2.animate({"left": "-" + 2080 + 'px'}, 300);
                dy2();
                index2 = 4;
                $(".core-bottom-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("4");
                break;
            }
            case 6: {
                imgBox2.animate({"left": "-" + 2600 + 'px'}, 300);
                dy2();
                index2 = 5;
                $(".core-bottom-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("5");
                break;
            }
        }
    })
    $(".j-next2").click(function () {
        var le = imgBox2.css("left");
        clearInterval(tim12);
        clearInterval(ti2);
        switch (index2) {
            case 1: {
                imgBox2.animate({"left": "-" + 1040 + 'px'}, 300);
                dy2();
                index2 = 2;
                $(".core-bottom-b-ul").find("li:eq(1)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("2");
                break;
            }
            case 2: {
                imgBox2.animate({"left": "-" + 1560 + 'px'}, 300);
                dy2();
                index2 = 3;
                $(".core-bottom-b-ul").find("li:eq(2)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("3");
                break;
            }
            case 3: {
                imgBox2.animate({"left": "-" + 2080 + 'px'}, 300);
                dy2();
                index2 = 4;
                $(".core-bottom-b-ul").find("li:eq(3)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("4");
                break;
            }
            case 4: {
                imgBox2.animate({"left": "-" + 2600 + 'px'}, 300);
                dy2();
                index2 = 5;
                $(".core-bottom-b-ul").find("li:eq(4)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("5");
                break;
            }
            case 5: {
                imgBox2.animate({"left": "-" + 3120 + 'px'}, 300);
                dy2();
                index2 = 6;
                $(".core-bottom-b-ul").find("li:eq(5)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("6");
                break;
            }
            case 6: {
                imgBox2.animate({"left": "-" + 3600 + 'px'}, 300);
                tim32 = setTimeout(next2Stop, 300);
                dy2();
                index2 = 1;
                $(".core-bottom-b-ul").find("li:eq(0)").addClass("core-li-selected")
                    .siblings().removeClass("core-li-selected");
                $("#tmall-hd strong i").text("1");
                break;
            }
        }
    })
    function prev2Stop() {
        imgBox2.stop(true, true);
        imgBox2[0].style.left = -3120 + 'px';
        clearInterval(tim22);
    }

    function next2Stop() {
        imgBox2.stop(true, true);
        imgBox2[0].style.left = -520 + 'px';
        clearInterval(tim32);
    }

    function dy2() {
        ti2 = setTimeout(slide2, 5000);
    }
}
