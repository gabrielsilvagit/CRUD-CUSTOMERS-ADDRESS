import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { store } from '~/store';

export default function RouteWrapper({ component: Component, isPrivate, isFree, baseLayout, ...rest }) {
  const { signed } = store.getState().auth;

  if (!isFree) {
    if (!signed && isPrivate) {
      return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
      return <Redirect to="/customers" />;
    }
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isFree: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  baseLayout: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isFree: false,
  baseLayout: false,
};
