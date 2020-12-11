import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';
import { FiLoader } from 'react-icons/fi';

import { Container } from './styles';

export default function Button({ type, children, color, size, loading, ...props }) {
  return (
    <Container
      type={type}
      block={props.block}
      className={`ll-btn ${props.className || ''} ${props.block && 'btn-block'} ${loading && 'btn-loading'}`}
      {...props}
      size={size}
      loading={Number(loading)}
      color={color}
    >
      <span className="btn-text">{children}</span>
      <div className="loader">
        <FiLoader />
      </div>
      {/* {(loading && <FiLoader /> && `processando...`) || children} */}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.oneOf(['primary', 'default', 'danger', 'success', 'info', 'warning']),
  size: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  size: 'default',
  type: 'button',
  loading: false,
};
