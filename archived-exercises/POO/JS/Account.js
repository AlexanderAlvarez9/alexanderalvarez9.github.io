class Account {
    constructor(name, document) {
    this.id;
    this.name = name;
    this.document = document;
    this.email;
    this.password;
    }

    printDataAccount(){
        console.log(`Su nombre es: ${this.name}`);
        console.log(`Su documento es: ${this.document}`);
    }
}