import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  .error-code {
    position: absolute;
    font-size: 50vw;
    font-weight: bold;
    opacity: 0.1;
  }

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 140px;
    margin-bottom: 5px;
    color: #fff;
    z-index: 10;
  }

  h2 {
    font-size: 20px;
    font-weight: 100;
    text-transform: uppercase;
    font-family: 'Montserrat';
    color: #fff;
  }

  .ll-btn {
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    .error-code {
      left: -45vw;
      font-size: 80vw;
      transform: rotate(90deg);
      margin-bottom: 0;
    }
  }
`;
