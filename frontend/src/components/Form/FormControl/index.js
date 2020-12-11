import React from 'react';
import PropTypes from 'prop-types';
import InputError from '~/components/Form/Error';
import { Col } from 'antd';

import { Container } from './styles';

export default function FormControl({ cols, children, align, label, error, field, required, ...props }) {
  const content = (
    <Container className={`form-control ${error ? 'error' : ''}`}>
      {label && (
        <label htmlFor={field} {...props}>
          {label} {required && <span className="field-required">*</span>}
        </label>
      )}
      {children}
      <InputError msg={error} />
    </Container>
  );

  return cols ? (
    <Col xs={cols.xs || cols.span} sm={cols.sm} md={cols.md} lg={cols.lg} xl={cols.xl}>
      {content}
    </Col>
  ) : (
    content
  );
}

FormControl.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  field: PropTypes.string.isRequired,
  error: PropTypes.string,
  cols: PropTypes.any,
  align: PropTypes.any,
};
FormControl.defaultProps = {
  label: null,
  required: false,
  error: null,
  cols: null,
  align: 'flex-start',
};
