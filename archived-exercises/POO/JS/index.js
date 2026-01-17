var car = new Car("ABC123", new Account("Jhon ALvarez", "101843"));
car.passenger = 4;
car.printDataCar();

var uberX = new UberX("QWE456", new Account("Felipe Escao", "109619"), "Mazda", "Spark");
uberX.passenger = 6;
uberX.printDataCar();

var user = new User("Pedro", "52024");
user.printDataAccount();

var driver = new Driver("Gio", "7959")
driver.printDataAccount();