let connection = require('../connection');

function selectCompanies(req, res) {

    let sql = `SELECT 
    companies.id,
    companies.name, companies.email, companies.phone, companies.address,
    cities.name AS 'city',
    cities.id AS 'city_id',
    countries.name AS 'country',
    regions.name AS 'region'
    FROM companies
    INNER JOIN cities ON companies.city_id = cities.id
    INNER JOIN countries ON cities.country_id = countries.id
    INNER JOIN regions ON countries.region_id = regions.id`;

    connection.query(sql, function (err, companies) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            let allInfoCompanies = []

            for (let i = 0; i < companies.length; i++) {

                let company = companies[i]
                let sqlContacts = `SELECT contacts.id, contacts.name,contacts.lastname, contacts.email, contacts.position, contacts.interest, contacts.img_url,
                companies.name AS 'company',
                regions.name AS 'region',
                countries.name AS 'country',
                cities.name AS 'city'
                FROM contacts
                INNER JOIN companies ON contacts.company_id = companies.id
                INNER JOIN cities ON contacts.city_id = cities.id
                INNER JOIN countries ON cities.country_id = countries.id
                INNER JOIN regions ON countries.region_id = regions.id
                WHERE company_id = ${company.id}`

                connection.query(sqlContacts, (err, contacts) => {
                    if (err) {
                        console.log(err)
                        res.status(500).json({ error: 'Internal error' });

                    } else {
                        company.allContacts = contacts
                        allInfoCompanies.push(company)
                        if (i == companies.length - 1) {
                            res.send(allInfoCompanies)
                        }

                    }
                })
            }

        }
    })
}
function insertCompany(req, res) {
    let newCompany = req.body;

    let sql = `INSERT INTO datawarehouse.companies(name, phone, email, city_id, address)
    VALUES ("${newCompany.name}", "${newCompany.phone}", "${newCompany.email}", ${newCompany.city_id}, "${newCompany.address}");`;

    connection.query(sql, function (err, company) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos' });

        } else {
            res.status(201).json(
                {
                    message: 'company created',
                    companyId: company.insertId
                }
            )
        }
    })

}

function updateCompany(req, res) {

    let update = req.body;
    let companyId = req.params.id;

    let sql = `UPDATE companies
        SET name =' ${update.name}',
        email = '${update.email}',
        phone = '${update.phone}',
        city_id= ${update.city_id},
        address = '${update.address}'
        WHERE id = ${companyId}`


    connection.query(sql, function (err, company) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'company updated', company })
        }
    })

}

function deleteCompany(req, res) {

    let companyId = req.params.id;
    let sql = `DELETE FROM companies WHERE id = ${companyId}`
    connection.query(sql, function (err, company) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {
            res.status(200).json({ message: 'company deleted', company })
        }
    })
}
module.exports = {
    selectCompanies,
    insertCompany,
    deleteCompany,
    updateCompany
}