

'use strict';


let container = document.getElementById('list1');

container.style.color = 'red';

let arr = [];

arr = document.getElementsByClassName('li');
 
console.log(arr[0]);

arr[0].style.color = 'blue';
arr[1].style.display = 'none';



let p = [];
p = document.querySelectorAll('#wraps_box p');

console.log(p.length);


p[0].style.color = 'red';


    for(let i=0; i<p.length; i++){
        p[i].style.color = 'red';
    }




