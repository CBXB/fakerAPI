const express = require("express");
const port = 8000;
const faker = require("faker");
const app = express();

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

console.log(new User());
console.log(new Company());

app.get("/api", (req, res) => {
    res.json( {"mesaage": "We are ready!"} );
});

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
app.get("/api/user/company", (req, res) => {
    res.json(new Company());
});

app.listen(port, () => console.log(`Listening on port ${port}`));