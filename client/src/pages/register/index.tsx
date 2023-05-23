import React from 'react';
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input";
import CustomPasswordInput from "../../components/custom-password-input";
import CustomButton from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
import Layout from "../../components/layout";

const Register = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Регистрация'} style={{width: '30rem'}}>
                    <Form onFinish={() => null}>
                        <CustomInput name={'name'} placeholder={'Имя'}/>
                        <CustomInput name={'email'} placeholder={'Email'} type={'email'}/>
                        <CustomPasswordInput name={'password'} placeholder={'Пароль'}/>
                        <CustomPasswordInput name={'confirmPassword'} placeholder={'Повторите пароль'}/>
                        <CustomButton type={'primary'} htmlType={'submit'}>Зарегистрироваться</CustomButton>
                    </Form>
                    <Space size={'large'} direction={'vertical'}>
                        <Typography.Text>
                            Уже зарегистрированы? <Link to={Paths.login}>Войти</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

export default Register;