import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${props => props.size};
  font-style: italic;
  font-weight: bold;
  color: ${props => props.color || props.theme.color1};
  margin: ${props => props.margin};

  transition: transform 0.4s;

  &:hover {
    transform: scale(1.08);
    color: ${props => props.color || props.theme.color1};
  }
`;

export const Title = styled.h1``;
