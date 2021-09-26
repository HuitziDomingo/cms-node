import { Button, Checkbox, Form, Input, notification } from 'antd'
import './RegisterForm.scss'
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { emailValidation, minLengthValidation } from '../../../utils/formValidation'
import { signUpApi } from '../../../api/user'
import '../../../../src/App.scss'

export default function RegisterForm() {


    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    })

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    })

    const changeForm = e => {
        if (e.target.name === "privacyPolicy")
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            })
        else
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
    }

    const inputValidation = e => {
        let { type, name } = e.target
        if (type === 'email')
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            })
        if (type === 'password')
            setFormValid({
                ...formValid,
                [name]: minLengthValidation(e.target, 6)
            })
        if (type === 'checkbox')
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            })
    }

    const register = () => {
        let { email, password, repeatPassword, privacyPolicy } = formValid
        let emailVal = inputs.email
        let passwordVal = inputs.password
        let repeatPasswordVal = inputs.repeatPassword
        let privacyPolicyVal = inputs.privacyPolicy

        if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            console.log(123)
            notification['error']({
                message: "Error",
                description: "Todos los campos son obligatorios"
            })

        }
        else {
            if (passwordVal != repeatPasswordVal)
                notification['error']({
                    message: "Error",
                    description: "La clave tiene que ser igual."
                })
            else {
                let result = signUpApi(inputs)
            }
        }
    }

    return (
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="email"
                    name="email"
                    placeholder="maria.linda@gmail.mx"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="password"
                    placeholder="*************"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    name="repeatPassword"
                    placeholder="*************"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy} onChange={inputValidation}>
                    He leido y acepto las politicas de privacidad
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}
