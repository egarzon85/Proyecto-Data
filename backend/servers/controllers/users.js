let connection = require('../connection');
let jwt = require('jsonwebtoken');

let firma = "Acamica 2020 dwh";

function selectUsers(req, res) {

    let sql = `SELECT * FROM users`;

    connection.query(sql, function (err, users) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            users.forEach(user => {

                let decodedPassword = jwt.verify(user.password, firma);
                user.password = decodedPassword;
            })
            res.send(users)

        }
    })
}

function selectUserById(req, res) {

    let userToken = req.params.token;
    let token = jwt.verify(userToken, firma);

    let sql = `SELECT * FROM users WHERE users.email = '${token.email}'`;

    connection.query(sql, function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal error' });

        } else {
            res.send(user)
        }
    })
}
function insertUser(req, res) {

    let newUser = req.body;
    let password = jwt.sign(newUser.password, firma);
    let validator = 'SELECT email FROM users'

    connection.query(validator, function (err, info) {

        let resultEmail = info.find(elem => elem.email === newUser.email)

        if (resultEmail) {

            res.status(409).json({ message: 'This user already exists' })
            return
        }

        let sql = `INSERT INTO datawarehouse.users(name, lastname, email, is_admin, password)
        VALUES ("${newUser.name}", "${newUser.lastname}", "${newUser.email}", ${newUser.is_admin}, "${password}");`;

        connection.query(sql, function (err, user) {
            if (err) {
                console.log(err)
                res.status(500).json({ error: 'Asegurese de ingresar todos los datos' });

            } else {
                res.status(201).json(
                    {
                        message: 'user created',
                        userId: user.insertId
                    }
                )
            }
        })
    })
}

function updateUser(req, res) {

    let update = req.body;
    let userId = req.params.id;
    let password = jwt.sign(update.password, firma)

    let sql = `UPDATE users
        SET name ='${update.name}',
        lastname = '${update.lastname}',
        email = '${update.email}',
        is_admin= ${update.is_admin},
        password = '${password}'
        WHERE id = ${userId}`


    connection.query(sql, function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Asegurese de ingresar todos los datos para actualizar' });

        } else {
            res.status(200).json({ message: 'user updated', user })
        }
    })

}

function deleteUser(req, res) {

    let userId = req.params.id;
    let sql = `DELETE FROM users WHERE id = ${userId}`
    connection.query(sql, function (err, user) {
        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Internal Error' });

        } else {
            res.status(200).json({ message: 'user deleted', user })
        }
    })
}
function logIn(req, res) {
    let user = req.body
    let token = jwt.sign(user.password, firma);
    let sql = `SELECT password FROM users WHERE users.password = '${token}' AND users.email = '${user.email}'`

    connection.query(sql, function (err, passwords) {

        if (err) {
            res.status(500).json({ message: "Error al autenticar" })
            return
        } else {
            if (passwords.length == 0) {
                res.json({
                    message: "This user doesn't exist or the password is wrong",
                    user: false
                })
            } else {
                let userLogged = jwt.sign(user, firma)
                res.json({
                    'mensaje': 'Usuario autenticado correctamente',
                    'jwt': userLogged,
                    'user': true
                })
            }

        }
    })

}
module.exports = {
    selectUsers,
    insertUser,
    updateUser,
    deleteUser,
    selectUserById,
    logIn
}