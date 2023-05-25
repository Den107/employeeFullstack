import {Employee} from '@prisma/client'
import {api} from './api'

export const employeesApi = api.injectEndpoints({
    endpoints: build => ({
        getAllEmployees: build.query<Employee[], void>({
            query: () => ({
                url: '/employees',
                method: 'GET'
            })
        }),
        getOneEmployee: build.query<Employee, string>({
            query: (id) => ({
                url: `/employees/${id}`,
                method: 'GET'
            })
        }),
        editEmployee: build.mutation<string, Employee>({
            query: (employee) => ({
                url: `/employees/${employee.id}`,
                method: 'PUT'
            })
        }),
        removeEmployee: build.mutation<string, string>({
            query: (id) => ({
                url: `/employees/${id}`,
                method: 'DELETE'
            })
        }),
        addEmployee: build.mutation<Employee, Employee>({
            query: (employee) => ({
                url: `/employees`,
                method: 'POST',
                body: {employee}
            })
        })
    })
})


export const {
    useAddEmployeeMutation,
    useEditEmployeeMutation,
    useGetAllEmployeesQuery,
    useGetOneEmployeeQuery,
    useRemoveEmployeeMutation
} = employeesApi

export const {
    endpoints: {
        getAllEmployees,
        getOneEmployee,
        addEmployee,
        removeEmployee,
        editEmployee
    }
} = employeesApi