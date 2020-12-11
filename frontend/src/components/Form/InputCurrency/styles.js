import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;

  .currency {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px;
    color: rgba(0, 0, 0, 0.65);
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-right: 0;
  }

  > .ant-input-number:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .ant-input-number-input {
    border-top-left-radius: 0px;
    text-align: right;
    transition: padding 0.2s 0.4s ease;

    &:hover {
      padding-right: 25px;
      transition: padding 0.2s ease;
    }
  }
`;
