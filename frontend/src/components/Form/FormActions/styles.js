import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;

  .ll-btn + .ll-btn {
    margin-left: 5px;
  }
`;
