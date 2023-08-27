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
  function Descuento(precioTotal) {
    var descuento = Float32Array;
    if(precioTotal<1000){
         descuento=0;
    }
    if(precioTotal>=1000 && precioTotal<3000){
         descuento=3;
    }
    if(precioTotal>=3000 && precioTotal<7000){
        descuento=5;
    }
    if(precioTotal>=7000 && precioTotal<10000){
        descuento=7;
    }
    if(precioTotal>=10000 && precioTotal<30000){
        descuento=10;
    }
    if(precioTotal>=30000) {
        descuento=15;
    }
    return descuento;
  }


  function Calcular_precio_Neto(cantidad,precio){
    return cantidad*precio;
  }

  function Calcular_precio_Total(precioNeto,estado){
    return (precioNeto*funciones.Impuesto_Estado(estado)/100)+precioNeto;
  }

  function Calcular_Descuento(precioTotal,descuento){
    return (precioTotal*funciones.Descuento(precioTotal)/100);

  }

  const funciones={Impuesto_Estado,Calcular_precio_Neto,Calcular_precio_Total,Descuento,Calcular_Descuento};

  export default funciones;