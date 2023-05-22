import React from 'react';
import {Button, Form} from "antd";

type Props = {
    children: React.ReactNode
    htmlType?: "button" | "submit" | "reset" | undefined
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
    onClick?: () => void
    danger?: boolean | undefined
    shape?: "default" | "circle" | "round" | undefined
    loading?: boolean
    icon?: React.ReactNode
}

const CustomButton = ({children, htmlType = 'button', type, danger, loading,icon, shape, onClick}: Props) => {
    return (
        <Form.Item>
            <Button htmlType={htmlType} type={type} danger={danger} icon={icon} loading={loading} onClick={onClick} shape={shape}>{children}</Button>
        </Form.Item>
    );
};

export default CustomButton;