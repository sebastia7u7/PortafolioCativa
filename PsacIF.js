var clickcorreo=document.getElementById("acr");
var textcorreo=document.getElementById("acr");
var nuevaetii=document.getElementById("acr");
var contCR=0;

var clicklinkedin=document.getElementById("ali");
var textlinkedin=document.getElementById("ali");
var nuevaetili=document.getElementById("ali");
var contLI=0;

var clicktelefono=document.getElementById("ant");
var texttelefono=document.getElementById("ant");
var nuevaetitelefono=document.getElementById("ant");
var contT=0;

var clickgh=document.getElementById("agh");
var textgh=document.getElementById("agh");
var nuevaetigh=document.getElementById("agh");
var contgh=0;

clickgh.onclick=function(){
    textgh.textContent="https://github.com/sebastia7u7"
    navigator.clipboard.writeText(textgh.textContent);
    if (contgh!=0) {
        nuevaetigh.innerHTML='GitHub <i class="bi bi-github"></i>';
        contgh=contgh-1;
    }
    else{
        contgh++;
        alert('¡Enlace GitHub copiado con exito!');
    }
}
clicktelefono.onclick=function(){
    texttelefono.textContent="+54 11 2459-1410";
    navigator.clipboard.writeText(texttelefono.textContent);
    if(contT!=0){
        nuevaetitelefono.innerHTML='Numero de telefono<i class="bi bi-telephone"></i>';
        contT=contT-1;
    }
    else{
        contT++;
        alert('¡Numero de telefono copiado al porta papeles!');
    }
}

clicklinkedin.onclick=function(){
    textlinkedin.textContent="www.linkedin.com/in/sebastián-cativa-50913426b";
    navigator.clipboard.writeText(textlinkedin.textContent);
    if(contLI!=0){
        nuevaetili.innerHTML='LinkedIn <i class="bi bi-linkedin"></i>';
        contLI=contLI-1;
    }
    else{
        contLI++;
        alert('¡Enlace LinkedIn Copiado al porta papeles!');
    }
}

clickcorreo.onclick=function(){
    textcorreo.textContent="Sebastia7u7coco@gmail.com";
    navigator.clipboard.writeText(textcorreo.textContent);
    if(contCR!=0){
        nuevaetii.innerHTML='Correo Electronico<i class="bi bi-envelope-at"></i>';
        contCR=contCR-1;
    }
    else{
        contCR++;
        alert('¡Correo copiado al porta papeles!');
    }
}