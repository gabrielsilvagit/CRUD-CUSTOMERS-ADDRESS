import styled from 'styled-components';
import { lighten } from 'polished';
import { Table } from 'antd';

export const Container = styled(Table)`
  .ant-table-thead > tr > th.table-action,
  .ant-table-tbody > tr > td.table-action {
    max-width: ${props => props.actionSize} !important;
    width: ${props => props.actionSize} !important;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
    background-color: ${props => lighten(0.5, props.theme.color2)};
  }

  .ant-table-thead > tr > th {
    color: ${props => props.theme.color1};
    font-weight: bold;
  }

  .ant-table-pagination {
    position: relative;
    display: flex;
    float: none;
    justify-content: flex-end;

    .ant-pagination-total-text {
      position: absolute;
      left: 0;
      font-weight: bold;
      color: ${props => props.theme.color1};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;

  .search-field {
    max-width: 250px;
    margin-right: 5px;
  }
`;

export const Actions = styled.div`
  display: flex;

  .ll-btn {
    background: transparent;

    span > svg {
      color: ${props => props.theme.color6};
    }

    &:hover {
      background: transparent;

      span > svg {
        color: ${props => props.theme.color7};
      }
    }
  }
`;

export const TableColumn = styled(Table.Column)``;
