import funciones from "./funciones";

const cantidad_items = document.querySelector("#cant-items");
const precio_item = document.querySelector("#precio-item")
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const estado_item = document.querySelector("#estado-item")
var impuesto=Float32Array;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  impuesto=funciones.Impuesto_Estado(estado_item.value);
  div.innerHTML = "<p>" + "Cantidad: " + cantidad_items.value + "<br> Precio: " + precio_item.value +
  "<br>"+"Estado: "+"<b>"+estado_item.value + "</b>"+"  Impuesto: "+ impuesto+ "%"+"</p>" 
  
});