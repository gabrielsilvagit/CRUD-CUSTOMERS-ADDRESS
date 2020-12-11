import React, { useEffect, useState } from 'react';
import { Tag, Input, Popconfirm, Icon, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa';

import api from '~/services/api';
import DefaultLayout from '~/pages/_layouts/full';

import Box from '~/components/Box';
import PageTitle from '~/components/PageTitle';
import Button from '~/components/Button';
import { Table, TableActions } from '~/components/Table';
import handleError from '~/Utils/errorHandler';
import CustomerForm from './form';
import history from '~/services/history';

export default function Customers() {
  const { t } = useTranslation();
  const { Search } = Input;
  const [loading, setLoading] = useState(false);
  const [recordData, setRecordData] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/customers');
      setRecordData(data);
    } catch (error) {
      handleError(error);
    }
    setLoading(false);
  };

  const handleEdit = async id => {
    history.push(`/customers/${id}/edit`);
  };

  const handleDelete = async id => {
    try {
      await api.delete(`customers/${id}`);
      message.success(t('messages:success'));
      fetchData();
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (!showCustomerForm) {
      fetchData();
      setSelectedRecord(null);
    }
  }, [showCustomerForm]);

  const tableColumns = [
    {
      title: t('screens:customers.data.id'),
      dataIndex: 'id',
      width: '100px',
      key: 'id',
    },
    {
      title: t('screens:customers.data.name'),
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:customers.data.dob'),
      dataIndex: 'dob',
      key: 'dob',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:customers.data.cpf'),
      dataIndex: 'cpf',
      key: 'cpf',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:customers.data.rg'),
      dataIndex: 'rg',
      key: 'rg',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:customers.data.phone'),
      dataIndex: 'phone',
      key: 'phone',
      render: (text, record) => <span style={{ textTransform: 'uppercase' }}>{text}</span>,
    },
    {
      title: t('screens:customers.data.actions'),
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

  return (
    <DefaultLayout>
      <PageTitle title={t('screens:customers.title')}>
        <Button loading={loading} color="primary" onClick={() => setShowCustomerForm(true)}>
          <FaPlus size="12px" /> {t('screens:customers.btnNew')}
        </Button>
      </PageTitle>
      <Box>
        <Table dataSource={recordData} loading={loading} actionSize="140px" columns={tableColumns} />
      </Box>
      <CustomerForm visible={showCustomerForm} onClose={() => setShowCustomerForm(false)} />
    </DefaultLayout>
  );
}
