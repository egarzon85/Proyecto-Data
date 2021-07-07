let connection = require('../connection');

function selectCities(req, res) {

    let sql = `SELECT 
    cities.name, cities.id,
    countries.name as 'country'
    FROM cities   
    INNER JOIN countries ON cities.country_id = countries.id
    `;

    connection.query(sql, function (err, cities) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            res.send(cities)
        }
    })
}

function selectCityByCountryId(req, res) {

    let countryId = req.params.countryId;
    let sql = `SELECT 
    cities.name, cities.id, cities.country_id ,
    countries.name AS 'country_name',
    regions.name AS 'region_name',
    regions.id AS 'region_id'
    FROM cities 
    INNER JOIN countries ON cities.country_id = countries.id
    INNER JOIN regions ON countries.region_id = regions.id
    WHERE country_id = ${countryId}`;


    connection.query(sql, function (err, cities) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            res.send(cities)
        }
    })


}

function selectInfoCity(req, res) {

    let cityId = req.params.id;
    let sql = `SELECT * FROM cities WHERE cities.id = ${cityId}`;


    connection.query(sql, function (err, city) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {

            let sqlContactsByCity = `SELECT contacts.id, contacts.name,contacts.lastname, contacts.email, contacts.position, contacts.interest, contacts.img_url,
                companies.name AS 'company',
                regions.name AS 'region',
                countries.name AS 'country',
                cities.name AS 'city'
                FROM contacts
                INNER JOIN companies ON contacts.company_id = companies.id
                INNER JOIN cities ON contacts.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE cities.id = ${cityId}`

            connection.query(sqlContactsByCity, (err, contacts) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    city[0].allContacts = contacts
                }
            })
            let sqlCompaniesByCity = `SELECT companies.id, companies.name,companies.email, companies.phone, companies.address,
                cities.name AS 'city',
                countries.name AS 'country'
                FROM companies
                INNER JOIN cities ON companies.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE cities.id = ${cityId}`

            connection.query(sqlCompaniesByCity, (err, companies) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    city[0].allCompanies = companies
                    res.send(city)
                }
            })
        }
    })


}

function insertCity(req, res) {
    let newCity = req.body;

    let sql = `INSERT INTO datawarehouse.cities(name, country_id)
     VALUES ('${newCity.name}', ${newCity.country_id});`;

    connection.query(sql, function (err, city) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos de la ciudad' });

        } else {
            res.status(201).json(
                {
                    message: 'city created',
                    cityId: city.insertId
                }
            )
        }
    })
}
function deleteCity(req, res) {

    let cityId = req.params.id;
    let sql = `DELETE FROM cities WHERE id = ${cityId}`

    connection.query(sql, function (err, city) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {

            res.status(200).json({ message: 'city deleted', city })

        }
    })

}
function updateCity(req, res) {

    let update = req.body;
    let cityId = req.params.id;


    let sql = `UPDATE cities
        SET name ='${update.name}',
        country_id = ${update.country_id}
        WHERE id = ${cityId}`


    connection.query(sql, function (err, city) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'city updated', city })
        }
    })

}

module.exports = {
    selectCities,
    selectCityByCountryId,
    selectInfoCity,
    insertCity,
    deleteCity,
    updateCity
}