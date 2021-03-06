import styled from 'styled-components'
import signUpBackgroundImage from '../../assets/sign-up-background.png'
import { shade } from 'polished'
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 100%;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #f3ede8;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#f3ede8')};
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImage}) no-repeat center;
  background-size: cover;
`
