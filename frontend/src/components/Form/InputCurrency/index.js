import React from 'react';
import { InputNumber, Input } from 'formik-antd';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function InputCurrency({ currency, number, ...props }) {
  return (
    <Container className="input-currency">
      <span className="currency">{currency}</span>
      {number ? <InputNumber {...props} /> : <Input {...props} />}
    </Container>
  );
}

InputCurrency.propTypes = {
  number: PropTypes.bool,
};

InputCurrency.defaultProps = {
  number: true,
};
