import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

import { Container } from './styles';
import { lighten } from 'polished';

export default function HeaderTags({ color, text }) {
  return (
    <Container>
      <Tag
        style={{
          textTransform: 'uppercase',
          color: color,
          border: `1px solid ${lighten(0.3, color)}`,
          background: lighten(0.5, color),
        }}
      >
        {text}
      </Tag>
    </Container>
  );
}

HeaderTags.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

HeaderTags.defaultProps = {
  text: 'volcano',
  color: 'volcano',
};
