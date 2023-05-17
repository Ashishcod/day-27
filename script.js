const div1 = document.getElementById("cards1");
const div2 = document.getElementById("cards2");
const div3 = document.getElementById("cards3");



div1.addEventListener('click',function(){
    div1.style.width = '100%';
    div2.style.width = '10%'
    div3.style.width = '10%'
    div1.style.backgroundImage = "url(./img/img-1.jpg)"
    console.log("click")
})

div2.addEventListener('click',function(){
    div2.style.width = '100%';
    div1.style.width = '10%'
    div3.style.width = '10%'
    div2.style.backgroundImage = "url(./img/img-2.jpg)"
    console.log("click")
})

div3.addEventListener('click',function(){
    div3.style.width = '100%';
    div2.style.width = '10%'
    div1.style.width = '10%'
    div3.style.backgroundImage = "url(./img/img-3.jpg)"
    console.log("click")
})