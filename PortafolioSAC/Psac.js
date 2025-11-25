var click= document.getElementById('ncd');
var text=document.getElementById('ncd');
var navnocturno=document.getElementById('navnocturno');
var headernocturno=document.getElementById('headernocturno');
var fotonocturno=document.getElementById('fotonocturno');
var msobremi=document.getElementById('msobremi');
var mproyecto=document.getElementById('mproyectos');
var mcontacto=document.getElementById('mcontacto');
var infonocturno=document.getElementById('infonocturno');

var todoslosh1=document.querySelectorAll('.h1noc');
var todaslastarjetas=document.querySelectorAll('.tarjetas');

var body=document.querySelector('body');
//*var a=document.querySelectorAll('.anav');
var cont=0;


click.onclick = function(){
    body.classList.toggle('ncdp');
    navnocturno.classList.toggle('cianmodonocturno');
    headernocturno.classList.toggle('headermodonocturno');
    fotonocturno.classList.toggle('cianmodonocturno');
    msobremi.classList.toggle('cianmodonocturnoh1');
    mproyecto.classList.toggle('cianmodonocturnoh1');
    mcontacto.classList.toggle('cianmodonocturnoh1');
    infonocturno.classList.toggle('infonoc');
    todoslosh1.forEach(function(unsoloh1){
        unsoloh1.classList.toggle('h1nocturno');
    });
    todaslastarjetas.forEach(function(unasolatarjeta){
        unasolatarjeta.classList.toggle('tarjenoc');
    });
    text.textContent="Noche";
    if(cont!=0){
        text.textContent="Dia";
        cont=cont-1;
    }
    else{
        cont++;
    }
    console.log(cont);
}