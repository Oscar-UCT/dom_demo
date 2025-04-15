// Tareas
const listaDinamica = document.getElementById("lista-dinamica")
const inputTarea = document.getElementById("input-tarea")

function AgregarTarea()
{
    if (inputTarea.value != "")
    {
        // Se crean elementos
        const elementoLi = document.createElement("li")
        const elementoButton = document.createElement("button")

        elementoButton.textContent = "×" // Contenido del botón

        elementoButton.addEventListener("click", ()=>
        {
                listaDinamica.removeChild(elementoLi)           
        }) // Evenent listener para cada item nuevo, con la opción de borrar
    
        const texto = document.createTextNode(inputTarea.value) // Contenido de texto
    
        // Se agrega el contenido a la etiqueta li
        elementoLi.appendChild(texto)
        elementoLi.appendChild(elementoButton)

        // Bootstrap
        elementoLi.className = "list-group-item d-flex justify-content-between align-items-center"
        elementoButton.className = "btn btn-primary"

        // Se agrega la etiqueta li a la lista
        listaDinamica.appendChild(elementoLi)
    
        // Se limpia el campo de texto
        inputTarea.value = ""
    }
}

// Generador de contraseñas
function genPass() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let pass = "";
    for (let i = 0; i < 10; i++)
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    document.getElementById("pass").value = pass;
  }

  function copiar() {
    const input = document.getElementById("pass");
    input.select();
    input.setSelectionRange(0, 99999); // Móviles
    
    navigator.clipboard.writeText(input.value)
    
    alert("Contraseña copiada");
  }

  
// Contador

// Aquí creo una variable para guardar el número actual del contador
let contador = 0;

// Esta función se encarga de mostrar el valor del contador en la página
function actualizarContador() {
  document.getElementById("contador").textContent = contador;
}

// Esta función se ejecuta cuando le doy clic al botón "+" para aumentar
function aumentar() {
  contador++; // Sumo 1
  actualizarContador(); // Actualizo la pantalla
}

// Esta se usa para disminuir el contador cuando presiono "-"
function disminuir() {
  contador--; // Resto 1
  actualizarContador(); // Vuelvo a mostrar el número actualizado
}

// Esta función reinicia el contador a cero
function reiniciar() {
  contador = 0; // Vuelvo a empezar desde cero
  actualizarContador(); // Reflejo el cambio en la pantalla
}