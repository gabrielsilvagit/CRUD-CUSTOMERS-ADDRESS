import styled from 'styled-components';
import { PageHeader } from 'antd';

export const Container = styled(PageHeader)`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  height: max-content;
  margin-bottom: 30px;
  padding: 0;

  .ant-page-header-heading {
    display: flex;
    flex-grow: 1;
  }

  .ant-page-header-content {
    padding-top: 0;
    min-width: max-content;
  }

  .ant-page-header-heading-title {
    color: ${props => props.theme.color1};
  }

  .ant-page-header-back-button {
    color: ${props => props.theme.color1};
  }

  .ant-page-header-back-button:focus,
  .ant-page-header-back-button:hover {
    color: ${props => props.theme.color2};
  }
`;

export const SectionHeader = styled.h2`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0;

  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.color4};

  margin-bottom: 15px;
  margin-top: 30px;

  span {
    display: flex;
    flex: 1;
  }
`;
