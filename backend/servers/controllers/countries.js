let connection = require('../connection');

function selectCountries(req, res) {

    let sql = `SELECT 
    countries.name, countries.id,
    regions.name as 'region'
    FROM countries   
    INNER JOIN regions ON countries.region_id = regions.id
    `;

    connection.query(sql, function (err, countries) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            res.send(countries)
        }
    })
}

function selectCountryByRegionId(req, res) {

    let regionId = req.params.regionId;
    let sql = `SELECT 
    countries.name, countries.id, countries.region_id,
    regions.name AS 'region_name'
    FROM countries 
    INNER JOIN regions ON countries.region_id = regions.id
    WHERE region_id = ${regionId}`;


    connection.query(sql, function (err, countries) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            res.send(countries)
        }
    })


}
function selectInfoCountry(req, res) {

    let countryId = req.params.id;
    let sql = `SELECT * FROM countries WHERE countries.id = ${countryId}`;


    connection.query(sql, function (err, country) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {

            let sqlContactsByCountry = `SELECT contacts.id, contacts.name,contacts.lastname, contacts.email, contacts.position, contacts.interest, contacts.img_url,
                companies.name AS 'company',
                regions.name AS 'region',
                countries.name AS 'country',
                cities.name AS 'city'
                FROM contacts
                INNER JOIN companies ON contacts.company_id = companies.id
                INNER JOIN cities ON contacts.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE countries.id = ${countryId}`

            connection.query(sqlContactsByCountry, (err, contacts) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    country[0].allContacts = contacts
                    // res.send(region)
                }
            })
            let sqlCompaniesByCountry = `SELECT companies.id, companies.name,companies.email, companies.phone, companies.address,
                cities.name AS 'city',
                countries.name AS 'country'
                FROM companies
                INNER JOIN cities ON companies.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE countries.id = ${countryId}`

            connection.query(sqlCompaniesByCountry, (err, companies) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    country[0].allCompanies = companies
                    res.send(country)
                }
            })
        }
    })


}
function insertCountry(req, res) {
    let newCountry = req.body;

    let sql = `INSERT INTO datawarehouse.countries(name, region_id)
     VALUES ('${newCountry.name}', ${newCountry.region_id});`;

    connection.query(sql, function (err, country) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos del pais' });

        } else {
            res.status(201).json(
                {
                    message: 'country created',
                    countryId: country.insertId
                }
            )
        }
    })
}

function deleteCountry(req, res) {

    let countryId = req.params.id;
    let sql = `DELETE FROM countries WHERE id = ${countryId}`
    
    connection.query(sql, function (err, country) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {

            let sqlCities = `DELETE FROM cities WHERE country_id = ${countryId}`
            connection.query(sqlCities, function (err, cities) {
                if (err) {
                    console.log(err)
                }else{
                    res.status(200).json({ message: 'country deleted', country })
                }
            })
        }
    })

}

function updateCountry(req, res) {

    let update = req.body;
    let countryId = req.params.id;

    let sql = `UPDATE countries
        SET name ='${update.name}',
        region_id = ${update.region_id}
        WHERE id = ${countryId}`


    connection.query(sql, function (err, country) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'country updated', country })
        }
    })

}

module.exports= {
    selectCountries,
    selectCountryByRegionId,
    selectInfoCountry,
    insertCountry,
    deleteCountry,
    updateCountry
}
