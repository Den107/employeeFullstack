const {prisma} = require("../prisma/prisma-client");


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
            data: {
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
    try {
        const {id} = req.params
        const employee = await prisma.employee.findUnique({
            where:{
                id
            }
        })

        res.status(200).json(employee)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось получить сотрудника'})
    }
}

/**
 * @route DELETE /api/employees/id
 * @desc Удаление сотрудника
 * @access Private
 */
const remove = async (req, res) => {
    try {
        const {id} = req.params
        await prisma.employee.delete({
            where: {
                id
            }
        })
        res.status(204).json({message: 'Ok'})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось удалить сотрудника'})
    }
}

/**
 * @route PUT /api/employees/id
 * @desc Редактирование сотрудника
 * @access Private
 */
const edit = async (req, res) => {
    try{
        const {id} = req.params
        const data = req.body

        await prisma.employee.update({
            where:{
                id
            },
            data
        })

        res.status(204).json({message:'Ok'})
    }catch (e) {
        console.log(e)
        res.status(500).json({message: 'Не удалось отредактировать сотрудника'})
    }
}

module.exports = {
    getAll, add, edit, getOne, remove
}