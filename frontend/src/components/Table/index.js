import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';

import { Container, Header, Actions, TableColumn } from './styles';

export function Table({ children, actionSize, pagination, pageSize, type, ...props }) {
  const { t } = useTranslation();

  const noData = <Empty description={t('screens:noData')} />;

  return (
    <>
      <Container
        actionSize={actionSize}
        {...props}
        pagination={
          pagination && {
            pageSize: pageSize,
            showTotal: (total, range) =>
              `${t('screens:pagination.showing')} ${range[0]} ${t('screens:pagination.to')} ${range[1]} ${t(
                'screens:pagination.of'
              )} ${total} ${t('screens:pagination.records')}`,
          }
        }
        locale={{ emptyText: noData }}
      >
        {children}
      </Container>
    </>
  );
}

Table.propTypes = {
  children: PropTypes.any,
  actionSize: PropTypes.string,
  pagination: PropTypes.bool,
  pageSize: PropTypes.number,
  type: PropTypes.string,
};

Table.defaultProps = {
  children: null,
  actionSize: '200px',
  pagination: true,
  type: 'default',
  pageSize: 10,
};

export function TableHeader({ children }) {
  return <Header className="table-header">{children}</Header>;
}

TableHeader.propTypes = {
  children: PropTypes.any,
};

TableHeader.defaultProps = {
  children: null,
};

export function TableActions({ children }) {
  return <Actions className="table-header">{children}</Actions>;
}

TableActions.propTypes = {
  children: PropTypes.any,
};

TableActions.defaultProps = {
  children: null,
};

export function Column({ children, ...props }) {
  return <TableColumn {...props}>{children}</TableColumn>;
}

Column.propTypes = {
  children: PropTypes.any,
};

Column.defaultProps = {
  children: null,
};
