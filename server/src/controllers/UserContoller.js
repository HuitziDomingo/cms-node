import bcrypt from 'bcrypt-nodejs';
import User from '../models/User'

const signUp = (req, res) => {
    let user = new User()
    let { email, password, repeatPassword, name, lastname } = req.body
    user.email = email
    user.role = "admin"
    user.active = false
    user.name = name
    user.lastname = lastname

    if (!password || !repeatPassword)
        res.status(404).send({ message: "Las claves son obligatorias" })
    else {
        if (password !== repeatPassword)
            res.status(404).send({ message: "Las claves no son iguales" })
        else bcrypt.hash(password, null, null, (err, hash) => {
            if (err)
                res.status(500).send({ message: "Error al encriptar la clave." })
            else {
                //res.status(200).send({ message: hash })
                user.password = hash
                user.save((err, userStored) => {
                    if (err)
                        res.status(500).send({ message: "Hubo error en el servidor, el usuario ya existe. " + err })
                    else {
                        if (!userStored)
                            res.status(500).send({ message: "Error del servidor" })
                        else res.status(200).send({ message: userStored })
                    }
                })
            }
        })
    }

}

module.exports = {
    signUp
}