import React from 'react';
import {Layout, Space, Typography} from "antd";
import {TeamOutlined} from "@ant-design/icons";
import CustomButton from "../custom-button";
import styles from './index.module.css'
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon}/>
                <Link to={Paths.home}>
                    <CustomButton type={'ghost'}>
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type={'ghost'}>Регистрация</CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type={'ghost'}>Логин</CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};

export default Header;