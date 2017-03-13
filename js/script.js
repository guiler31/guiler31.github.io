var xmlhttp = new XMLHttpRequest();
var url = "json/data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.trabajos;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var section = document.getElementById("idContainer");

    for (i = 0; i < arr.length; i++) {
        //Div principal
        var proyecto = document.createElement("div");

        //Titulo
        var titulo = document.createElement("h1");
        //Texto dentro del h4
        var setTitle = document.createTextNode(arr[i].titulo);

        //imagenes
        var pic = document.createElement("img");
        pic.setAttribute("src", arr[i].imagen);

        //enlace
        var enlace = document.createElement("a");
        enlace.setAttribute("href", arr[i].source);

        //Insercion de los hijos en los elementos de la web

        section.appendChild(proyecto);

        proyecto.appendChild(titulo);
        titulo.appendChild(setTitle);

        proyecto.appendChild(pic);

        proyecto.appendChild(enlace);
    }



}
