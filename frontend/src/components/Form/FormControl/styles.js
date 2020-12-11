import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;

  width: 100%;
  margin-bottom: 12px;

  &.error {
    input {
      background-color: rgba(255, 0, 0, 0.2);
    }
  }

  .ant-input-number {
    width: 100%;
  }

  .ant-switch {
    width: max-content;
    margin-top: 5px;
  }

  > label {
    display: flex;
    margin-bottom: 5px;
    color: ${props => props.theme.color1};

    .field-required {
      margin-left: 3px;
    }
  }
`;
