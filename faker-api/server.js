const express = require('express');
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({express: true}));

const user = [
    {
        id: 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.imei(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    }
]

const company = [
    {
        id: 1,
        name: faker.company.companyName(),
        address: [
            {
                street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country(),
            }
        ]
    }
]

app.get("/api/users/new", (req, res) => {
    res.json(user)
})

app.get("/api/companies/new", (req, res) => {
    res.json(company)
})

app.get("/api/company/new", (req, res) => {
    res.json({
        user: user, 
        company: company
    })
})

app.get("/example", )

app.listen(port, ()=> console.log(`running on port ${port}`));