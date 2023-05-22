import React from 'react';
import {Form, Input} from "antd";

type Props={
    name: string
    placeholder: string
    type?: string

}

const CustomInput = ({name, placeholder, type = 'text'}: Props) => {
    return (
        <Form.Item name={name} shouldUpdate={true} rules={[{required: true, message:'Обязательное поле'}]}>
            <Input size={'large'} type={type} placeholder={placeholder}/>
        </Form.Item>
    );
};

export default CustomInput;