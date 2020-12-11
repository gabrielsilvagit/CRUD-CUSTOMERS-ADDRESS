import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { Form } from 'formik-antd';
import LLButton from '~/components/Button';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background: #fff;
  border-radius: 6px;
  padding: 40px;

  .form-control {
    margin-bottom: 0px;

    .error-label {
      display: flex;
      justify-content: center;
      width: 100%;
      color: #e34b4b;
    }
    .error input {
      background: #ffcccc;
    }
  }

  .btn-text:hover {
    color: #fff !important;
  }

  .btn-block {
    background-color: ${darken(0.0, '#1cbdcc')};

    span {
      font-weight: bold;
      font-size: 16px;
    }

    &:hover {
      background-color: ${darken(0.12, '#1cbdcc')};
    }
  }

  input {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #4a4a4a;
    margin: 0px;

    &::placeholder {
      color: #4a4a4a;
    }
  }

  span {
    align-self: flex-start;
    color: #a1a1a1;
    font-size: 12px;
    font-weight: initial;

    &:hover {
      color: #052f44;
    }
  }

  .createAccount {
    margin-bottom: 30px;
    margin-top: initial;
    width: 49%;
    align-self: flex-end;
    line-height: 1;
    position: relative;
    top: -15px;
  }

  .remember-me {
    color: #a1a1a1;
    margin-top: 8px;
    font-size: 12px;
    text-align: left;
    align-self: flex-start;
    display: flex;
  }

  a {
    color: #a1a1a1;
    margin-top: 8px;
    font-size: 12px;
    text-align: right;

    &:hover {
      color: #052f44;
    }
  }
`;

export const ButtonGlobalStyle = createGlobalStyle`
  .ant-btn, .ant-btn:active, .ant-btn:focus, .ant-btn:disabled, .ant-btn:disabled:hover {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
    height: 40px;

    background: ${darken(0.09, '#0F4C81')};
    border: 0;
    border-radius: 4px;
    color: #fff;

    transition: background 0.2s;
  }

  .ant-btn:disabled {
    opacity: 0.8;
  }
`;

export const Button = styled(LLButton)`
  background: ${darken(0.09, '#0F4C81')};

  &:hover {
    background: ${darken(0.12, '#0F4C81')};
  }
`;
