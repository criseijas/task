//Variables
var lista = document.getElementById("lista");
var tareaInput = document.getElementById("tareaInput");
var btnNuevaTarea = document.getElementById("btn-agregar");

//Funciones

function agregarTarea(){
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li");
    var enlace = document.createElement("a");
    var contenido = document.createTextNode(tarea);

    if(tarea === ""){
        tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
        tareaInput.className = "error";
        return false;
    }

    //agregamos el contenido al enlace
    enlace.appendChild(contenido);

    //le establecemos un atributo href
    enlace.setAttribute("href", "#");

    //agregamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);

    //agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for(var i=0; i<=lista.children.length -1; i++){
        lista.children[i].addEventListener("click", function(){
            this.parentNode.removeChild(this);
        });
    }
}

function comprobarInput(){
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
}

function eliminarTarea(){
    this.parentNode.removeChild(this);
}


//Eventos

//para agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);

//para comprobar input
tareaInput.addEventListener("click", comprobarInput);

//para borrar elementos de la lista
for(var i=0; i<=lista.children.length -1; i++){
    lista.children[i].addEventListener("click", eliminarTarea);
}
