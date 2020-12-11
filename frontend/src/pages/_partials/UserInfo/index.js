import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function UserInfo({ children }) {
  return <Container>{children}</Container>;
}

UserInfo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};
