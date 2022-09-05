
let personas = [
        {
            "nombre":"alan",
            "edad":25,
            "pais": "Argentina",
            "ciudad": "Bs as",
            "mascota": "-"
            
        },
        {
            "nombre":"fran",
            "edad":14,            
            "pais": "Argentina",
            "ciudad": "Bs as",
            "mascota": "palenca"
        },
        {
            "nombre":"facu",
            "edad":34,
            "pais": "Argentina",
            "ciudad": "Bs as",
            "mascota": "canario"
        },
        {
            "nombre":"jeje",
            "edad":24,
            "pais": "Argentina",
            "ciudad": "Bs as",
            "mascota": "perro"
        },
        {
            "nombre":"jeje",
            "edad":24,
            "pais": "Argentina",
            "ciudad": "Bs as",
            "mascota": "perro"
        }
    ]   


let tabla = document.getElementById("tabla");



function fillTable(personas){

    createTableTitle(personas[0]);

    personas.forEach(persona => {
        createItem(persona);

    });

}

function createTableTitle(keys){


    let claves = Object.keys(keys);
    
    let ttag_tr = document.createElement("tr");

    claves.forEach(clave => {
        let clave_th = document.createElement("th");
        clave_th.innerHTML = clave;
        ttag_tr.appendChild(clave_th);
    });

    tabla.appendChild(ttag_tr);

}

function createItem(persona){
    
    let claves = Object.keys(personas[0]);
    let tag_tr = document.createElement("tr");

    claves.forEach(clave => {
        let persona_th = document.createElement("th");
        persona_th.innerHTML = persona[clave];
        tag_tr.appendChild(persona_th);
    });
    
    tabla.appendChild(tag_tr);
    
}


fillTable(personas);


