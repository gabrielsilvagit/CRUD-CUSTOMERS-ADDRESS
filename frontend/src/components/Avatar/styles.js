import styled from 'styled-components';
import { Avatar } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.color5};

  width: ${props => props.size};
  height: ${props => props.size};
  max-width: ${props => props.size};
  max-height: ${props => props.size};

  background-image: url(${props => props.image || null});
  background-color: ${props => props.theme.color5};
  background-size: cover;
`;
