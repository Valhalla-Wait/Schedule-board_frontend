import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const num = 12
  return(
    <Wrapper>
      <SideBar />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 8px;
`;
const SideBar = styled.div`
  width: 15%;
  min-height: 100%;
  border-radius: 8px;
  background-color: var(--window-light);
`
const ScheduleBlock = styled.div`
  width: 85%;
  min-height: 100%;
`

export default Main;