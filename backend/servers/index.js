const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

let upload = multer();

let app = express()

const { defineRol, validateRol } = require('./middlewares/authorization');
const { selectContacts, insertContact, updateContact, deleteContact } = require('./controllers/contacts')
const { selectUsers, deleteUser, insertUser, updateUser, selectUserById, logIn } = require('./controllers/users')
const { getChannelsById, insertChannels, updateChannel, deleteChannel } = require('./controllers/channels');
const { selectRegions, selectInfoRegion, insertRegion, deleteRegion, selectAllInfoLocation, updateRegion } = require('./controllers/regions');
const { selectCountries, selectCountryByRegionId, selectInfoCountry, insertCountry, deleteCountry, updateCountry } = require('./controllers/countries');
const { selectCities, selectCityByCountryId, selectInfoCity, insertCity, deleteCity, updateCity } = require('./controllers/cities');
const { selectCompanies, insertCompany, deleteCompany, updateCompany } = require('./controllers/companies');

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

//ROUTES

//user routes
// si es regular, se elimina la pestana de usuarios en el header
app.get('/users', selectUsers);
app.post('/users', upload.none(), insertUser); //se crea un usuario
app.put('/users/:id', upload.none(), updateUser);
app.delete('/users/:id', deleteUser);
app.get('/users/:token', selectUserById);

//login

app.post('/login', upload.none(), logIn); //se loguea un usuario

//contactos

app.get('/contacts', selectContacts);
app.post('/contacts', upload.none(), insertContact);
app.put('/contacts/:id', upload.none(), updateContact);
app.delete('/contacts/:id', deleteContact);

//channels

app.get('/channels/:id', getChannelsById);
app.post('/channels', upload.none(), insertChannels);
app.put('/channels/:id', upload.none(), updateChannel);
app.delete('/channels/:id', deleteChannel);

//companies

app.get('/companies', selectCompanies);
app.post('/companies', upload.none(), insertCompany);
app.put('/companies/:id', upload.none(), updateCompany);
app.delete('/companies/:id', deleteCompany);

//regiones

app.get('/regions', selectRegions);
app.post('/regions', upload.none(), insertRegion);
app.put('/regions/:id', upload.none(), updateRegion);
app.delete('/regions/:id', deleteRegion);
app.get('/regions/:id', selectInfoRegion);

//countries

app.get('/countries', selectCountries);
app.post('/countries', upload.none(), insertCountry);
app.put('/countries/:id', upload.none(), updateCountry);
app.delete('/countries/:id', deleteCountry);
app.get('/countries/byRegionId/:regionId', selectCountryByRegionId);
app.get('/countries/:id', selectInfoCountry);

//cities

app.get('/cities', selectCities);
app.post('/cities', upload.none(), insertCity);
app.put('/cities/:id', upload.none(), updateCity);
app.delete('/cities/:id', deleteCity);
app.get('/cities/byCountryId/:countryId', selectCityByCountryId);
app.get('/cities/:id', selectInfoCity);

//all info location

app.get('/all_info_location', selectAllInfoLocation);



app.listen(3000, () => {
    console.log("The server is running on port 3000")
})