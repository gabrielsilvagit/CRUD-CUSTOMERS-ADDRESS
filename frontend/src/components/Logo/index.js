import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function Logo({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

Logo.propTypes = {
  title: PropTypes.string,
};

Logo.defaultProps = {
  title: 'Bem-Vindo',
};
