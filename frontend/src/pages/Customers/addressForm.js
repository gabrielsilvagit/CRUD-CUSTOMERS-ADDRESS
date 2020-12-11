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

export default function AddressForm({ visible, recordID, customerID, onClose }) {
  const { t } = useTranslation();
  const [recordData, setRecordData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSave = async (values, { setErrors }) => {
    setLoading(true);
    try {
      if (recordID) {
        await api.put(`/address/${recordID}`, values);
        message.success(t('messages:success'));
      } else {
        values.customer_id = customerID;
        await api.post('/address', values);
        message.success(t('messages:success'));
      }
      onClose();
    } catch (error) {
      setErrors(handleError(error));
    }
    setLoading(false);
    return;
  };

  const fetchRecord = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/address/${recordID}`);
      console.log(data);
      setRecordData(data);
    } catch (error) {
      handleError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (recordID) {
      fetchRecord();
    } else {
      setRecordData({});
    }
  }, [recordID]);

  const addressSchema = Yup.object().shape({
    city: Yup.string()
      .min(3)
      .required(),
    state: Yup.string().required(),
    country: Yup.string().required(),
    cep: Yup.string().required(),
    number: Yup.string().required(),
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
          validationSchema={addressSchema}
        >
          {({ isSubmitting, submitForm, errors, resetForm }) => (
            <Modal
              visible={visible}
              afterClose={resetForm}
              onCancel={onClose}
              title={t('screens:address.modal.title.add')}
              footer={<ModalFooter onOk={submitForm} loading={loading || isSubmitting} onCancel={onClose} />}
            >
              <Spin spinning={loading || isSubmitting}>
                <Form>
                  <Row>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.city}
                      field="city"
                      label={t('screens:address.data.city')}
                      required
                    >
                      <Input name="city" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.state}
                      field="state"
                      label={t('screens:address.data.state')}
                      required
                    >
                      <Input name="state" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.country}
                      field="country"
                      label={t('screens:address.data.country')}
                      required
                    >
                      <Input name="country" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.cep}
                      field="cep"
                      label={t('screens:address.data.cep')}
                      required
                    >
                      <Input name="cep" style={{ textTransform: 'uppercase' }} />
                    </FormControl>
                    <FormControl
                      cols={{ xs: 24 }}
                      error={errors.number}
                      field="number"
                      label={t('screens:address.data.number')}
                      required
                    >
                      <Input name="number" style={{ textTransform: 'uppercase' }} />
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

AddressForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  recordID: PropTypes.number,
  onClose: PropTypes.func,
};

AddressForm.defaultProps = {
  recordID: null,
};
