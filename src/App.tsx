// eslint-disable-next-line no-use-before-define
import React from 'react'
import GlobalStyle from './styles/global'
import SignUp from './pages/SignUp'
const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyle />
    </>
  )
}

export default App
