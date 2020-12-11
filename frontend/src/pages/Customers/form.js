import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { Form, Input, Switch } from 'formik-antd';
import { message, Modal, Spin } from 'antd';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import FormControl from '~/components/Form/FormControl';
import Row from '~/components/Row';
import Can from '~/components/Can';
import handleError from '~/Utils/errorHandler';
import api from '~/services/api';
import { ModalFooter } from 'components/Modal';

export default function CustomersForm({ visible, recordID, onClose }) {
  const { t } = useTranslation();
  const [recordData, setRecordData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSave = async (values, { setErrors }) => {
    setLoading(true);
    try {
      await api.post('/customers', values);
      message.success(t('messages:success'));
      onClose();
    } catch (error) {
      setErrors(handleError(error));
    }
    setLoading(false);
    return;
  };

  const customerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required(),
    dob: Yup.string().required(),
    cpf: Yup.string().required(),
    rg: Yup.string().required(),
    phone: Yup.string().required(),
  });

  return (
    <>
      <div>
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={recordData}
          enableReinitialize
          onSubmit={handleSave}
          validationSchema={customerSchema}
        >
          {({ isSubmitting, submitForm, errors, resetForm }) => (
            <Modal
              visible={visible}
              afterClose={resetForm}
              onCancel={onClose}
              title={t('screens:customers.modal.title.add')}
              footer={<ModalFooter onOk={submitForm} loading={loading || isSubmitting} onCancel={onClose} />}
            >
              <Spin spinning={loading || isSubmitting}>
                <Form>
                  <Row>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.name}
                      field="name"
                      label={t('screens:customers.data.name')}
                      required
                    >
                      <Input name="name" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.dob}
                      field="dob"
                      label={t('screens:customers.data.dob')}
                      required
                    >
                      <Input name="dob" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.cpf}
                      field="cpf"
                      label={t('screens:customers.data.cpf')}
                      required
                    >
                      <Input name="cpf" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.rg}
                      field="rg"
                      label={t('screens:customers.data.rg')}
                      required
                    >
                      <Input name="rg" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.phone}
                      field="phone"
                      label={t('screens:customers.data.phone')}
                      required
                    >
                      <Input name="phone" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                  </Row>
                </Form>
              </Spin>
            </Modal>
          )}
        </Formik>
      </div>
    </>
  );
}

CustomersForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  recordID: PropTypes.number,
  onClose: PropTypes.func,
};

CustomersForm.defaultProps = {
  recordID: null,
};
