const express = require('express');
const faker = require('faker');
const app = express()
const PORT = 5000



function User() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
}

function Company() {
  return {
    companyName: faker.company.companyName(),
    industry: faker.company.industry(),
    catchPhrase: faker.company.catchPhrase(),
    employees: faker.random.number(),
    location: {
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
    },
  };
}

app.get('/api/users/new',(req,res)=>{
    const newUser = User();
    res.json(newUser)
});

app.get('/api/companies/new',(req,res)=>{
    const newCompany = Company();
    res.json(newCompany)
})


app.get('/api/user/company',(req,res)=>{
    const newUser = User();
    const newCompany = Company();
    const UserCompany = 
    {
        user: newUser,
        company: newCompany,
      };
    res.json(UserCompany)

})
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
})

