import styled, { createGlobalStyle } from 'styled-components';
import { Upload } from 'antd';

import { math } from 'polished';

export const Container = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: ${props => props.size} !important;
    height: ${props => props.size} !important;
    max-width: ${props => props.size} !important;
    max-height: ${props => props.size} !important;
  }
`;

export const UploadStyle = createGlobalStyle`
  .ant-upload {
    border-radius: 50% !important;
  }

  span.ant-upload-picture-card-wrapper {
    display: flex;
    justify-content: center;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .img-preview-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;

    width: ${props => math(`${props.size} + 3px`)};
    height: ${props => math(`${props.size} + 3px`)};
    max-width: ${props => math(`${props.size} + 3px`)};
    max-height: ${props => math(`${props.size} + 3px`)};
  }

  .img-preview-delete {
    position: absolute;
    z-index: 100;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    cursor: pointer;

    background: rgba(0, 0, 0, 0.5);
    color: #fff;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &:hover {
      opacity: 1;
    }
  }

  .img-preview-file {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    width: ${props => math(`${props.size} - 8px`)};
    height: ${props => math(`${props.size} - 8px`)};
    max-width: ${props => math(`${props.size} - 8px`)};
    max-height: ${props => math(`${props.size} - 8px`)};

    background-image: url(${props => props.background});
    background-size: cover;
  }
`;
