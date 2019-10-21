  function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  persona.prototype.saludar = function () {
    console.log(`Hola Soy ${this.nombre} ${this.apellido} `);
  };

  persona.prototype.soyAlto = function () {
  if (this.altura > 1.7) {
    console.log(`Hola Soy ${this.nombre} ${this.apellido} y NO soy un duende `);
  } else {
    console.log(`Hola Soy ${this.nombre} ${this.apellido}`);
  }
  };

  var Jhon = new persona("Jhon", "Alvarez", 1.74)
  var Sofy = new persona("Sofy", "Alvarez", 1.20)
  var Yudis = new persona("Yudis", "Paquemina", 1.55)
  Sofy.soyAlto()
