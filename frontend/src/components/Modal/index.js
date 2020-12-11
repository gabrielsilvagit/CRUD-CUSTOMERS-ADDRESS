import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import { Footer } from './styles';

export function ModalFooter({ loading, onCancel, onOk, okText, cancelText, cancelColor, okColor, children, type }) {
  if (type === 'info') {
    return (
      <Footer>
        <Button loading={loading} color={cancelColor} onClick={onCancel}>
          {cancelText}
        </Button>
      </Footer>
    );
  } else {
    return (
      <Footer>
        <Button loading={loading} color={cancelColor} onClick={onCancel}>
          {cancelText}
        </Button>
        <Button loading={loading} color={okColor} onClick={onOk}>
          {okText}
        </Button>
      </Footer>
    );
  }
}

ModalFooter.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOf([PropTypes.any]),
  onCancel: PropTypes.oneOfType([PropTypes.func]),
  onOK: PropTypes.oneOf([PropTypes.func]),
  cancelText: PropTypes.oneOfType([PropTypes.any]),
  okText: PropTypes.oneOfType([PropTypes.any]),
  cancelColor: PropTypes.string,
  okColor: PropTypes.string,
};

ModalFooter.defaultProps = {
  loading: false,
  children: null,
  cancelText: 'Cancelar',
  okText: 'Salvar',
  cancelColor: 'default',
  okColor: 'primary',
};
