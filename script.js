document.addEventListener("DOMContentLoaded", function() {
    const botonAgregar = document.getElementById("enviar");
 
    botonAgregar.addEventListener("click", async function() {
 
     try {
         const NOMBRE = document.getElementById("nombre").value
         const APELLIDO = document.getElementById("apellido").value
         const FECHANACIMIENTO = document.getElementById("fechaNac").value
         
         const URL = "https://jsonplaceholder.typicode.com/users"
 
         const DATA = {
             nombre: NOMBRE,
             apellido: APELLIDO,
             grupo: FECHANACIMIENTO
         };
         
         const response = await fetch(URL, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json; charset=utf-8"
             },
             body: JSON.stringify(DATA)
         });
 
         const responseData = await response.json();
         console.log("Respuesta", responseData);
     } catch (error) {
         console.log("Ha ocurrido un error", error)
     }
    });
});
 