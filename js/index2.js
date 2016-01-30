$(function(){
    $(window).resize(function(){
        var clientW=$(window).width();
        if(clientW<730){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".footer1").css("display","none");
            $(".footer2").css("display","block");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".footer1").css("display","block");
            $(".footer2").css("display","none");
        }
    });
    $(window).resize();
    $(".menubtn").click(function(){
        $(".son").finish();
        $(".son").slideToggle(200);
    });

    $(".menubtn1").click(function(){
        $(".son1").finish();
        $(".son1").slideToggle(200);
    });
    $(".menubtn2").click(function(){
        $(".son2").finish();
        $(".son2").slideToggle(200);
    });
    $(".menubtn3").click(function(){
        $(".son3").finish();
        $(".son3").slideToggle(200);
    });
    $(".menubtn4").click(function(){
        $(".son4").finish();
        $(".son4").slideToggle(200);
    });
    $(".menubtn5").click(function(){
        $(".son5").finish();
        $(".son5").slideToggle(200);
    });
    $(".menubtn6").click(function(){
        $(".son6").finish();
        $(".son6").slideToggle(200);
    });
    $(".menubtn7").click(function(){
        $(".son7").finish();
        $(".son7").slideToggle(200);
    });
    $(".dj").click(function(){
        $(".gwd").finish();
        $(".gwd").slideToggle(200);
    });

    var num=0;
    var t=setInterval(move,4000);
    var move=function(){
        num++;
        if(num==$(".box .list").length-1){
            $(".box").animate({marginLeft:-num*100+"%"},function(){
                $(".box").css({marginLeft:0});
            });
            num=0;
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
        $(".btn li").css({background:"#b7b7b7",border:"none"});
        $(".btn li").eq(num).css({background:"#fff",border:"1px solid blue"});
    };

    $(".btn li").click(function(){
        $(".box").finish();
        var index=$(this).index(".btn li");
        num=index;
        $(".btn li").css({background:"#b7b7b7",border:"none"});
        $(this).css({background:"#fff",border:"1px solid blue"});
        $(".box").animate({marginLeft:-num*100+"%"})
    });

    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
       t=setInterval(move,4000);
    });


    // 获取 第一次结束时的位置
    var margin;
    touch.on(".box","dragstart",function(){
        margin=$(".box")[0].offsetLeft;
         });
    touch.on(".box","drag",function(e){
        //margin  初始值
        $(".box").css("margin-left",margin+ e.x)
    });
    touch.on(".box","dragend",function(e){
        //e.x 距离  e.factor  速率
        if(Math.abs(e.x)>300|| e.factor<5){
            if(e.direction=="left"){
                num++;
                if(num==$(".box .list").length-1){
                    $(".box").animate({marginLeft:-num*100+"%"},function(){
                        $(".box").css({marginLeft:0});
                    });
                    num=0;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
                $(".btn li").css({background:"#b7b7b7",border:"none"});
                $(".btn li").eq(num).css({background:"#fff",border:"1px solid blue"});
            }else if(e.direction=="right"){
                //到达第一张 想右滑不动
                num--;
                if(num==-1){
                    num=0;
                    $(".box").animate({marginLeft:-num*100+"%"});
                    return;
                }else{
                    $(".box").animate({marginLeft:-num*100+"%"});
                }
                //if(num==-1){
                //    $(".box").animate({marginLeft:-num*100+"%"},function(){
                //        $(".box").css({marginLeft:-3*100+"%"});
                //    });
                //    num=3;
                //}else{
                //    $(".box").animate({marginLeft:-num*100+"%"});
                //}
                $(".btn li").css({background:"#b7b7b7",border:"none"});
                $(".btn li").eq(num).css({background:"#fff",border:"1px solid blue"});
            }
        }else{
            $(".box").animate({marginLeft:-num*100+"%"});
        }
    });
    //阻止默认行为
    $(".box").mousedown(function(e){
        e.preventDefault()
    })

});