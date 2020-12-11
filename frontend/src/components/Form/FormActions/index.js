import React from 'react';
import PropTypes from 'prop-types'

import { Container } from './styles';

export default function FormActions({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormActions.propTypes = {
  children: PropTypes.any.isRequired
}
