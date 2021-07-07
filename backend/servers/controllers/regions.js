let connection = require('../connection');


function selectRegions(req, res) {

    let sql = `SELECT * FROM regions`;

    connection.query(sql, function (err, regions) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {

            res.send(regions)

        }
    })
}

function selectInfoRegion(req, res) {

    let regionId = req.params.id;
    let sql = `SELECT * FROM regions WHERE regions.id = ${regionId}`;


    connection.query(sql, function (err, region) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {

            let sqlContactsByRegion = `SELECT contacts.id, contacts.name,contacts.lastname, contacts.email, contacts.position, contacts.interest, contacts.img_url,
                companies.name AS 'company',
                regions.name AS 'region',
                countries.name AS 'country',
                cities.name AS 'city'
                FROM contacts
                INNER JOIN companies ON contacts.company_id = companies.id
                INNER JOIN cities ON contacts.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE regions.id = ${regionId}`

            connection.query(sqlContactsByRegion, (err, contacts) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    region[0].allContacts = contacts
                    // res.send(region)
                }
            })
            let sqlCompaniesByRegion = `SELECT companies.id, companies.name,companies.email, companies.phone, companies.address,
                cities.name AS 'city',
                countries.name AS 'country'
                FROM companies
                INNER JOIN cities ON companies.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE regions.id = ${regionId}`

            connection.query(sqlCompaniesByRegion, (err, companies) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {
                    region[0].allCompanies = companies
                    res.send(region)
                }
            })
        }
    })


}

function insertRegion(req, res) {
    let newRegion = req.body;

    let sql = `INSERT INTO datawarehouse.regions(name)
     VALUES ('${newRegion.name}');`;

    connection.query(sql, function (err, regions) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos de la region' });

        } else {
            res.status(201).json(
                {
                    message: 'region created',
                    regionId: regions.insertId
                }
            )
        }
    })
}

function deleteRegion(req, res) {

    let regionId = req.params.id;
    let sql = `DELETE FROM regions WHERE id = ${regionId}`

    connection.query(sql, function (err, region) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {
            res.status(200).json({ message: 'region deleted', region })
        }
    })

}

function selectAllInfoLocation(req, res) {
    let sql = `SELECT * FROM regions`;

    connection.query(sql, function (err, regions) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            regions.forEach(re => {
                re.type = "region"
            })

            let sqlCon = `SELECT * FROM countries`;

            connection.query(sqlCon, function (err, countries) {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal error' });

                } else {

                    countries.forEach(co => {
                        co.type = "country"
                        regions.push(co)
                    })

                    let sqlCit = `SELECT * FROM cities`;

                    connection.query(sqlCit, function (err, cities) {
                        if (err) {
                            console.log(err)
                            res.status(500).json({ error: 'Internal error' });

                        } else {

                            cities.forEach(ci => {
                                ci.type = "city"
                                regions.push(ci)
                            })
                            res.send(regions)

                        }
                    })
                }
            })

        }
    })
}

function updateRegion(req, res) {

    let update = req.body;
    let regionId = req.params.id;

    let sql = `UPDATE regions
        SET name ='${update.name}'
        WHERE id = ${regionId}`


    connection.query(sql, function (err, region) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'region updated', region })
        }
    })

}

module.exports = {
    selectRegions,
    selectInfoRegion,
    insertRegion,
    deleteRegion,
    selectAllInfoLocation,
    updateRegion
}
