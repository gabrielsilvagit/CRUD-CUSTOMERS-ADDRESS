import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;

  &+.ll-box {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  text-transform: uppercase;
  color: ${props => props.theme.color1};

  padding: 15px 20px 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;
