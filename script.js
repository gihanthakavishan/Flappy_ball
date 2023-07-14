var block = document.getElementById('block');
var hole = document.getElementById('hole');
var character = document.getElementById('character');
var jummping = 0;
var counter = 0;


hole.addEventListener('animationiteration', () =>{
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jummping == 0){
        character.style.top = (characterTop+3)+"px";
    }

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var cTop = -(500-characterTop);
    if((characterTop > 400) || ((blockLeft < 20)&& (blockLeft >- 50) && ((cTop<holeTop) || (cTop>holeTop+130)))){
        alert("Game Over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);

