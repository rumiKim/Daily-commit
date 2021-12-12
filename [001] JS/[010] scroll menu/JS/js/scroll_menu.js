'use strict';

document.addEventListener('DOMContentLoaded',function(){

  const $menu = document.querySelectorAll('header ul li');
  const $contents = document.querySelectorAll('#contents > section');
  let $lastPos = 0;


  for(let i=0; i < $menu.length; i++){
    $menu[i].addEventListener('click',function(e){

      e.preventDefault();
      let idx = this.getAttribute('data-num');
      // 컨텐츠 까지의 높이
      let tt = $contents[idx].offsetTop;

      // window.scroll(x,y); //해당 위치로 단순 이동
      // window.scrollTo(x,y); //해당 위치로 단순 이동
      // window.scrollBy(x,-50); // 현재 위치를 기점으로 이동.(상대값) (현재 위치에서 -50px 만큼 y축 이동.)
      // 대상.scrollIntoView(); // 해당 위치로 이동
      // $contents[idx].scrollIntoView({behavior:'smooth'});// 해당 위치로 부드럽게 이동

      // 일정시간마다 스크롤 양을 변동시켜서 컨텐츠 위치로 이동.
      let scrollInterval = setInterval(function(){
        if(tt - window.scrollY > 50 || window.scrollY - tt > 50){ 

          if(tt > $lastPos){
            window.scrollBy(0,55);
          }else{
            window.scrollBy(0,-55);
          }
        }else{ // 원하는 페이지에 도착했다면 멈춤.
          clearInterval(scrollInterval);
          window.scrollTo(0,tt);
          $lastPos = tt;
        }
      },15);
    });
  } //for end

  // 스크롤이 생기면 메뉴 활성화
  window.addEventListener('scroll',function(){
    let $sct = this.scrollY;

    for(let i=0; i<$contents.length; i++){
      if($contents[i].offsetTop <= $sct){
        let idx = $contents[i].getAttribute('data-num');

        for(let j=0; j<$menu.length; j++){
          $menu[j].classList.remove('on');
        }
        $menu[idx].classList.add('on');
      }

    }//for 반복문



  });





});