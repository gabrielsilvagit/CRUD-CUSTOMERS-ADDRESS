import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function BaseLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
