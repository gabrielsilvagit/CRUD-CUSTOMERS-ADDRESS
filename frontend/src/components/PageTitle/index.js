import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';

import { Container, SectionHeader } from './styles';
import history from 'services/history';

export default function PageTitle({ title, subtitle, onBack, children, size}) {
  return size === 2 ? (
    <SectionHeader>
      <span>{title}</span>
      {children}
    </SectionHeader>
  ) : (
    <Container onBack={onBack} title={title} subTitle={subtitle}>
      {children}
    </Container>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onBack: PropTypes.func,
};

PageTitle.defaultProps = {
  children: <></>,
  subtitle: null,
  onBack: null,
  size: 1,
};
