const h1 = document.querySelector(".hello h1:first-child");
console.dir(h1)





function handleh1Click(){
    h1.style.color = 'blue';
}

function handleMouseEnter(){
    h1.innerText = 'mouse is here!';
}


function handleMouseLeave(){
    h1.innerText = 'mouse is gone!';
    
}

function handleWindowResize(){
    document.body.style.background = 'tomato'; 
}
// h1.addEventListener("click", handleh1Click)
// h1.addEventListener("mouseenter", handleMouseEnter)
// h1.addEventListener("mouseleave", handleMouseLeave)
h1.onclick = handleh1Click;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave;


window.addEventListener('resize',handleWindowResize);


function handleWindowCopy(){
alert('copier!')
}
window.addEventListener('copy',handleWindowCopy);


function handleWindowOffline(){
    alert('SOS no WIFi');
}
function handleWindowOnline(){
    alert('ALL GOOOD');
}
window.addEventListener('offline',handleWindowOffline);
window.addEventListener('online',handleWindowOnline);
