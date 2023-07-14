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

