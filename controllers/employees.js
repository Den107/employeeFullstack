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
        if (employees.length === 0) {
            return res.status(200).json({message: 'У этого пользователя нет сотрудников'})
        }
        res.status(200).json(employees)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось получить сотрудников'})
    }
}

/**
 * @route POST /api/employees
 * @desc Добавление сотрудника
 * @access Private
 */
const add = async (req, res) => {
    try {
        const {firstName, lastName, age, adress} = req.body

        if (!firstName || !lastName || !age || !adress) {
            return res.status(400).json({message: 'Пожалуйста, заполните все поля'})
        }

        const employee = await prisma.employee.create({
            data:{
                firstName, lastName, age, adress, userId: req.user.id
            }
        })

        return res.status(201).json(employee)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось добавить сотрудника'})
    }
}

/**
 * @route GET /api/employees/id
 * @desc Получение одного сотрудника
 * @access Private
 */
const getOne = async (req, res) => {

}

/**
 * @route DELETE /api/employees/id
 * @desc Удаление сотрудника
 * @access Private
 */
const remove = async (req, res) => {

}

/**
 * @route PUT /api/employees/id
 * @desc Редактирование сотрудника
 * @access Private
 */
const edit = async (req, res) => {

}

module.exports = {
    getAll, add, edit, getOne, remove
}