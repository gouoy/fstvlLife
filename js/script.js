//(00)------------------------
//gnb 
$(document).ready(function(){
  $(".main_navi").hide();
  $(".main_navi li>ul").hide();
  $(".secBack").hide();

  $("nav .bar").click(function(){
    $(".main_navi").fadeToggle()
  });

  $(".main_navi").hover(function(){
    $(".main_navi li>ul").fadeToggle();
    $(".secBack").fadeToggle();
  })
})
//gnv for pages
// let navi = document.getElementsByClassName('navi');
// let list = document.querySelectorAl('.navi>li');
// let pageMove = document.querySelectorAll('.navi>li>ul');

$(document).ready(function(){
  $(".navi li>ul").hide();
  $(".navi li").hover(
    function(){
      $(this).children("ul").stop(true, true).show();
    },
    function(){
      $(this).children("ul").stop(true, true).slideUp().slow();
    }
  );
})

//높이 2
// #forMain section p img 
//01 ABOUT US -----------------------------
// (1) spring svg 효과 (2) 모달 창 close (3) 모달 창 넘기기.  (4) 해당 연도에 맞는 모달 창 띄우기 

let btnPrev = document.querySelector('.page-prev');
let btnNext = document.querySelector('.page-next'); 
//(2)
let activities = document.querySelectorAll('.forActivity article');

activities.forEach(activity =>{
  let closedBtn = document.querySelector('.closedBtn');
  
  closedBtn.addEventListener('click',() => {
    activity.style.display = 'none' ;
    closedBtn.style.display = 'none' ;
});
});
//(4) 창 띄우기   
let years = document.querySelectorAll('.gridCon div');
years.forEach(year =>{
  index = 0 ; 
  year.addEventListener('click',function(){
    console.log(years[index]);
  })
})

/* 클릭하면, 이미지 바뀌면서 모달 창 켜지는 것! */
let fstvlPoster = document.querySelectorAll('.posters span');
let fstvlZoom = document.querySelector('.fstvl_info');
let closed = document.querySelector('.fstvl_info .closed');

/* fstvlPoster.forEach((btn)=>{
  btn.addEventListener('click', function(){
    const target = this.dataset.open;
    document.getElementById(target).classList.add(isVisible); 
  });
}); */

// -Tumblbug-----------------------------------
$(document).ready(function(){

  $(".thumbs.c1 img").click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    // 큰이미지 src 속성 변경하기
    let imageSrc = $(this).attr('src');
    $(".largeImg.c1>img").attr({"src":imageSrc}).hide().fadeIn();
  });

  $(".thumbs.c2 img").click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    // 큰이미지 src 속성 변경하기
    let imageSrc = $(this).attr('src');
    $(".largeImg.c2>img").attr({"src":imageSrc}).hide().fadeIn();
  });

});

// 08 게시판 창 띄우기... 

$(document).ready(function(){
  let btnForPost = document.querySelector('.container8 button');
  let post = document.querySelector('.post');
  $(btnForPost).click(function(){
    $(".post").addClass("active")
  });
  // $().click(function(){
  //   $(".post").hide();
  // })
})
//06----------------------------------------------------------
//message box  
document.addEventListener('DOMContentLoaded', function() {
  let popUp = document.querySelector('.modal');
  popUp.addEventListener('click',() => {
  popUp.style.cssText='opacity:0'
  });
});


//Button
let tokyoBtn = document.querySelector('.city span:first-child');
let osakaBtn = document.querySelector('.city span:last-child');
let tokyo = document.querySelector('.tokyo');
let osaka = document.querySelector('.osaka');


$(document).ready(function(){
  $(osaka).css("display","none");
});
let posterOsaka = document.querySelector('.poster img');
  osakaBtn.addEventListener('click',()=> {
  tokyo.classList.add('pageActive');
  osaka.classList.remove('pageActive');
  posterOsaka.setAttribute('src','./img/summersonic_02.jpg')
});
$(document).ready(function(){
  $(osaka).show();
});
$(document).ready(function(){
  tokyoBtn.addEventListener('click',()=>{
    $(osaka).show();
    osaka.classList.add('pageActive');
    tokyo.classList.remove('pageActive');
    posterOsaka.setAttribute('src','./img/summersonic_01.jpg')
  });
})

$(document).ready(function(){
  $(".titles").click(function(){
    $(this).siblings(".titles").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".contents").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

});

// 08 --- Community 
