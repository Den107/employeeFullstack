import React from 'react';
import Layout from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input";
import CustomPasswordInput from "../../components/custom-password-input";
import CustomButton from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

const Login = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Войти'} style={{width: '30rem'}}>
                    <Form onFinish={() => null}>
                        <CustomInput name={'email'} placeholder={'Email'} type={'email'}/>
                    <CustomPasswordInput name={'password'} placeholder={'Пароль'}/>
                    <CustomButton type={'primary'} htmlType={'submit'}>Войти</CustomButton>
                    </Form>
                    <Space size={'large'} direction={'vertical'}>
                        <Typography.Text>
                            Нет аккаунта? <Link to={Paths.register}>Регистрация</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>

    );
};

export default Login;