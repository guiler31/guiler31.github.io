function colorearCapas(){
    var coleccion=document.getElementsByClassName("capa");
    var i;
    for(i=0; i<coleccion.length; i++){
        coleccion[i].style.backgroundColor="red";
        coleccion[i].innerHTML= "CAPA " + (i+1);
    } 
}

function establecerReloj() {
setInterval(function(){ myTimer() }, 500);
}

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("reloj").innerHTML = "<h1>" + t + "</h1>" ;
}
