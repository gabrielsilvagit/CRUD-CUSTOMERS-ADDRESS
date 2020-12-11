import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Error({ msg }) {
  return <Container className="error-label">{msg && msg}</Container>;
}

Error.propTypes = {
  msg: PropTypes.string,
};
Error.defaultProps = {
  msg: null,
};
