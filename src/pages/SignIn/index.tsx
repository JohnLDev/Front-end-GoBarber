// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, Content, Background } from './styles'
import LogoImg from '../../assets/logo.svg'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Button from '../../components/Button'
import Input from '../../components/Input'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt='Go Barber' />
        <form>
          <h1>Faça seu logon</h1>
          <Input icon={FiMail} name='Email' placeholder='E-mail' />
          <Input
            icon={FiLock}
            name='Password'
            type='password'
            placeholder='Password'
          />

          <Button type='submit'>Entrar</Button>

          <a href='forgot'>Esqueci minha senha</a>
        </form>

        <a href='new'>
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
