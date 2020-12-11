import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Wrapper({ children, direction }) {
  return (
    <Container className="wrapper" direction={direction}>
      {children}
    </Container>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
  direction: PropTypes.string,
};

Wrapper.defaultProps = {
  direction: 'row',
};
