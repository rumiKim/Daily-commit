    'use strict';

    let sliderWrapper = document.getElementsByClassName('container'),
        sliderContainer = document.getElementsByClassName('slider-container'),
        slides = document.getElementsByClassName('slide'),
        slideCount = slides.length, // 슬라이드의 개수
        currentIndex = 0,
        topHeight = 0, // 슬라이드 높이 중 제일 높은 것을 가져와서 부모의 높이로 설정
        navPrev = document.getElementById('prev'),
        navNext = document.getElementById('next');



        //요소의 높이 가져오기 : offsetHeight



        // 1. 슬라이드 높이중 제일 높은 것을 가져와서 부모의 높이로 설정
        function clacTallestSlide(){

            for(let i=0; i<slideCount; i++){
                if(slides[i].offsetHeight > topHeight){
                    topHeight = slides[i].offsetHeight;
                }
            }
            sliderWrapper[0].style.height = topHeight + 'px';
            sliderContainer[0].style.height = topHeight + 'px';
        }

        clacTallestSlide();
       

        // 2. 슬라이드가 있으면 가로로 배열하기 
        for(let i=0; i<slideCount; i++){
            slides[i].style.left = i*100 + "%";
        }


        //3. 버튼을 클릭할 때 슬라이드 이동 함수 
        // urrentIndex 가 0일때 sliderContainer의 left 값 0 
        // urrentIndex 가 1일때 sliderContainer의 left 값 -100%

        function goToSlide(idx){ 
            sliderContainer[0].style.left = idx * -100 + "%";
            sliderContainer[0].classList.add('animated');
            currentIndex = idx; 

            updateNav();
        }

        function updateNav(){
            //처음일때 
            if(currentIndex == 0){
                navPrev.classList.add('disabled');
            }else{
                navPrev.classList.remove('disabled');
            }

            //마지막일때 
            if(currentIndex == slideCount -1){
                navNext.classList.add('disabled');
            }else{
                navNext.classList.remove('disabled');
            }
        }

        //4. 버튼 클릭시 슬라이드 이동
        
            // 이전버튼 
        navPrev.addEventListener('click', function(e){
            e.preventDefault();
            goToSlide(currentIndex - 1);
        });


            // 다음 버튼
        navNext.addEventListener('click', function(e){
            e.preventDefault();
            goToSlide(currentIndex + 1); 
        });



        // 5. 첫번째 슬라이드 먼저 보이도록하기 
        goToSlide(0);


        //6. 처음과 마지막 로테이션



        








    







