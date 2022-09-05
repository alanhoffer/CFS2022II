let personas = [
    {
        nombre:"juju",
        edad:25,
    },
    {
        nombre:"jiji",
        edad:144,
    },
    {
        nombre:"jojo",
        edad:34,
    },
    {
        nombre:"jeje",
        edad:24,
    }
]



let tabla = document.getElementById("tabla");

function loadPeople(personas){


    personas.forEach(persona => {

        createCard(persona);

    });

}

function createCard(persona){
    

    var tag_div = document.createElement("ul");
    
    var pnombre = document.createElement("li");
    var pedad = document.createElement("li");

    pnombre.innerHTML = `Nombre: ${persona.nombre}`;
    pedad.innerHTML = `Edad: ${persona.edad}`;

    tag_div.appendChild(pnombre);
    tag_div.appendChild(pedad);

    tabla.appendChild(tag_div);
    
}
loadPeople(personas);


