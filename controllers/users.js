const {prisma} = require("../prisma/prisma-client");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * @route POST /api/user/login
 * @desc Логин
 * @access Public
 */
const login = async (req, res) => {
    const {email, password} = req.body

    if (!email && !password) {
        res.status(400).json({message: 'Пожалуйста, заолните обязательные поля'})
    }

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))

    if (user && isPasswordCorrect) {
        res.status(200).json({
            id: user.id,
            email: user.email,
            name: user.name
        })
    }else {
        return res.status(400).json({message:'Неверно введен email или пароль'})
    }

}
/**
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 */
const register = async (req, res) => {
    res.send('register');
}
const current = async (req, res) => {
    res.send('current');
}

module.exports = {
    login, current, register
}