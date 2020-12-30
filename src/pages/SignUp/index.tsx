// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Container, Content, Background } from './styles'
import { FormHandles } from '@unform/core'
import LogoImg from '../../assets/logo.svg'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Form } from '@unform/web'
import * as yup from 'yup'
import getValidationErrors from '../../utils/getValidationErros'

interface data {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const HandleSubmit = useCallback(async (data: data) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup
          .string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: yup.string().min(6, 'No mínimo 6 digitos'),
      })
      await schema.validate(data, { abortEarly: false })
      formRef.current?.setErrors({})
    } catch (error) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])
  return (
    <Container>
      <Background />

      <Content>
        <img src={LogoImg} alt='Go Barber' />
        <Form ref={formRef} onSubmit={HandleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name='name' placeholder='Name' />
          <Input icon={FiMail} name='email' placeholder='E-mail' />
          <Input
            icon={FiLock}
            name='password'
            type='password'
            placeholder='Password'
          />

          <Button type='submit'>Cadastrar</Button>
        </Form>

        <a href='new'>
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
