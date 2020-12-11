import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Input, Form } from 'formik-antd';
import { useTranslation } from 'react-i18next';
import { Spin, message, Icon, Popconfirm } from 'antd';
import { FaPlus, FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';
import * as Yup from 'yup';

import Row from '~/components/Row';
import api from '~/services/api';
import DefaultLayout from '~/pages/_layouts/full';
import Button from '~/components/Button';
import PageTitle from '~/components/PageTitle';
import Box from '~/components/Box';
import FormControl from '~/components/Form/FormControl';
import FormActions from '~/components/Form/FormActions';
import { Table, TableActions } from '~/components/Table';
import errorHandler from '~/Utils/errorHandler';
import history from '~/services/history';
import AddressForm from './addressForm';

const initialValues = {};

export default function CustomerEdit(props) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [recordData, setRecordData] = useState({});
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const fetchRecord = async () => {
    setLoading(true);
    try {
      const { id } = props.match.params;
      if (id) {
        const { data } = await api.get(`/customers/${id}`);
        setRecordData(data);
      } else {
        setRecordData(initialValues);
      }
    } catch (error) {
      errorHandler(error);
    }
    setLoading(false);
  };

  const handleSave = async (values, { setErrors }) => {
    setLoading(true);
    try {
      if (values.id) {
        await api.put(`/customers/${values.id}`, values);
        message.success(t('messages:success'));
      } else {
      }
      fetchRecord();
      history.push(`/customers`);
    } catch (error) {
      setErrors(errorHandler(error));
    }
    setLoading(false);
  };

  const handleEdit = async id => {
    setSelectedRecord(id);
    setShowAddressForm(true);
  };

  const handleDelete = async id => {
    try {
      await api.delete(`address/${id}`);
      message.success(t('messages:success'));
      fetchRecord();
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleBack = () => {
    history.push('/customers');
  };

  useEffect(() => {
    if (!showAddressForm) {
      fetchRecord();
      setSelectedRecord(null);
    }
  }, [showAddressForm]);

  const tableColumns = [
    {
      title: t('screens:address.data.city'),
      dataIndex: 'city',
      key: 'city',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:address.data.state'),
      dataIndex: 'state',
      key: 'state',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:address.data.country'),
      dataIndex: 'country',
      key: 'country',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:address.data.cep'),
      dataIndex: 'cep',
      key: 'cep',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:address.data.number'),
      dataIndex: 'number',
      key: 'number',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:address.data.actions'),
      dataIndex: 'actions',
      key: 'actions',
      width: '140px',
      align: 'center',
      render: (text, record) => (
        <TableActions>
          <Button title={t('messages:edit')} onClick={() => handleEdit(record.id)}>
            <FaPencilAlt />
          </Button>
          <Popconfirm
            title={t('messages:confirmDelete')}
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            okText={t('messages:delete')}
            cancelText={t('messages:no')}
            onConfirm={() => handleDelete(record.id)}
          >
            <Button title={t('messages:delete')}>
              <FaRegTrashAlt />
            </Button>
          </Popconfirm>
        </TableActions>
      ),
    },
  ];

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
    <DefaultLayout>
      <PageTitle
        title={t('screens:customers.title')}
        subtitle={recordData.name ? `editando - ${recordData.name}` : null}
      />
      <PageTitle size={2} title={t('screens:recordData')} />
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={recordData}
        enableReinitialize
        onSubmit={handleSave}
        validationSchema={customerSchema}
      >
        {({ errors, setValues, values }) => (
          <Spin spinning={loading}>
            <Form>
              <Input type="hidden" name="id" />
              <Box>
                <Row>
                  <FormControl
                    cols={{ xs: 5 }}
                    error={errors.name}
                    field="name"
                    label={t('screens:customers.data.name')}
                    required
                  >
                    <Input name="name" style={{ textTransform: 'uppercase' }} />
                  </FormControl>
                  <FormControl
                    cols={{ xs: 4 }}
                    error={errors.dob}
                    field="dob"
                    label={t('screens:customers.data.dob')}
                    required
                  >
                    <Input name="dob" style={{ textTransform: 'uppercase' }} />
                  </FormControl>
                  <FormControl
                    cols={{ xs: 5 }}
                    error={errors.cpf}
                    field="cpf"
                    label={t('screens:customers.data.cpf')}
                    required
                  >
                    <Input name="cpf" style={{ textTransform: 'uppercase' }} />
                  </FormControl>
                  <FormControl
                    cols={{ xs: 5 }}
                    error={errors.rg}
                    field="rg"
                    label={t('screens:customers.data.rg')}
                    required
                  >
                    <Input name="rg" style={{ textTransform: 'uppercase' }} />
                  </FormControl>
                  <FormControl
                    cols={{ xs: 5 }}
                    error={errors.phone}
                    field="phone"
                    label={t('screens:customers.data.phone')}
                    required
                  >
                    <Input name="phone" style={{ textTransform: 'uppercase' }} />
                  </FormControl>
                </Row>
                <Row>
                  <FormActions>
                    <Button onClick={handleBack}>Cancelar</Button>
                    {recordData.id && (
                      <Button type="submit" color="primary">
                        Salvar
                      </Button>
                    )}
                  </FormActions>
                </Row>
              </Box>
            </Form>
          </Spin>
        )}
      </Formik>
      <PageTitle size={2} title={t('screens:address.title')}>
        <Button
          loading={loading}
          color="primary"
          onClick={() => {
            setSelectedRecord(null);
            setShowAddressForm(true);
          }}
        >
          <FaPlus size="12px" /> {t('screens:address.btnNew')}
        </Button>
      </PageTitle>
      <Box>
        <Table dataSource={recordData.address} loading={loading} actionSize="140px" columns={tableColumns} />
      </Box>
      <AddressForm
        visible={showAddressForm}
        customerID={props.match.params.id}
        recordID={selectedRecord}
        onClose={() => {
          setShowAddressForm(false);
          setSelectedRecord(null);
          fetchRecord();
        }}
      />
    </DefaultLayout>
  );
}
