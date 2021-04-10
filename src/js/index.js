class QF{
    constructor(){
        this.nav_li = $('#nav-cen ul li');
        this.second_li = $('.second_li');
        this.move = $('#list ul li');
        this.msg = $('.msg_part ul li');

        this.piclist = $("#banner .pic ul li");
        this.picnav = $("#banner .picnav ul li");
        this.banner = $("#banner"); 
        this.navbox = $("#banner .picnav");
        this.but = $("#banner .but ul li");
        this.index = 0;
        this.time = null;
        this.addEvent();
        this.auto();
        

    }
    auto(index = 0){
        this.picnav.addClass('first').siblings().removeClass('first')
        this.piclist.eq(index).fadeIn().siblings().fadeOut();
        this.but.eq(index).addClass("first").siblings().removeClass("first");
    }
    addEvent(){
        //给li添加滑过事件
        this.nav_li.each(function(){
            $(this).hover(function(){
                $(this).css('background','#f15a23');
                $(this).children('.secondNav').css('display','block');
            },function(){
                $(this).css('background','#232323');
                $(this).children('.secondNav').css('display','none');
            })
        })
        // 给移动产业增加移入事件
        this.move.each(function(){
            $(this).hover(function(){
                $(this).css('background','#eaeaea');
                $(this).children('em').animate({top:"-101px"});
                $(this).children('i').animate({opacity:"1",top:"20px"});
                $(this).children('span').animate({height:"286px"});
                let a = $(this).children('a')
                let h = a.children('h3');
                h.animate({color:"#41a7f2"});
            },function(){
                $(this).css('background','#f5f5f5');
                $(this).children('em').animate({top:"20px"});
                $(this).children('i').animate({opacity:"0",top:"100px"});
                $(this).children('span').animate({height:"0px"}); 
            })
        })  
        this.msg.each(function(){
            $(this).hover(function(){
                $(this).children('a').css('color','red');
            },function(){
                $(this).children('a').css('color','#444');
            })
        }) 
        let that = this;
        this.banner.hover(function(){
            that.navbox.stop();
            that.navbox.animate({bottom:0},500);
            clearInterval(that.time)
        },function(){
            that.navbox.stop();
            that.navbox.animate({bottom:'-86px'},500);
            that.time = setInterval(function(){
                that.index = (that.index + 1) % 5;
                that.auto(that.index)
            },3000);
        });
        this.picnav.mouseover(function () {
            that.index = $(this).index();
            that.auto(that.index);
        });
        this.time = setInterval(function () {
            that.index=(this.index+1)%5;
            that.auto(that.index);
        },3000);
    }
}
new QF();