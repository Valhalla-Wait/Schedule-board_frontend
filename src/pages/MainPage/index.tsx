import React from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../../features/Main';

const MainPage = () => {
  const token = true
  return(
    token ? <Main /> : <Navigate to="/auth" />
  )
}

const Wrapper = styled.div`
  background-color: aqua;
`;

export default MainPage;
