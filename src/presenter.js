//import metodos from "./totalizador";

const cantidad_items = document.querySelector("#cant-items");
const precio_item = document.querySelector("#precio-item")
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "<p>" + "Cantidad: " + cantidad_items.value + "<br> Precio: " + precio_item.value +"</p>" 
  
});