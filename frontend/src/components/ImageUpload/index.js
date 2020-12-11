import React, { useState, useEffect } from 'react';
import { message, Upload, Spin } from 'antd';
import PropTypes from 'prop-types';
import { FaCamera, FaRegTrashAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ImagePreview, UploadStyle, Container } from './styles';
import errorHandler from '~/Utils/errorHandler';
import api from '~/services/api';

export default function ImageUpload({ icon, text, upUrl, delUrl, size, image, postUpload, postDelete }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const { token } = useSelector(state => state.auth);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 20;
    if (!isLt2M) {
      message.error('O arquivo deve ser menor que 20MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, image => {
        setImageUrl(image);
        if (postUpload) postUpload();
        setLoading(false);
      });
    }
  };

  const uploadButton = (
    <>
      {icon}
      <div className="ant-upload-text">{text || t('messages:add')}</div>
    </>
  );

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(delUrl);
      setImageUrl(null);
      postDelete();
    } catch (error) {
      errorHandler(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (image) {
      setImageUrl(image);
    }
  }, [image]);

  const uploadConfig = {
    name: 'file',
    action: upUrl,
    listType: 'picture-card',
    showUploadList: false,
    beforeUpload: beforeUpload,
    onChange: handleChange,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  return (
    <>
      <UploadStyle />
      {imageUrl ? (
        <ImagePreview className="img-preview" size={size} background={imageUrl}>
          <div className="img-preview-wrapper">
            <div className="img-preview-delete" onClick={handleDelete}>
              <FaRegTrashAlt size={24} />
              {t('messages:delete')}
            </div>
            <div className="img-preview-file"></div>
          </div>
        </ImagePreview>
      ) : (
        <Container {...uploadConfig} size={size}>
          <Spin spinning={loading}>{imageUrl || uploadButton}</Spin>
        </Container>
      )}
    </>
  );
}

ImageUpload.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  upUrl: PropTypes.string.isRequired,
  delUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

ImageUpload.defaultProps = {
  icon: <FaCamera size={24} />,
  text: null,
  size: '100px',
};
