import React, {useState} from 'react';
import Layout from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import CustomInput from "../../components/custom-input";
import CustomPasswordInput from "../../components/custom-password-input";
import CustomButton from "../../components/custom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/isErrorWithMessage";
import ErrorMessage from "../../components/error-message";

const Login = () => {
    const [loginUser, loginUserResult] = useLoginMutation()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap()

            navigate('/')
        } catch (e) {
            const maybeError = isErrorWithMessage(e)

            if (maybeError) {
                setError(e.data.message)
            } else {
                setError('Неизвестная ошибка')
            }
        }
    }

    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Войти'} style={{width: '30rem'}}>
                    <Form onFinish={login}>
                        <CustomInput name={'email'} placeholder={'Email'} type={'email'}/>
                        <CustomPasswordInput name={'password'} placeholder={'Пароль'}/>
                        <CustomButton type={'primary'} htmlType={'submit'}>Войти</CustomButton>
                    </Form>
                    <Space size={'large'} direction={'vertical'}>
                        <Typography.Text>
                            Нет аккаунта? <Link to={Paths.register}>Регистрация</Link>
                        </Typography.Text>
                        <ErrorMessage message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>

    );
};

export default Login;