import React from 'react';
import {NamePath} from 'antd/es/form/interface'
import {Form, Input} from "antd";

type Props = {
    name: string
    placeholder: string
    dependencies?: NamePath[]
}

const CustomPasswordInput = ({placeholder, name, dependencies}: Props) => {
    return (
        <Form.Item name={name} rules={[{
            required: true,
            message: 'Обязательное поле'
        }, ({getFieldValue}) => ({
            validator(_, value) {
                if (!value) {
                    return Promise.resolve()
                }
                if (name === 'confirmPassword') {
                    if ((!value || getFieldValue(('password')) === value)) {
                        return Promise.resolve()
                    }
                    return Promise.reject(new Error('Пароли должны совпадать'))
                } else {
                    if (value.length < 5) {
                        return Promise.reject(new Error('Пароль должен быть длиннее 5 символов'))
                    }
                    return Promise.resolve()
                }
            }
        })]} dependencies={dependencies} hasFeedback>
            <Input.Password placeholder={placeholder} size={'large'}/>
        </Form.Item>
    );
};

export default CustomPasswordInput;