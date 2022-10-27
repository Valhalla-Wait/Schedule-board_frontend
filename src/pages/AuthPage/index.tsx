import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Auth from '../../features/Auth';

const AuthPage = () => {
  const  token = false
  return(
    token ? <Navigate to="/" /> : <Auth />
  )
  
}
const Wrapper = styled.div`
  background-color: aqua;
`;

export default AuthPage;
