function Impuesto_Estado(estado) {
    var impuesto = Float32Array;
    if(estado=="CA")
      impuesto = 8.25;
    if(estado=="TX")
      impuesto = 6.25;
    if(estado=="UT")
      impuesto = 6.65;
    if(estado=="NV")
      impuesto = 8.00;
    if(estado=="AL")
      impuesto = 4.00;
    return impuesto;
  }
  function Calcular_precio_Neto(cantidad,precio){
    return cantidad*precio;

  }
  
  const funciones={Impuesto_Estado,Calcular_precio_Neto};
  export default funciones;