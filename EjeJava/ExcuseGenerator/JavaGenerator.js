let who = ['the dog','my granma','his turtle','my bird','His son','Her cat'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


function Hola(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

window.onload = function() {
    document.querySelector(".random").innerHTML = who[Hola(0,who.length-1)]+' '+what[Hola(0,what.length-1)]+' '+when[Hola(0,when.length-1)];
}
//