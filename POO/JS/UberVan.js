class UberVan extends Car {
    constructor(license, driver, typeCarAccepted, seatMaterial) {
        super(license, driver)
        this.seatMaterial = seatMaterial;
        this.typeCarAccepted = typeCarAccepted;
}
}