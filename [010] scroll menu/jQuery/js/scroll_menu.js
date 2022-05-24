$(function(){

  /**
   * 1. 메뉴 클릭시 , 몇번 째 메뉴인지 순번 확인 
   * 2. 그 순번에 해당하는 내용이 화면 상단에서 얼마나 떨어져있는지 거리를 확인, html, body 에 스크롤양을 확인한 수치만큼 준다. animate메서드를 통해 바뀌는걸 보여주기. 
   * 
   */
  //변수지정

  /*
  메뉴 (li)를 변수명 $menu에 지정 
  각 내용들을 변수명 $contents에 지정
   */

  let $menu = $('header ul li ');
  let $contents = $('#contents > section');





  
  //메뉴 클릭 이동 
  /*
  몇번째 메뉴를 클릭했는지 순번 확인, 변수명 idx에 저장.
   */
  $menu.click(function(e){ 
    e.preventDefault();

    // 클릭한 메뉴 인덱스 구하기
    let idx = $(this).index();
    
    //해당 컨텐츠까지의 거리구하고 이동
    let tt = $contents.eq(idx).offset().top;
    $('html,body').animate({scrollTop:tt});




    //활성화된 메뉴 표시하기  - 방법 1
    // $menu.removeClass('on');
    // $(this).addClass('on');

    //활성화된 메뉴 표시하기  - 방법 2
    $(this).addClass('on').siblings().removeClass('on');


  
  });


    // 스크롤 이동시 활성화된 메뉴 표시 
    $(window).scroll(function(){

      // 현재의 스크롤탑을 변수명에 담기 
      let $sct = $(this).scrollTop();

      $contents.each(function(i){ //i로 인덱스 번호 가져옴

        let tg = $(this);

        if(tg.offset().top - 10 < $sct){
          $menu.removeClass('on');
          $menu.eq(i).addClass('on');
        }
      });

    });






  //스크롤 이동 반영하기  
  

});