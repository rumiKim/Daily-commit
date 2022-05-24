'use strict';


let btn = document.getElementById('submit'),
    wrap = document.querySelector('.container');




    btn.addEventListener('click',function(){
        btn.style.color = 'red';
        console.log('테스트입니다.');
    });

    wrap.addEventListener('mouseenter',function(){
        console.log('마우스가 들어왔어요');
    });
    wrap.addEventListener('mouseleave',function(){
        console.log('마우스가 나갔어요');
    });

    window.addEventListener('keydown',function(){
      console.log(event.key);
      console.log(event.keyCode);
    });
