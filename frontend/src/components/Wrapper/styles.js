import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};

  min-height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;
