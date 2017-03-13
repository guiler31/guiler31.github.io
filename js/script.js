var xmlhttp = new XMLHttpRequest();
var url = "json/data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        Div(myArr);
        
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function Div(arr) {
    var section = document.getElementById("idContainer");

    for (i = 0; i < arr.length; i++) {
         //Div principal
         var divProy = document.createElement("div");
         divProy.setAttribute("class", "proyecto");
         //Titulo
         var title = document.createElement("h3");
         title.setAttribute("class", "h3class");
         var label = document.createTextNode(arr[i].titulo);
         //Imagen
         var imagen = document.createElement("img");
         imagen.setAttribute("class", "imgProy");
         imagen.setAttribute("src", arr[i].imagen);
         
         //Enlace
         var link = document.createElement("a");
         link.setAttribute("class", "enlaceClass");
         link.setAttribute("href", arr[i].source);
        
         //CREACION DE LOS HIJOS DENTRO DE LOS DIVS
         idContainer.appendChild(divProy);
         divProy.appendChild(title);
         title.appendChild(label);
         link.appendChild(imagen);
         divProy.appendChild(link);
     }

}
