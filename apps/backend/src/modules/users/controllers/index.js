const User = require('../models/User')

const createUser = async (request, response) => {
    try {
        const email = request.body.email
        const username = request.body.username
        const password = request.body.password

        const user = new User({
            email: email,
            username: username,
            password: password
        })

        await user.save()

        response.status(200).json({
            msg: 'Usuario guardado correctamente',
            user: user
        })
    } catch (error) {
        response.status(400).json({
            msg: 'Un error ocurrió en createUser',
            error: error
        })
    }
}

const getUserById = async (req, res) => {
    // TODO: obtener usuario por id y devolverlo
}

const obtenerTodosLosUsuarios = async (req, res) => {
}

const eliminarUsuario = async (req, res) => {
}

const actualizarUsuario = async (req, res) => {
}

const authenticarUsuario = async (req, res) => {
}

const loguearUsuario = async (req, res) => {
}

module.exports = {
    createUser,
    getUserById
}

