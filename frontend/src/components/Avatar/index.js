import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';

import { Container } from './styles';

export default function Avatar({ children, image, size, ...rest }) {
  return (
    <Container image={image} size={size} {...rest}>
      {image ? '' : children}
    </Container>
  );
}

Avatar.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
  image: PropTypes.string,
};
Avatar.defaultProps = {
  children: <AiOutlineUser />,
  size: '30px',
  image: null,
};
