let connection = require('../connection');

function selectContacts(req, res) {

    //FALTA RESOLVER CHANNELS

    let sql = `SELECT 
    contacts.id, contacts.name, contacts.lastname, contacts.email, contacts.position, contacts.address,contacts.interest, contacts.img_url,
    companies.name as 'company',
    companies.id as 'company_id',
    cities.name as 'city',
    cities.id as 'city_id',
    countries.name as 'country',
    regions.name as 'region',
    GROUP_CONCAT(channels.id) as 'channelsId',
    GROUP_CONCAT(channels.channel_name) as 'channelsName'
    FROM contacts
    INNER JOIN companies ON contacts.company_id = companies.id
    INNER JOIN cities ON contacts.city_id = cities.id
    INNER JOIN countries ON cities.country_id = countries.id
    INNER JOIN regions ON countries.region_id = regions.id
    INNER JOIN channels ON channels.user_id = contacts.id
    GROUP BY channels.user_id`;

    connection.query(sql, function (err, contacts) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {

            for (let i = 0; i < contacts.length; i++) {
                let con = contacts[i]
                let sqlChannels = `SELECT * FROM channels WHERE channels.user_id = ${con.id}`;
                connection.query(sqlChannels, function (err, channels) {
                    if (err) {
                        console.log(err)
                        res.status(500).json({ error: 'Internal error' });

                    } else {
                        con.channels = channels
                        if (i == contacts.length - 1) {
                            res.send(contacts)
                        }
                    }
                })
            }

        }
    })
}

function insertContact(req, res) {
    //let image = req.file
    let newContact = req.body;

    /*
        {
            "name": "Catalina",
            "lastname": "Rosales",
            "email": "catarosales@gmail.com",
            "position": "organizadora de eventos",
            "company_id": 2,
            "city_id": 2,
            "address": "La Rioja 123",
            "interest": 100,
            "img_url": "https://storage.googleapis.com/static-vibuk/profiles/26300.jpg"
        }
    */

    let sql = `INSERT INTO datawarehouse.contacts(name, lastname, email, position, company_id, city_id, address, interest, img_url)
     VALUES ('${newContact.name}', '${newContact.lastname}', '${newContact.email}', '${newContact.position}', ${newContact.company_id}, ${newContact.city_id}, '${newContact.address}', ${newContact.interest}, '${newContact.img_url}');`;

    connection.query(sql, function (err, contacts) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos del contacto' });

        } else {
            res.status(201).json(
                {
                    message: 'contact created',
                    contactId: contacts.insertId
                }
            )
        }
    })
}

function updateContact(req, res) {

    let update = req.body;
    let contactId = req.params.id;

    let sql = `UPDATE 
            datawarehouse.contacts
        SET
            name = '${update.name}',
            lastname = '${update.lastname}',
            email = '${update.email}',
            position = '${update.position}',
            company_id = ${update.company_id},
            city_id = ${update.city_id},
            address = '${update.address}',
            interest = ${update.interest},
            img_url= '${update.img_url}'
        WHERE
            id = ${contactId}`


    connection.query(sql, function (err, contact) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'contact updated', contact })
        }
    })

}

function deleteContact(req, res) {

    let contactId = req.params.id;
    let sql = `DELETE FROM contacts WHERE id = ${contactId}`
    connection.query(sql, function (err, contact) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {
            let sql = `DELETE FROM channels WHERE user_id = ${contactId}`

            connection.query(sql, function (err, channel) {
                if (err) {
                    console.log(err)
                    res.status(500).json({ error: 'Internal Error' });
        
                } else {
                    
                    res.status(200).json({ message: 'contact deleted', contact })
                }
            })
        }
    })
}

module.exports = {
    selectContacts,
    insertContact,
    updateContact,
    deleteContact
};
