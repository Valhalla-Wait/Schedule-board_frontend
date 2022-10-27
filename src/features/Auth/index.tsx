import React from 'react';
import styled from 'styled-components';
import AuthForm from './AuthForm';

const Auth = () => {
  const num = 123
  return(
    <Wrapper>
      <AuthForm />
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

export default Auth;