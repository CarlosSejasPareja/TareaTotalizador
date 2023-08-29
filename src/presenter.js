import funciones from "./funciones";

const cantidad_items = document.querySelector("#cant-items");
const precio_item = document.querySelector("#precio-item")
const form = document.querySelector("#tot-form");
const div = document.querySelector("#resultado-div");
const estado_item = document.querySelector("#estado-item")
var impuesto=Float64Array;
var precioNeto=Float32Array;
var precioTotal=Float32Array;
var Descuento=Float32Array;


funciones.Calcular_precio_Neto(cantidad_items.value,precio_item.value);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  var precioFinal=Float32Array;
  impuesto=funciones.Impuesto_Estado(estado_item.value);
  precioNeto=funciones.Calcular_precio_Neto(cantidad_items.value,precio_item.value);
  precioTotal=funciones.Calcular_precio_Total(precioNeto,estado_item.value);
  Descuento= funciones.Descuento(precioTotal);
  precioFinal=precioTotal-funciones.Calcular_Descuento(precioTotal,Descuento);

  div.innerHTML = "<p>" + "Cantidad: " + cantidad_items.value + "<br> Precio: " + precio_item.value +
  "<br> Precio Neto: "+ precioNeto +
  "<br> Impuesto para "+"<b>"+estado_item.value + "</b>"+" = "+ impuesto+ "%"+
  "<br> Descuento: "+Descuento+"%"+
  "<br> Precio Total: " +precioFinal+"</p>" 
  
});