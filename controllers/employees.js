const {prisma} = require("../prisma/prisma-client");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */
const getAll = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany()
        res.status(200).json(employees)
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'не удалось получить сотрудников'})
    }
}