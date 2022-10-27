import { Button, Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

const AuthForm = () => {
  const onFinish = () => {
    console.log('Finish')
  }
  const onFinishFailed = () => {
    console.log('Fail')
  }
  return(
    <Wrapper>
      <h2 className='form_title'>Вход в систему</h2>
      <Form
      name="auth"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <span className='input_title'>Введите код доступа</span>
        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Введите код доступа' }]}
        >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>  
      </Form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 15px;
  width: 350px;
  min-height: 300px;
  background-color: var(--window-light);
  border-radius: 16px;
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  .form_title {
    font: var(--h2-24_32-medium);
    align-self: flex-end;
  }
  .input_title {
    font: var(--paragraph-14_24-regular);
    color: var(--color-grey600);
  }
`;

export default AuthForm;