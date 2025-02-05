let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
  
    if (nombreAmigo.trim() === "") {
      alert("Por favor, inserte un nombre");
    } else {
      amigos.push(nombreAmigo);
      document.querySelector("#amigo").value = "";
      mostrarListaAmigo();
    }
  }

function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < amigos.length; index++) {
      const element = amigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }
