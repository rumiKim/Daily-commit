'use strict';

/*
1. 일단 모든 메뉴 접어두기

2. 각 메뉴의 해딩을 누르면 그 부모 노드에 active 클래스 넣어주기 

3. active 클래스 들어간 노드의 자식 panel-body 보이게 하기 

4. 모든 메뉴 접기 버튼 기능 

*/



const btnCollapse = document.getElementById('btn-collapse'),
        question = document.getElementsByClassName('panel-question'),
        heading = document.getElementsByClassName('panel-heading'),
        answer = document.getElementsByClassName('panel-body');




// heading을 클릭하면 할일 
for(let i=0; i<heading.length; i++){
    heading[i].addEventListener('click',function(e){

        // question 마다 할일 
        // 1. 모든 question의 active 지우기 
        for(let j=0; j<question.length; j++ ){
            question[j].classList.remove('active');
            // 2. 클릭한 heading의 해당 부모인 question에 active 
            e.target.parentNode.classList.add('active');
                
            // 함수실행 
            activateBody();

        }
    });
}

function activateBody(){
    // 1. panel-body 를 모두 안보이게 한다. 
    for(let x = 0; x<answer.length; x++){
        answer[x].style.display = "none";
    }
    
    // 2. 만약 question에 active가 있으면 그 자식인 answer 가 나타나게한다. 

    let activePanel = document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display = " block";

}

activateBody();

// 모든 메뉴 접기 버튼 기능 
btnCollapse.addEventListener('click', function(){
    for(let i=0; i<answer.length; i++){
        answer[i].style.display = 'none';
    }
});
